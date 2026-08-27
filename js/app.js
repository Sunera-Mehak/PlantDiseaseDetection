/**
 * Plant Disease Detection - Application UI & Navigation Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewCard = document.getElementById('previewCard');
  const previewImg = document.getElementById('previewImg');
  const fileNameBadge = document.getElementById('fileNameBadge');
  const removeBtn = document.getElementById('removeBtn');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const errorBanner = document.getElementById('errorBanner');
  const resultCard = document.getElementById('resultCard');
  const diseasePredictionName = document.getElementById('diseasePredictionName');
  const confidenceValueText = document.getElementById('confidenceValueText');
  const confidenceBarFill = document.getElementById('confidenceBarFill');
  const diseaseCauseText = document.getElementById('diseaseCauseText');
  const diseasePreventionList = document.getElementById('diseasePreventionList');
  const emptyStateView = document.getElementById('emptyStateView');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Supported file formats
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
  const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

  // Asynchronously attempt to load TensorFlow.js model
  if (typeof loadModel === 'function') {
    loadModel();
  }

  // Mobile Navigation Toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Smooth Navigation Links
  document.querySelectorAll('.nav-link, .footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (navLinks) navLinks.classList.remove('open');
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Drag & Drop Upload Handlers
  ['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadArea.classList.add('drag-over');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadArea.classList.remove('drag-over');
    }, false);
  });

  uploadArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      processSelectedFile(dt.files[0]);
    }
  });

  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFile(e.target.files[0]);
    }
  });

  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetUIState();
    });
  }

  function processSelectedFile(file) {
    hideError();
    
    const fileName = file.name || '';
    const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
    const isValidType = ALLOWED_TYPES.includes(file.type) || ALLOWED_EXTENSIONS.includes(fileExt);

    if (!isValidType) {
      showError("Please upload a JPG, JPEG, or PNG image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      fileNameBadge.textContent = file.name;
      
      uploadArea.style.display = 'none';
      previewCard.style.display = 'block';
      emptyStateView.style.display = 'none';
      resultCard.style.display = 'none';
    };

    reader.readAsDataURL(file);
  }

  function resetUIState() {
    fileInput.value = '';
    previewImg.src = '';
    fileNameBadge.textContent = '';
    
    uploadArea.style.display = 'flex';
    previewCard.style.display = 'none';
    emptyStateView.style.display = 'block';
    resultCard.style.display = 'none';
    hideError();
  }

  function showError(msg) {
    if (errorBanner) {
      errorBanner.textContent = msg;
      errorBanner.style.display = 'block';
    }
  }

  function hideError() {
    if (errorBanner) {
      errorBanner.style.display = 'none';
      errorBanner.textContent = '';
    }
  }

  // --- Analyze Button Click Event ---
  analyzeBtn.addEventListener('click', async () => {
    if (!previewImg.src || previewCard.style.display === 'none') return;
    hideError();

    analyzeBtn.disabled = true;
    analyzeBtn.innerHTML = `
      <svg class="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2 a10 10 0 0 1 10 10" stroke-linecap="round"/>
      </svg>
      <span>Analyzing Leaf...</span>
    `;

    setTimeout(async () => {
      const result = await predictLeaf(previewImg);

      analyzeBtn.disabled = false;
      analyzeBtn.innerHTML = `<span>Analyze Leaf</span>`;

      if (!result.success) {
        showError(result.message || "AI model unavailable — please add the trained TensorFlow.js model.");
        resultCard.style.display = 'none';
      } else {
        // Display high-confidence prediction result
        diseasePredictionName.textContent = result.disease;
        confidenceValueText.textContent = `${result.confidence}%`;
        confidenceBarFill.style.width = `${result.confidence}%`;

        // Render Cause
        if (diseaseCauseText) {
          diseaseCauseText.textContent = result.cause || "Environmental or pathogen leaf infection.";
        }

        // Render AI Prevention Suggestions
        if (diseasePreventionList) {
          diseasePreventionList.innerHTML = '';
          if (Array.isArray(result.prevention)) {
            result.prevention.forEach(item => {
              const li = document.createElement('li');
              li.textContent = item;
              diseasePreventionList.appendChild(li);
            });
          }
        }
        
        resultCard.style.display = 'block';
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 450);
  });
});
