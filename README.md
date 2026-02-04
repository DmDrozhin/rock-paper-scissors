# Startup Marketing Landing 🚀

A modern **SPA landing page for a marketing services startup**, built with **Vue 3**. The project focuses on clear service presentation, lead generation, and secure form submission **without a custom backend**.

---
🌐 **Demo:** [https://therockpapperscissors.com/](https://therockpapperscissors.com/)

## ✨ Key Features

* ⚡ **Single Page Application** built with Vue 3 (no Vue Router)
* 🧠 Global state management via **Pinia**
* 📝 **Two lead collection forms**:

  * quick email form in the footer
  * detailed form inside a modal window
* ✅ Client-side **form validation** before submission
* 📬 Form submission to email via **Formspree**
* 🛡️ Multi-layer **bot protection**:

  * honeypot field
  * submission time interval check
  * Google reCAPTCHA
* 🎨 **100% vector graphics (SVG only)**
* 🧩 Reusable Base UI components

---

## 🛠️ Tech Stack

* **Vue 3** (Composition API)
* **Vite**
* **TypeScript**
* **Pinia**
* **SCSS**
* **Formspree**

---

## 📂 Project Structure

```txt
src/
├── assets/        # SVG graphics and styles
├── components/    # UI and Base components
├── composables/   # form logic and validation
├── stores/        # Pinia stores
├── utils/         # helpers and utilities
├── data/          # static landing content
└── App.vue        # SPA entry point
```

---

## 🧩 Forms & Submission Flow

### Footer Form

* minimal email-only form for fast lead capture
* email format validation
* honeypot + timing protection

### Modal Form

* extended form with multiple fields
* full client-side validation
* Google reCAPTCHA before submission

### Data Delivery

* form data is sent via **Formspree**
* no custom backend required
* messages are delivered directly to email

---

## 🛡️ Bot Protection Strategy

The project uses a layered approach to prevent spam while keeping UX smooth:

* hidden honeypot field
* minimum form fill time validation
* Google reCAPTCHA

This combination effectively blocks automated submissions without adding friction for real users.

---

## 🤔 Why No Backend?

This project intentionally avoids a custom backend to:

* reduce infrastructure and maintenance costs
* simplify deployment and hosting
* minimize security risks related to server-side code
* keep the architecture lightweight and easy to scale

Using **Formspree** allows secure and reliable email delivery while maintaining a fully static, frontend-only application — an ideal solution for landing pages and early-stage startups.

---

## 🎯 Project Purpose

* marketing startup landing page
* lead generation and contact collection
* demonstration of a production-ready SPA without a traditional backend

---

## 👤 Author

**Dmitriy Drozhin**
Front-end Developer (Vue.js)

* GitHub: *add link*
* LinkedIn: *add link*

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you find this project useful or interesting — feel free to give it a star
