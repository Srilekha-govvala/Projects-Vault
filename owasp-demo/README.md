# 🔐 Secure Login – OWASP Compliant React Demo

A simple React JS project demonstrating secure front-end development practices aligned with **OWASP (Open Web Application Security Project)** guidelines.  
This project showcases form validation, safe API calls, and token handling — foundational for building secure cloud-integrated web applications.

---

## 🚀 Tech Stack
- **React JS (Hooks + Functional Components)**
- **Axios** for secure RESTful API communication
- **Tailwind CSS** for clean, responsive UI
- **Session Storage** for short-term JWT handling

---

## 💡 Key OWASP Practices Implemented

| OWASP Focus | Implementation |
|--------------|----------------|
| **Input Validation (A03:2021 Injection)** | Validates email format and enforces minimum password length |
| **Broken Authentication (A07:2021)** | Implements token-based authentication; stores JWT only for session |
| **Sensitive Data Exposure (A02:2021)** | Uses HTTPS endpoint; never logs credentials |
| **Cross-Site Scripting (A03:2021)** | React auto-escapes JSX, preventing script injection |
| **Security Misconfiguration (A05:2021)** | Minimal attack surface; no debug info or stack traces exposed |
| **Error Handling** | Generic, user-friendly messages without revealing server logic |

---

## 🧠 Features
- Responsive **Secure Login UI**
- Form validation compliant with OWASP standards
- API call via `axios.post()` with secure headers
- Session-based token storage (short-term)
- Reusable structure ready for integration with any backend (Node/Express, Django, etc.)

---

## 🧩 Folder Structure
src/
├── components/
│ └── SecureLogin.jsx
├── App.js
└── index.js
