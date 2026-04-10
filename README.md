# 🗺️ India Mines Map – React + Leaflet App

An interactive web app to visualize coal and metal mines across India using React, Leaflet, and static/dynamic data. Each mine is shown as a marker on the map. Hovering shows mine options, and clicking opens detailed information in a new tab.
---
<img width="1917" height="1026" alt="image" src="https://github.com/user-attachments/assets/1a33bc83-0e5f-41b7-a06e-e2f063293051" />

## 📌 Features

- 🗺️ Map of India with markers for each mine
- 🧭 Hover on marker shows popup with clickable options
- 🗂 Click an option to open a details page in a **new tab**
- 🧱 Structured static data for each mine (location, type, capacity, etc.)
- 🌐 React Router for routing to details page

---

## 🛠️ Tech Stack

| Layer        | Tool/Library              |
|-------------|---------------------------|
| Frontend    | React                     |
| Map         | React Leaflet  
| Routing     | React Router DOM   declarative mode       |
| Styling     | Plain CSS / Inline        |
| State Mgmt  | Local state (static)      |
| Deployment  | Vite / CRA / Netlify/Vercel |

---

-

## 🔢 Example Data Structure

```js
const mines = [
  {
  "name": "Kollur Diamond Mine",
    "state": "Andhra Pradesh",
    "country": "India",
    "minetype": "diamond",
    "lat": 16.71667,
    "lng": 80.05,
    "hasPdf": true
  },
    
  // ...more
];
```

---

## ▶️ Getting Started

```bash
git clone https://github.com/amul69906995/india-mines-map.git
cd india-mines-map

npm install
npm run dev   # or npm start if using CRA
```

---

## 🌐 Routes

- `/` → Main map view with markers  
- `/:lat/:lng/:option` → Details page for a selected mine option

---

## 🧩 Future Enhancements

- [ ] Admin panel to add/edit mines from UI  
- [ ] Backend API (Node + Express + MongoDB)  
- [ ] Search/filter mines by type or state  
- [ ] Use icons based on mine type  
- [ ] Export map data as CSV/JSON  

---

## 📜 License

Free to use and modify for personal or educational projects.

---

## 🙌 Author
Developed by Amul kumar
