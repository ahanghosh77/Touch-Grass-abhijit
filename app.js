/**
 * FloraFrost AI — Autumn Garden & Frost-Date Planting Planner
 * Powered by Google Gemma 2 (Local Open-Weight AI) + Offline Botanical Matrix.
 */

// ==========================================================================
// 1. Cold-Hardy Crop Catalog Data
// ==========================================================================
const AUTUMN_CROPS = [
  {
    icon: '🧄',
    name: 'Hardneck Garlic',
    hardiness: 'Extreme (-15°C)',
    hardinessClass: 'hardiness-extreme',
    desc: 'October is prime planting time. Separate cloves and plant 2 inches deep, pointy end up. Requires winter cold stratification to divide into plump bulbs next summer.',
    tip: 'Mulch with 3 inches of shredded dry fall leaves before hard ground freeze'
  },
  {
    icon: '🥬',
    name: 'Winter Spinach',
    hardiness: 'High (-6°C)',
    hardinessClass: 'hardiness-extreme',
    desc: 'Germinates rapidly in cool autumn soil. When frost hits, spinach cells concentrate natural sugars as a biological antifreeze, making autumn leaves noticeably sweeter than summer ones.',
    tip: 'Sow 1/2 inch deep in balcony containers or garden edges'
  },
  {
    icon: '🥦',
    name: 'Lacinato / Curly Kale',
    hardiness: 'Extreme (-10°C)',
    hardinessClass: 'hardiness-extreme',
    desc: 'The champion of cold weather greens. Light frosts break down complex starches into fructose. Pick outer leaves continually through November and December.',
    tip: 'Thrives in partial sun and container planters with good drainage'
  },
  {
    icon: '🥕',
    name: 'French Breakfast Radish',
    hardiness: 'Moderate (-3°C)',
    hardinessClass: 'hardiness-moderate',
    desc: 'Lightning-fast 25-day crop from seed to harvest. Ideal for filling empty balcony pots after summer tomatoes have died back.',
    tip: 'Keep soil evenly moist; harvest as soon as roots reach golf-ball size'
  },
  {
    icon: '🥕',
    name: 'Autumn Nantes Carrots',
    hardiness: 'High (-5°C)',
    hardinessClass: 'hardiness-extreme',
    desc: 'Can be stored directly in cold garden soil through early winter. Heavy straw mulch keeps the ground workable for continuous winter harvest.',
    tip: 'Requires loose, stone-free potting mix or deep raised beds'
  },
  {
    icon: '🌸',
    name: 'Winter Pansies & Violas',
    hardiness: 'High (-6°C)',
    hardinessClass: 'hardiness-extreme',
    desc: 'Edible, cold-hardy flowers that bring cheerful color to dreary autumn balcony railings. Petals bounce back unharmed after morning frost melts.',
    tip: 'Deadhead faded blossoms to encourage continuous autumn blooming'
  }
];

// ==========================================================================
// 2. Pre-authored Gardening Plans Matrix (100% Offline Fallback)
// ==========================================================================
const PLAN_TEMPLATES = {
  'balcony-containers': {
    title: 'Container & Balcony Cold-Hardiness Action Plan',
    summary: 'Because container soil freezes faster than the ground, balcony planters need strategic root insulation and fast-growing cool-season crops before the first deep frost.',
    tasks: [
      {
        title: 'Sow Fast Cold Greens (Spinach & Radishes)',
        desc: 'Clear out dead summer pepper or tomato vines. Loosen the top 3 inches of potting mix and direct-sow winter spinach and French radishes 1/2 inch deep.'
      },
      {
        title: 'Plant Garlic Cloves in Deep Pots',
        desc: 'Select your largest container (at least 8 inches deep). Plant unpeeled garlic cloves 3 inches apart. Water thoroughly once, then let autumn rains take over.'
      },
      {
        title: 'Insulate Planter Edges & Mulch',
        desc: 'Wrap outer terracotta or plastic pot sides with burlap or bubble wrap. Top the soil surface with a 1-inch blanket of fallen leaves to protect roots from night chill.'
      },
      {
        title: 'Check Drainage Holes',
        desc: 'Ensure pot drainage trays are empty of standing water. Freezing water in drainage saucers cracks ceramic pots and drowns dormant winter roots.'
      }
    ],
    companionTip: 'Pair potted <strong>Garlic</strong> alongside <strong>Spinach</strong> or <strong>Winter Pansies</strong>. The natural sulfur aroma deters soil gnats and overwintering pests.',
    soilTemp: '12°C - 15°C',
    hazardLevel: 'Moderate (Pots Freeze Fast)'
  },

  'raised-beds': {
    title: 'Raised Bed Soil Sowing & Winter Mulch Protocol',
    summary: 'Raised beds warm up faster in daytime autumn sun, offering an extended sowing window for root crops, winter greens, and overwintered alliums.',
    tasks: [
      {
        title: 'Tuck in Winter Garlic & Shallots',
        desc: 'Make 2-inch deep furrows spaced 6 inches apart. Press garlic cloves firmly into the soil base, cover with compost, and tamp down lightly.'
      },
      {
        title: 'Establish Cut-and-Come-Again Kale & Chard',
        desc: 'Transplant nursery starts or thin existing seedlings to 8 inches apart. Water with dilute fish emulsion or compost tea to encourage deep rooting.'
      },
      {
        title: 'Lay Down Autumn Leaf Mulch Blanket',
        desc: 'Collect dry brown fallen leaves from lawns. Shred them lightly with your hands or pruners and spread a 3-inch layer between rows to lock in ground warmth.'
      },
      {
        title: 'Install Low Tunnel Hoop Anchors',
        desc: 'Push PVC or wire hoops over your bed frames now so you can drape frost fleece cloth in under 30 seconds when freezing warnings strike.'
      }
    ],
    companionTip: 'Interplant <strong>Kale</strong> with <strong>Winter Carrots</strong>. The deep carrot taproots loosen dense soil without competing with shallow-rooted brassica feeder roots.',
    soilTemp: '10°C - 14°C',
    hazardLevel: 'Low to Moderate'
  },

  'windowsill-herbs': {
    title: 'Windowsill Micro-Greens & Cold Window Transition',
    summary: 'Indoor windowsill plants face sudden draft shock when window glass drops to near freezing. Keep herbs warm while maximizing short autumn daylight hours.',
    tasks: [
      {
        title: 'Sow Window Box Micro-Greens & Coriander',
        desc: 'Scatter cilantro, dill, and spicy winter greens seeds across damp seed-starting mix. Press gently into soil surface and mist with room-temperature water.'
      },
      {
        title: 'Pull Pots 2 Inches Back from Cold Glass',
        desc: 'Cold night drafts radiate off windowpanes. Pull planter boxes slightly away from direct glass contact during sub-zero overnight lows.'
      },
      {
        title: 'Trim & Dry Tender Summer Basil',
        desc: 'Harvest remaining summer basil before cold air blackens leaves. Hang in small bundles to dry or blend into freezer pesto.'
      }
    ],
    companionTip: 'Group <strong>Thyme</strong> and <strong>Parsley</strong> together in the brightest south-facing sill. Both enjoy cooler indoor room temperatures and minimal watering.',
    soilTemp: '16°C - 18°C',
    hazardLevel: 'Low (Indoor Protected)'
  },

  'ground-plot': {
    title: 'In-Ground Plot Autumn Sowing & Soil Feeding Plan',
    summary: 'Direct ground plots retain deep geothermal heat. Take advantage of warm soil to direct-sow hardy alliums, cover crops, and deep winter roots.',
    tasks: [
      {
        title: 'Broadcast Overwintering Cover Crops (Winter Rye / Vetch)',
        desc: 'Rake cleared beds lightly and broadcast cold-hardy crimson clover or winter rye to prevent soil erosion and fix nitrogen until spring.'
      },
      {
        title: 'Plant Maincrop Winter Garlic Bed',
        desc: 'Plant cloves 3 inches deep in well-drained, compost-enriched soil. Firm soil gently to prevent frost-heaving.'
      },
      {
        title: 'Topdress with 2 Inches of Finished Compost',
        desc: 'Spread rich organic compost across dormant beds. Autumn earthworms will pull nutrients down into the root zone throughout mild winter spells.'
      },
      {
        title: 'Mulch Perennial Fruit & Flower Crowns',
        desc: 'Mound compost or straw around crowns of strawberries, asparagus, and perennial herbs to protect dormant root eyes.'
      }
    ],
    companionTip: 'Pair <strong>Winter Rye</strong> cover crop around <strong>Garlic</strong> borders to block weed germination and insulate root beds against severe sub-zero ground freezing.',
    soilTemp: '8°C - 12°C',
    hazardLevel: 'Moderate'
  }
};

// ==========================================================================
// 3. State Management
// ==========================================================================
const state = {
  selectedSpace: 'balcony-containers',
  selectedFrost: '2-weeks',
  selectedSun: 'partial',
  ollamaEndpoint: 'http://localhost:11434/api/generate',
  selectedModel: 'gemma2:2b',
  activeTab: 'tab-action',
  journal: []
};

// ==========================================================================
// 4. DOM Elements
// ==========================================================================
const btnGeneratePlan = document.getElementById('btnGeneratePlan');
const genSpinner = document.getElementById('genSpinner');
const genBtnText = document.getElementById('genBtnText');

// Plan View
const spaceBadge = document.getElementById('spaceBadge');
const frostBadge = document.getElementById('frostBadge');
const aiBadge = document.getElementById('aiBadge');
const planTitle = document.getElementById('planTitle');
const planSummary = document.getElementById('planSummary');
const tasksList = document.getElementById('tasksList');
const companionTipBody = document.getElementById('companionTipBody');
const soilTemp = document.getElementById('soilTemp');
const hazardLevel = document.getElementById('hazardLevel');
const frostAdvisoryText = document.getElementById('frostAdvisoryText');

// Log & Journal
const logInput = document.getElementById('logInput');
const btnSaveLog = document.getElementById('btnSaveLog');
const cropsGrid = document.getElementById('cropsGrid');
const journalFeed = document.getElementById('journalFeed');
const logCount = document.getElementById('logCount');
const gardenStreak = document.getElementById('gardenStreak');
const btnExportPlan = document.getElementById('btnExportPlan');

// Modal Elements
const modelModal = document.getElementById('modelModal');
const btnModelSettings = document.getElementById('btnModelSettings');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnSaveModal = document.getElementById('btnSaveModal');
const btnTestOllama = document.getElementById('btnTestOllama');
const testResult = document.getElementById('testResult');
const ollamaEndpointInput = document.getElementById('ollamaEndpoint');
const modelNameSelect = document.getElementById('modelName');
const aiStatusText = document.getElementById('aiStatusText');

// ==========================================================================
// 5. App Initialization
// ==========================================================================
function init() {
  loadSavedJournal();
  renderCropsCatalog();
  setupEventListeners();
  renderPlan(PLAN_TEMPLATES['balcony-containers']);
}

function setupEventListeners() {
  // Growing Space
  document.querySelectorAll('#spaceGrid .choice-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#spaceGrid .choice-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.selectedSpace = card.dataset.space;
    });
  });

  // Frost Timeline Pills
  document.querySelectorAll('#frostPills .pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#frostPills .pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedFrost = pill.dataset.frost;
      updateAdvisory();
    });
  });

  // Sun Exposure Chips
  document.querySelectorAll('#sunChips .chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#sunChips .chip-btn').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.selectedSun = chip.dataset.sun;
    });
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      document.getElementById(tabId).classList.add('active');
      state.activeTab = tabId;
    });
  });

  // Generate Plan
  btnGeneratePlan.addEventListener('click', generatePlan);

  // Save Outdoor Log
  btnSaveLog.addEventListener('click', saveOutdoorLog);

  // Export Plan
  btnExportPlan.addEventListener('click', exportPlanMarkdown);

  // Modal Settings
  btnModelSettings.addEventListener('click', () => modelModal.classList.remove('hidden'));
  btnCloseModal.addEventListener('click', () => modelModal.classList.add('hidden'));
  btnSaveModal.addEventListener('click', () => {
    state.ollamaEndpoint = ollamaEndpointInput.value.trim();
    state.selectedModel = modelNameSelect.value;
    aiStatusText.textContent = `Local: ${state.selectedModel}`;
    modelModal.classList.add('hidden');
  });

  btnTestOllama.addEventListener('click', async () => {
    testResult.textContent = 'Testing connection...';
    testResult.style.color = 'var(--amber)';
    try {
      const res = await fetch(ollamaEndpointInput.value.trim().replace('/generate', '/tags'));
      if (res.ok) {
        testResult.textContent = '✅ Connected to Ollama!';
        testResult.style.color = 'var(--sprout)';
      } else {
        testResult.textContent = '⚠️ Ollama replied with warning.';
        testResult.style.color = 'var(--pumpkin)';
      }
    } catch {
      testResult.textContent = '❌ Offline (Using Botanical Engine)';
      testResult.style.color = 'var(--pumpkin)';
    }
  });
}

function updateAdvisory() {
  if (state.selectedFrost === '2-weeks') {
    frostAdvisoryText.textContent = 'Frost imminent within 14 days. Plant garlic immediately; insulate pot roots and prepare fleece sheets.';
    hazardLevel.textContent = 'High (Ground Freeze Soon)';
    hazardLevel.className = 'metric-val text-yellow';
    soilTemp.textContent = '8°C - 12°C';
  } else if (state.selectedFrost === '4-weeks') {
    frostAdvisoryText.textContent = 'Prime autumn sowing window! Ideal soil temperature for spinach, brassicas, and overwintering roots.';
    hazardLevel.textContent = 'Moderate';
    hazardLevel.className = 'metric-val text-yellow';
    soilTemp.textContent = '12°C - 16°C';
  } else {
    frostAdvisoryText.textContent = 'Mild autumn weather. Extended growing period for fall greens, radishes, and root crops.';
    hazardLevel.textContent = 'Low (Warm Soil)';
    hazardLevel.className = 'metric-val';
    soilTemp.textContent = '15°C - 18°C';
  }
}

// ==========================================================================
// 6. Plan Generation Engine (Google Gemma 2 + Fallback)
// ==========================================================================
async function generatePlan() {
  btnGeneratePlan.disabled = true;
  genSpinner.classList.remove('hidden');
  genBtnText.textContent = 'Synthesizing Garden Action Plan...';

  const spaceName = state.selectedSpace.replace('-', ' ');
  const frostWindow = state.selectedFrost.replace('-', ' ');
  const sun = state.selectedSun;

  // Attempt local Ollama inference with Gemma 2
  if (state.selectedModel !== 'heuristic') {
    const prompt = `You are FloraFrost AI, an expert organic autumn master gardener.
Generate an actionable, concise outdoor gardening plan for a student or home gardener with ${spaceName}, first frost ${frostWindow}, and ${sun} sunlight.
The goal is to get their hands in the dirt and away from screens ("Touch Grass").

Respond ONLY with valid JSON with this exact schema:
{
  "title": "Creative Autumn Plan Title",
  "summary": "1-2 sentence description explaining the urgent outdoor tasks before freezing weather",
  "tasks": [
    {"title": "Task 1 (What to Sow)", "desc": "Concrete sowing instructions with depth & spacing"},
    {"title": "Task 2 (Soil & Mulching)", "desc": "Soil preparation or insulation step"},
    {"title": "Task 3 (Pruning & Watering)", "desc": "Watering or deadheading action"}
  ],
  "companionTip": "A companion planting pairing advice with plant names in bold",
  "soilTemp": "e.g. 10°C - 14°C",
  "hazardLevel": "e.g. Moderate"
}`;

    try {
      const response = await fetch(state.ollamaEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: state.selectedModel,
          prompt: prompt,
          stream: false,
          format: 'json'
        })
      });

      if (response.ok) {
        const data = await response.json();
        const parsed = JSON.parse(data.response);
        renderPlan(parsed, true);
        finishPlanGen();
        return;
      }
    } catch (err) {
      console.warn('Ollama unavailable, using offline botanical matrix:', err);
    }
  }

  // Fallback to pre-authored template
  setTimeout(() => {
    const template = PLAN_TEMPLATES[state.selectedSpace] || PLAN_TEMPLATES['balcony-containers'];
    renderPlan(template, false);
    finishPlanGen();
  }, 500);
}

function finishPlanGen() {
  btnGeneratePlan.disabled = false;
  genSpinner.classList.add('hidden');
  genBtnText.textContent = 'Synthesize Autumn Action Plan';
}

function renderPlan(planData, isAi = false) {
  spaceBadge.textContent = `🪴 ${state.selectedSpace.replace('-', ' ').toUpperCase()}`;
  frostBadge.textContent = `❄️ ${state.selectedFrost.toUpperCase()} TO FROST`;
  aiBadge.textContent = isAi ? `🧠 Synthesized with Gemma 2` : `🌱 Botanical Engine`;

  planTitle.textContent = planData.title;
  planSummary.textContent = planData.summary;

  tasksList.innerHTML = '';
  planData.tasks.forEach((t, idx) => {
    const item = document.createElement('div');
    item.className = 'task-item';
    item.innerHTML = `
      <input type="checkbox" class="task-checkbox" id="taskChk_${idx}">
      <div class="task-content">
        <h4>${t.title}</h4>
        <p>${t.desc}</p>
      </div>
    `;

    // Checkbox toggle logic
    const chk = item.querySelector('.task-checkbox');
    chk.addEventListener('change', () => {
      item.classList.toggle('completed', chk.checked);
      if (chk.checked) playSoilChime();
    });

    tasksList.appendChild(item);
  });

  companionTipBody.innerHTML = planData.companionTip;
  if (planData.soilTemp) soilTemp.textContent = planData.soilTemp;
  if (planData.hazardLevel) hazardLevel.textContent = planData.hazardLevel;
}

// Gentle feedback chime
function playSoilChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch (e) {
    console.warn('Audio unsupported:', e);
  }
}

// ==========================================================================
// 7. Crop Catalog & Journal
// ==========================================================================
function renderCropsCatalog() {
  cropsGrid.innerHTML = '';
  AUTUMN_CROPS.forEach(crop => {
    const card = document.createElement('div');
    card.className = 'crop-card';
    card.innerHTML = `
      <div class="crop-card-top">
        <span class="crop-icon">${crop.icon}</span>
        <span class="crop-hardiness ${crop.hardinessClass}">❄️ ${crop.hardiness}</span>
      </div>
      <div class="crop-name">${crop.name}</div>
      <p class="crop-desc">${crop.desc}</p>
      <div class="crop-tip">💡 ${crop.tip}</div>
    `;
    cropsGrid.appendChild(card);
  });
}

function saveOutdoorLog() {
  const notes = logInput.value.trim();
  if (!notes) {
    alert('Please write a quick sentence about what you planted or mulched outside before saving!');
    return;
  }

  const entry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    planTitle: planTitle.textContent,
    space: state.selectedSpace.replace('-', ' '),
    notes: notes
  };

  state.journal.unshift(entry);
  localStorage.setItem('florafrost_journal', JSON.stringify(state.journal));

  logInput.value = '';
  renderJournalFeed();
  playSoilChime();
  alert('🎉 Gardening session logged! You have earned your outdoor dirt badge today.');

  // Switch to Journal tab
  document.querySelector('.tab-btn[data-tab="tab-log"]').click();
}

function loadSavedJournal() {
  const saved = localStorage.getItem('florafrost_journal');
  if (saved) {
    try {
      state.journal = JSON.parse(saved);
    } catch {
      state.journal = [];
    }
  }

  if (state.journal.length === 0) {
    state.journal = [
      {
        id: 1,
        date: 'Oct 6, 2026',
        time: '03:10 PM',
        planTitle: 'Container & Balcony Cold-Hardiness Action Plan',
        space: 'balcony pots',
        notes: 'Spent 45 minutes outside on the balcony clearing dead tomato vines. Planted 8 cloves of hardneck garlic in a deep 12-inch terracotta planter and covered with shredded birch leaves. Checked soil moisture and wrapped outer pot in burlap. Felt grounding and refreshing after a long morning of debugging!'
      }
    ];
    localStorage.setItem('florafrost_journal', JSON.stringify(state.journal));
  }

  renderJournalFeed();
}

function renderJournalFeed() {
  journalFeed.innerHTML = '';
  logCount.textContent = state.journal.length;
  gardenStreak.textContent = state.journal.length;

  state.journal.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'journal-entry-card';
    card.innerHTML = `
      <div class="journal-date-row">
        <span>📅 ${entry.date} at ${entry.time}</span>
        <span>🪴 ${entry.space.toUpperCase()}</span>
      </div>
      <div class="journal-quest-title">🌱 ${entry.planTitle}</div>
      <div class="journal-notes">"${entry.notes}"</div>
    `;
    journalFeed.appendChild(card);
  });
}

function exportPlanMarkdown() {
  let md = `# FloraFrost AI — Autumn Garden Plan & Soil Logs 🌱
*Powered by FloraFrost AI & Google Gemma 2 | Hacktoberfest 2026: Touch Grass*

**Target Growing Space:** ${state.selectedSpace}  
**Estimated Frost Window:** ${state.selectedFrost}  
**Outdoor Gardening Sessions Logged:** ${state.journal.length}  

---

## 📋 Active Autumn Action Plan: ${planTitle.textContent}
${planSummary.textContent}

### Recommended Outdoor Checklist:
`;

  document.querySelectorAll('.task-item').forEach((item, idx) => {
    const title = item.querySelector('h4').textContent;
    const desc = item.querySelector('p').textContent;
    const isDone = item.querySelector('.task-checkbox').checked ? '[x]' : '[ ]';
    md += `${idx + 1}. ${isDone} **${title}**: ${desc}\n`;
  });

  md += `\n### Companion Planting Advice:\n${companionTipBody.textContent}\n\n---\n\n## 📔 Outdoor Gardening Session Logs\n`;

  state.journal.forEach((entry, idx) => {
    md += `### Session ${idx + 1}: ${entry.planTitle}
- **Date & Time:** ${entry.date} at ${entry.time} (${entry.space})
> ${entry.notes}

---
`;
  });

  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `florafrost-garden-plan-${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// Start
document.addEventListener('DOMContentLoaded', init);
