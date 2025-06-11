# 🎬 GenVideo360 - AI Video Generation Tool (Frontend Prototype)

> A frontend-only prototype that simulates AI-based video generation using static trending news headlines and placeholder visuals.

## 📌 Objective

GenVideo360 is a simple AI-based application that demonstrates how trending news topics can be transformed into video-style visual content using automated script generation and text-image overlays.

> ⚠️ Note: This is a **frontend-only prototype**. No backend, API, or real video generation is implemented yet.

---

## 📁 Project Structure

GenVideo360/
├── frontend/
│ ├── index.html # Main UI
│ ├── style.css # Styling (Tailwind-based)
│ └── js/
│ └── script.js # JS logic for news & script generation
└── README.md # Project documentation


---

## 🔧 Technologies Used

| Component        | Technology                            |
|------------------|----------------------------------------|
| UI Layout        | HTML5                                 |
| Styling          | Tailwind CSS (via CDN), Google Fonts  |
| Scripting        | Vanilla JavaScript                    |
| AI Backend       | ❌ Not included (mock AI with JS)     |
| UX Features      | Loading spinner, input handling       |

---

## 🚀 How It Works

1. Click the **"Generate AI Video"** button.
2. The app selects a **random trending headline** from a static list.
3. It creates a **script** based on the headline (mock AI logic).
4. Displays a **placeholder image** with an overlaid headline (simulated video frame).

---

## 🖼️ Demo Preview

**Headline**: “India Wins ICC Cricket World Cup”  
**Generated Script**: “Today's headline: India Wins ICC Cricket World Cup. Stay tuned for more updates.”

![Demo Frame](https://via.placeholder.com/600x300?text=Sample+Video+Frame)

---

## 📜 Example Script Logic

```javascript
const newsHeadlines = [
  "India Wins ICC Cricket World Cup",
  "AI Revolutionizes Healthcare",
  "SpaceX Successfully Launches Starship"
];

function generateScript(news) {
  return `Today's headline: ${news}. Stay tuned for more updates.`;
}
