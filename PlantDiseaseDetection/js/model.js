/**
 * Plant Disease Detection - TensorFlow.js Model Pipeline & Loader
 * Supports 34 Master Plant Pathology Classes.
 */

const MODEL_CONFIG = {
  modelPath: './model/model.json',
  inputShape: [256, 256, 3],
  numClasses: 34
};

let loadedModel = null;
let isModelLoading = false;

/**
 * Creates the TF.js Sequential CNN model topology.
 */
function createModelTopology(numClasses = 34) {
  if (typeof tf === 'undefined') return null;

  const model = tf.sequential();
  
  model.add(tf.layers.conv2d({
    inputShape: [256, 256, 3],
    filters: 16,
    kernelSize: 3,
    padding: 'same',
    activation: 'relu',
    name: 'conv2d'
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], name: 'max_pooling2d' }));

  model.add(tf.layers.conv2d({
    filters: 32,
    kernelSize: 3,
    padding: 'same',
    activation: 'relu',
    name: 'conv2d_1'
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], name: 'max_pooling2d_1' }));

  model.add(tf.layers.globalAveragePooling2d({ dataFormat: 'channelsLast', name: 'global_average_pooling2d' }));

  model.add(tf.layers.dense({ units: 128, activation: 'relu', name: 'dense' }));
  model.add(tf.layers.dropout({ rate: 0.5, name: 'dropout' }));

  model.add(tf.layers.dense({ units: numClasses, activation: 'softmax', name: 'dense_1' }));

  return model;
}

/**
 * Loads the model asynchronously.
 */
async function loadModel() {
  if (loadedModel) return true;
  if (typeof tf === 'undefined') {
    console.warn('TensorFlow.js library is not loaded.');
    return false;
  }

  isModelLoading = true;
  const numClasses = typeof PLANT_CLASSES !== 'undefined' ? PLANT_CLASSES.length : 34;

  // 1. Try loading from model/model.json
  try {
    loadedModel = await tf.loadLayersModel(MODEL_CONFIG.modelPath);
    console.log('TensorFlow.js model loaded successfully from model/model.json.');
    isModelLoading = false;
    return true;
  } catch (error) {
    console.log('HTTP fetch load failed (likely file:// CORS local execution). Initializing local weight fallback...');
  }

  // 2. Fallback: Build model in-memory and set weights from bundle
  try {
    loadedModel = createModelTopology(numClasses);
    
    if (typeof TRAINED_MODEL_WEIGHTS !== 'undefined') {
      const w = TRAINED_MODEL_WEIGHTS;
      
      const c1_w_t = tf.tensor4d(w.c1_w, [3, 3, 3, 16]);
      const c1_b_t = tf.tensor1d(w.c1_b);
      const c2_w_t = tf.tensor4d(w.c2_w, [3, 3, 16, 32]);
      const c2_b_t = tf.tensor1d(w.c2_b);
      const fc1_w_t = tf.tensor2d(w.fc1_w, [32, 128]);
      const fc1_b_t = tf.tensor1d(w.fc1_b);
      const fc2_w_t = tf.tensor2d(w.fc2_w, [128, numClasses]);
      const fc2_b_t = tf.tensor1d(w.fc2_b);

      loadedModel.getLayer('conv2d').setWeights([c1_w_t, c1_b_t]);
      loadedModel.getLayer('conv2d_1').setWeights([c2_w_t, c2_b_t]);
      loadedModel.getLayer('dense').setWeights([fc1_w_t, fc1_b_t]);
      loadedModel.getLayer('dense_1').setWeights([fc2_w_t, fc2_b_t]);

      console.log('TensorFlow.js model initialized successfully with trained weight tensors.');
      isModelLoading = false;
      return true;
    } else {
      console.log('Model topology created, using initialized weights.');
      isModelLoading = false;
      return true;
    }
  } catch (err) {
    console.error('Failed to initialize local model:', err);
    isModelLoading = false;
    loadedModel = null;
    return false;
  }
}

function isModelReady() {
  return loadedModel !== null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MODEL_CONFIG, loadModel, isModelReady };
}
