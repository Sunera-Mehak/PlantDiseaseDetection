/**
 * Plant Pathology Knowledge Base
 * Maps 33+ plant diseases & healthy states to biological causes and actionable AI prevention suggestions.
 */
const DISEASE_KNOWLEDGE_BASE = {
  "Alfalfa Mosaic": {
    cause: "Alfalfa Mosaic Virus (AMV) transmitted by aphid vector species, causing bright yellow calico mottle and leaf malformation.",
    prevention: [
      "Control aphid populations using insecticidal soap or neem oil.",
      "Remove virus-infected weeds from perimeter fields.",
      "Plant certified virus-free seed stock.",
      "Isolate susceptible crops from legume or alfalfa fields."
    ]
  },
  "Anthracnose": {
    cause: "Fungal pathogen Colletotrichum spp., producing dark, sunken circular lesions with orange/pink spore masses in humid conditions.",
    prevention: [
      "Apply copper or chlorothalonil fungicides at bud break.",
      "Prune dead twigs and thin dense canopy foliage to enhance airflow.",
      "Avoid overhead sprinkler irrigation to keep leaves dry.",
      "Destroy and dispose of infected plant debris in autumn."
    ]
  },
  "Apple Scab": {
    cause: "Ascomycete fungus Venturia inaequalis causing velvety olive-green to dark brown scabby spots on leaves and fruit.",
    prevention: [
      "Plant scab-resistant apple cultivars (e.g. Liberty, Enterprise).",
      "Apply protective sulfur or copper sprays early in spring.",
      "Rake and burn fallen leaves to reduce overwintering spore inoculum.",
      "Prune canopy branches to accelerate foliage drying after rain."
    ]
  },
  "Bacterial Canker": {
    cause: "Clavibacter michiganensis or Pseudomonas syringae, causing dark brown cankers, gumming, wilting, and leaf spot margin necrosis.",
    prevention: [
      "Disinfect all pruning tools with 70% isopropyl alcohol between cuts.",
      "Prune branches during dry summer weather to reduce infection risk.",
      "Apply copper sprays before autumn rain events.",
      "Avoid excess nitrogen fertilizer which causes tender susceptible shoots."
    ]
  },
  "Bacterial Leaf Spot": {
    cause: "Xanthomonas or Pseudomonas bacteria causing water-soaked spots that dry into dark angular necrotic leaf lesions.",
    prevention: [
      "Use certified pathogen-free seeds and transplants.",
      "Avoid working in crop fields when foliage is wet.",
      "Apply copper-based bactericides at early symptom onset.",
      "Rotate non-host crops for 2 to 3 years."
    ]
  },
  "Bacterial Soft Rot": {
    cause: "Pectobacterium carotovorum bacteria secreting pectolytic enzymes that degrade plant cell walls into mushy decaying rot.",
    prevention: [
      "Store harvested crops in cool, dry, well-ventilated conditions.",
      "Avoid mechanical bruising or harvest damage to plant tissues.",
      "Disinfect washing water and harvest equipment.",
      "Ensure field soils have adequate drainage and avoid waterlogging."
    ]
  },
  "Bacterial Wilt": {
    cause: "Ralstonia solanacearum bacteria clogging xylem vessels, leading to sudden vascular collapse and daytime foliage wilting.",
    prevention: [
      "Plant resistant varieties and maintain strict soil sanitation.",
      "Control root-knot nematodes that facilitate bacterial root entry.",
      "Rotate crops with non-susceptible monocots like corn or wheat.",
      "Solarize contaminated soil during hot summer months."
    ]
  },
  "Black Rot": {
    cause: "Xanthomonas campestris or Guignardia bidwellii, causing distinct V-shaped yellow leaf margins and dark dry rot.",
    prevention: [
      "Use clean certified seed and resistant crop varieties.",
      "Prune out infected leaves and vines promptly.",
      "Apply copper fungicides during early vegetative growth.",
      "Destroy brassica or grape crop residues post-harvest."
    ]
  },
  "Black Spot": {
    cause: "Fungus Diplocarpon rosae producing feathery black spots surrounded by chlorotic yellow halos on leaf surfaces.",
    prevention: [
      "Water plants at soil level using drip irrigation.",
      "Spray bio-fungicides containing Bacillus subtilis or neem oil.",
      "Rake up and dispose of fallen diseased leaves.",
      "Ensure plants receive at least 6 hours of full sunlight."
    ]
  },
  "Botrytis Bunch Rot": {
    cause: "Grey mold fungus Botrytis cinerea attacking flower clusters and fruit, causing soft brownish decay and fluffy grey spores.",
    prevention: [
      "Remove canopy leaf layers around fruit clusters to increase aeration.",
      "Apply targeted bio-fungicides or bio-control agents.",
      "Avoid high-nitrogen fertilizer applications near harvest.",
      "Harvest ripe fruit promptly before wet weather spells."
    ]
  },
  "Citrus Canker": {
    cause: "Bacterium Xanthomonas citri creating raised corky brown lesions with yellow halos on citrus foliage and fruit.",
    prevention: [
      "Construct windbreaks to reduce leaf abrasion and bacterial spread.",
      "Apply copper bactericides regularly during major leaf flushes.",
      "Decontaminate workers, vehicles, and harvest equipment.",
      "Destroy severely infected trees in accordance with quarantine protocols."
    ]
  },
  "Clubroot": {
    cause: "Soil-borne protist Plasmodiophora brassicae causing distorted, swollen roots that restrict water and nutrient uptake.",
    prevention: [
      "Raise soil pH above 7.2 using agricultural hydrated lime.",
      "Practice long 5-to-7 year crop rotations away from brassicas.",
      "Improve soil drainage and prevent field runoff contamination.",
      "Plant clubroot-resistant hybrid varieties."
    ]
  },
  "Crown Gall": {
    cause: "Agrobacterium tumefaciens transferring T-DNA into host cells, inducing tumor-like woody galls on stems and roots.",
    prevention: [
      "Inspect nursery stock thoroughly before planting.",
      "Avoid root and stem mechanical injuries during cultivation.",
      "Dip roots in biocontrol agent Agrobacterium radiobacter strain K84.",
      "Remove and destroy gall-infested plants."
    ]
  },
  "Cucumber Mosaic": {
    cause: "Cucumber Mosaic Virus (CMV) vectored by over 80 aphid species, causing shoestring leaf distortion and green mottle.",
    prevention: [
      "Eradicate perennial weed hosts near garden beds.",
      "Reflective silver mulches deter aphid vectors.",
      "Isolate susceptible cucurbit crops.",
      "Remove infected plants as soon as mosaic symptoms appear."
    ]
  },
  "Curly Top": {
    cause: "Curtovirus transmitted by the beet leafhopper (Circulifer tenellus), causing inward leaf rolling, yellowing, and thick veins.",
    prevention: [
      "Shade young plants with row covers during leafhopper migration.",
      "Use dense plant spacing to deter leafhopper feeding preference.",
      "Apply insecticidal oils or kaolin clay sprays.",
      "Plant early in spring before leafhopper flights begin."
    ]
  },
  "Damping-Off": {
    cause: "Pythium, Rhizoctonia, or Fusarium fungi attacking germinating seeds and young seedlings at the soil line.",
    prevention: [
      "Use sterile soil-less potting mixes for seed germination.",
      "Do not overwater seedling trays; ensure proper drainage.",
      "Maintain adequate warmth and air movement around trays.",
      "Treat seeds with bio-fungicide seed dressings."
    ]
  },
  "Downy Mildew": {
    cause: "Oomycete pathogens (Peronospora spp.) producing angular yellow leaf spots on upper surfaces and purple-gray fuzz underneath.",
    prevention: [
      "Increase row spacing for fast canopy drying.",
      "Apply copper soap or systemic oomycete fungicides preventive.",
      "Switch to drip irrigation to keep foliage completely dry.",
      "Plant resistant crop varieties."
    ]
  },
  "Early Blight": {
    cause: "Alternaria solani fungus causing target-shaped concentric brown spots with yellow halos on lower leaves.",
    prevention: [
      "Mulch soil heavily to prevent rain splash of fungal spores.",
      "Prune away lower leaves up to 12 inches from soil level.",
      "Apply preventive organic copper or sulfur fungicides.",
      "Rotate solanaceous crops every 2–3 years."
    ]
  },
  "Fire Blight": {
    cause: "Erwinia amylovora bacteria turning shoots black and wilted into a characteristic 'shepherd's crook' shape.",
    prevention: [
      "Prune infected branches 8–12 inches below visible damage in winter.",
      "Sanitize tools with 70% alcohol after every cut.",
      "Apply streptomycin or copper sprays during bloom period.",
      "Plant fire blight-resistant rootstocks and cultivars."
    ]
  },
  "Fusarium Wilt": {
    cause: "Soil-borne fungus Fusarium oxysporum invading vascular systems, causing yellowing on one side of plant and vascular browning.",
    prevention: [
      "Plant certified resistant varieties (labeled VFN).",
      "Solarize soil with clear plastic tarps during hot months.",
      "Maintain soil pH near 6.5–7.0.",
      "Use bio-control agents containing Trichoderma harzianum."
    ]
  },
  "Late Blight": {
    cause: "Phytophthora infestans water mold producing water-soaked dark gray/brown expanding spots and white underside fuzz.",
    prevention: [
      "Destroy and bag infected foliage immediately.",
      "Apply protective copper fungicides ahead of cool rainy weather.",
      "Ensure excellent field drainage and canopy air movement.",
      "Plant late blight-resistant seed tubers."
    ]
  },
  "Leaf Curl": {
    cause: "Fungus Taphrina deformans or Begomoviruses causing distorted, puckered, thickened reddish/yellow curled leaves.",
    prevention: [
      "Apply copper fungicide sprays during winter dormancy before bud swell.",
      "Control whitefly insect vectors if virus-induced.",
      "Pick off and destroy affected early leaves.",
      "Keep trees well-watered and fertilized to outgrow stress."
    ]
  },
  "Phytophthora Blight": {
    cause: "Soil-borne oomycete Phytophthora capsici causing sudden vine wilt, crown rot, and dark water-soaked lesions.",
    prevention: [
      "Plant on raised beds to promote rapid water drainage.",
      "Avoid planting in fields with a history of standing water.",
      "Apply preventive mefenoxam or copper fungicides.",
      "Rotate with non-susceptible grain crops."
    ]
  },
  "Plum Pox": {
    cause: "Plum Pox Virus (Sharka) spread by aphids and infected budwood, causing pale yellow rings on foliage and distorted fruit.",
    prevention: [
      "Plant certified virus-free stone fruit nursery trees.",
      "Control aphid populations vigorously early in season.",
      "Rogue out and destroy infected trees.",
      "Comply strictly with plant quarantine restrictions."
    ]
  },
  "Potato Leafroll": {
    cause: "Potato Leafroll Virus (PLRV) spread by green peach aphids, causing upward leathery leaf rolling and stunted growth.",
    prevention: [
      "Use certified virus-free seed potatoes.",
      "Monitor and control aphid vector populations.",
      "Apply systemic insecticides at planting.",
      "Eliminate volunteer potato plants and nightshade weeds."
    ]
  },
  "Powdery Mildew": {
    cause: "Erysiphales fungi spreading white or ash-gray powdery fungal coating over leaf surfaces.",
    prevention: [
      "Apply potassium bicarbonate, neem oil, or sulfur sprays.",
      "Plant in full sun to inhibit fungal spore development.",
      "Ensure proper plant spacing for canopy ventilation.",
      "Avoid over-fertilizing with high nitrogen."
    ]
  },
  "Pythium Root Rot": {
    cause: "Pythium oomycete species rotting tender feeder roots into dark brown, water-soaked, sloughing decay.",
    prevention: [
      "Avoid overwatering; allow soil surface to dry between waterings.",
      "Improve soil aeration and sub-surface drainage.",
      "Apply biological fungicides containing Streptomyces or Trichoderma.",
      "Use well-aerated, light potting media."
    ]
  },
  "Rhizoctonia Root Rot": {
    cause: "Rhizoctonia solani fungus producing reddish-brown sunken stem lesions (cankers) at soil level.",
    prevention: [
      "Plant seeds in warm, well-drained soil.",
      "Avoid deep planting of seeds and seedlings.",
      "Rotate crops with grass family plants.",
      "Apply bio-fungicidal seed treatments."
    ]
  },
  "Rust": {
    cause: "Puccinia fungal species producing powdery reddish-orange or rust-colored pustules on leaf undersides.",
    prevention: [
      "Apply sulfur, copper, or myclobutanil fungicides at first sign.",
      "Avoid leaf wetness by using drip irrigation.",
      "Prune dense foliage to enhance airflow.",
      "Remove alternate weed hosts near crops."
    ]
  },
  "Sooty Mold": {
    cause: "Ascomycete saprophytic fungi growing on sticky honeydew excreted by aphids, scale insects, or whiteflies.",
    prevention: [
      "Control honeydew-producing insects using neem oil or insecticidal soap.",
      "Wash off honeydew and black fungal crust with water spray.",
      "Prune affected branches to improve light penetration.",
      "Ant control prevents ants from protecting honeydew pests."
    ]
  },
  "Tobacco Mosaic": {
    cause: "Tobacco Mosaic Virus (TMV), an extremely resilient virus causing dark/light green mosaic mottling and leaf puckering.",
    prevention: [
      "Wash hands with soap before handling plants (especially smokers).",
      "Disinfect garden tools in a 20% milk or bleach solution.",
      "Remove and destroy infected plants immediately.",
      "Plant TMV-resistant crop varieties."
    ]
  },
  "Tomato Spotted Wilt": {
    cause: "Tomato Spotted Wilt Virus (TSWV) vectored by thrips, causing bronze/purple spots, dark streaks, and ring patterns.",
    prevention: [
      "Control thrips with blue/yellow sticky traps and targeted sprays.",
      "Use reflective aluminum mulches to repel thrips.",
      "Eliminate weeds that serve as thrips reservoir hosts.",
      "Plant TSWV-resistant crop hybrids."
    ]
  },
  "Verticillium Wilt": {
    cause: "Vascular wilt fungus Verticillium dahliae causing V-shaped yellowing on lower leaf edges and brown vascular stem staining.",
    prevention: [
      "Plant certified resistant varieties labeled 'V'.",
      "Practice multi-year crop rotation with corn or grasses.",
      "Solarize soil during hot summer months.",
      "Ensure balanced soil potassium levels."
    ]
  },
  "Healthy Leaf": {
    cause: "No plant pathology detected. The foliage exhibits vibrant chlorophyll, optimal hydration, and structural health.",
    prevention: [
      "Maintain consistent drip irrigation at soil level.",
      "Apply balanced organic fertilizer according to soil test recommendations.",
      "Inspect leaf undersides weekly for early pest detection.",
      "Ensure proper plant spacing for canopy ventilation."
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { DISEASE_KNOWLEDGE_BASE };
}
