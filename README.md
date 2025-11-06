# Knowledge Management App

This is a small React + TypeScript project that helps you manage knowledge entries.  
You can **add, edit, and delete** entries easily. The data is stored locally using a **JSON Server**.

---

## 🧰 Tech Stack

- React + TypeScript + Vite  
- Zustand – state management  
- Formik + Yup – forms and validation  
- Tailwind CSS – styling  
- Axios – API calls  
- Playwright – end-to-end testing  
- JSON Server – mock backend

---

## ⚙️ How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/knowledge-management-app.git
cd knowledge-management-app
```

### 2. Install packages
```bash
npm install
```

### 3. Start the backend (JSON Server)
If you don’t have JSON Server installed, run:
```bash
npm install -g json-server
```

Then start it:
```bash
json-server --watch db.json --port 5000
```

Your mock API will now be running at:
```
http://localhost:5000
```

### 4. Start the app
```bash
npm run dev
```

Now open your browser and visit:
```
http://localhost:5173
```

---

## 🧪 Run Tests (Playwright)

To run all end-to-end tests:
```bash
npm run test:e2e
```

To open Playwright with UI mode:
```bash
npm run test:e2e:ui
```

To open the last test report:
```bash
npm run test:e2e:report
```

---

## 💡 UI / UX Improvement Ideas

**Read More for Long Descriptions**  
Long text is shortened with a “Read more” option so the layout stays clean and easy to read.

**Better Mobile View**  
On smaller screens, entries appear as cards instead of a table to make scrolling and reading easier.

---

## 🎥 Demo Video

You can watch a short demo video (under 5 minutes) here:  
👉 [Demo Video Link](#)

---

## 👤 Author

Developed by **Muhammad Atif**  
GitHub: [https://github.com/muhammad-atif-74](https://github.com/muhammad-atif-74)
