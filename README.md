# Knowledge Management App

This is a small **React + TypeScript** project that helps you manage knowledge entries in a simple and organized way.  
You can **add, edit, and delete** entries from a clean dashboard. The data is stored locally using a **JSON Server**.

---

## 🧰 Tech Stack

- **React + TypeScript + Vite** – frontend setup  
- **Zustand** – for state management  
- **Formik + Yup** – for forms and validation  
- **Tailwind CSS** – for styling  
- **Axios** – for API requests  
- **Playwright** – for end-to-end testing  
- **JSON Server** – mock backend for local data storage

---

## ⚙️ How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/knowledge-management-app.git
cd knowledge-management-app
```

### 2. Install dependencies
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

Your mock API will now run at:
```
http://localhost:5000
```

### 4. Start the frontend app
```bash
npm run dev
```

Now open your browser and visit:
```
http://localhost:5173
```

---

## 🚀 Usage

The app opens with a simple **dashboard** showing all entries in a table or list view.  
Each entry has **Edit** and **Delete** buttons.

- **Delete:** When you delete an entry, a confirmation dialog appears. Once confirmed, it deletes the record by its ID.  
- **Add / Edit:**  
  - The **“Add New”** page is used for both adding and editing entries.  
  - When adding, it simply calls the API to create a new entry.  
  - When editing, it reads the **entry ID** from the URL parameters, fetches the data from the database, fills the form fields, and then calls the update API.  
- **Additional UI Elements:** The layout also includes icons for **filter, export, print, user profile, and search**. These are added for future UX improvements and easier expansion.

---

## 🧪 Run Tests (Playwright)

To run all end-to-end tests:
```bash
npm run test:e2e
```

To open Playwright in UI mode:
```bash
npm run test:e2e:ui
```

To open the latest test report:
```bash
npm run test:e2e:report
```

---

## 💡 UI / UX Improvement Ideas

**Read More for Long Descriptions**  
Long text is shortened with a “Read more” button to keep the layout clean.

**Better Mobile Experience**  
On smaller screens, entries are displayed as cards instead of a table for smoother scrolling and readability.

---

## 🎥 Demo Video

Watch a short demo video (under 5 minutes) here:  
👉 [Demo Video Link](#)

---

## 👤 Author

Developed by **Muhammad Atif**  
GitHub: [https://github.com/muhammad-atif-74](https://github.com/muhammad-atif-74)
