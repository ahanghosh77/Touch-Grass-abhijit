# FloraFrost AI 🌱❄️
> **Autumn Garden & Frost-Date Planting Planner**  
> *Built for Hacktoberfest 2026 Week 1: "Touch Grass" Challenge*

---

## 🍂 Why FloraFrost AI?

Programmers and students often spend 10+ hours a day in front of computer screens. Starting a small container garden, balcony herb planter, or community bed is one of the most therapeutic ways to disconnect, but autumn weather can be intimidating.

Tender plants die in unexpected frosts, while beginners don't realize that October is the absolute best time to plant garlic, winter spinach, and cold-hardy brassicas.

**FloraFrost AI** gets you away from screens and out into the garden with a clear motto:
> **"Spend 60 seconds on the plan, spend hours outside with your hands in the soil."**

---

## 🌟 Key Features

- 🧤 **Microclimate Growing Space Configurator:** Tailored advice for Balcony Pots, Raised Beds, Windowsill Containers, and In-Ground Plots.
- ❄️ **Frost Horizon Advisory:** Calculates planting windows and root insulation measures based on estimated weeks to first ground freeze.
- 🧠 **Powered by Google Gemma 2 (2B):** Uses local open-weight model inference via Ollama to generate actionable outdoor tasks (sowing depth, spacing, mulching blankets, companion pairings).
- 📴 **100% Offline Garden Shed Independence:** No internet or Wi-Fi in the backyard or community allotment? FloraFrost runs completely offline with client-side inference and a botanical fallback engine.
- 🥗 **Cold-Hardy Crop Catalog:** Comprehensive reference guide for frost-hardy alliums, winter roots, and cold greens that thrive down to -15°C.
- 📔 **Soil & Planting Journal:** Log your outdoor gardening sessions, keep your "Touched Dirt" streak alive, and export garden notes as Markdown.

---

## 🚀 Quickstart

### Option 1: Direct in Browser
Open `index.html` in any modern web browser! No Node.js build steps or npm installations needed.

### Option 2: Connect Local Google Gemma 2
1. Install [Ollama](https://ollama.com/).
2. Pull Google's lightweight open-weight model:
   ```bash
   ollama run gemma2:2b
   ```
3. Open FloraFrost AI, click **Model**, and connect to `http://localhost:11434/api/generate`.

---

## 📜 License
MIT License. Built with ❤️ for Hacktoberfest 2026.
