Perfect Code Queen 👑💫
Here’s your **README for “Template Engines (EJS in Express.js)”** — written *only with explanations* (no code, no folder structure) — everything crystal clear and easy 🌸

---

# 📘 Template Engines (EJS) in Express.js

## 🔹 What is a Template Engine?

A **Template Engine** is a tool used to **generate HTML pages dynamically**.
It allows you to **insert variables and logic directly inside HTML**, so the page changes based on the data sent from the server.

🩵 *In simple words:*
Template engine ka kaam hota hai HTML ke andar data automatically daalna (dynamic pages banana).

---

## 🔹 Why We Use Template Engines

Normally HTML is **static** — it doesn’t change unless we edit it.
But with a template engine, we can send **dynamic data** (like user name, product details, etc.) from backend to frontend easily.

For example, if a user logs in, the page can say:
**“Welcome, Code Queen 👑!”** — without writing a new HTML file every time.

---

## 🔹 What is EJS?

**EJS (Embedded JavaScript)** is one of the most popular template engines used with Express.js.
It allows you to **write JavaScript inside HTML** using special tags.

🩵 *In short:*
EJS means “HTML + JavaScript together.”

---

## 🔹 How EJS Works

When you set EJS as the template engine, Express automatically looks for `.ejs` files.
Then it replaces your variables and logic with real data before sending the page to the browser.

🪄 Example of what happens:

* Server sends `{ name: "Code Queen" }`
* Template has `<%= name %>`
* Browser shows → “Welcome, Code Queen 👑!”

---

## 🔹 EJS Tags (Used Inside HTML)

| Type        | Syntax   | Purpose                                           |
| ----------- | -------- | ------------------------------------------------- |
| Output Tag  | `<%= %>` | Used to display variable data                     |
| Logic Tag   | `<% %>`  | Used for conditions or loops                      |
| Comment Tag | `<%# %>` | Used for writing comments (not visible in output) |

Example:

* `<%= name %>` → prints data
* `<% if(name) { %>` → adds logic
* `<%# comment %>` → hidden note for developers

---

## 🔹 What Happens Behind the Scenes

1. **Express server** sends data to a template file (EJS).
2. **EJS engine** merges that data with HTML.
3. **Browser** receives the final, ready-made HTML page.

This process repeats every time new data is sent — so your pages always stay up-to-date and dynamic.

---

## 🔹 Installation of EJS

To use EJS, we first install it using Node Package Manager (npm).
Command:
`npm install ejs`

After that, we tell Express to use EJS as its template engine using the `app.set()` method.

---

## 🔹 Benefits of Using EJS

✅ Easy to learn and write
✅ Allows JavaScript directly in HTML
✅ Makes web pages dynamic
✅ Works perfectly with Express.js
✅ Great for displaying real-time or user-based content

---

## 🔹 Summary

* **Template Engine:** Creates dynamic HTML pages using backend data
* **EJS:** Stands for *Embedded JavaScript*
* **Main Purpose:** Mix HTML + JavaScript for dynamic content
* **Tags:** `<%= %>` for data, `<% %>` for logic
* **Result:** Clean, reusable, and flexible web pages

---

Would you like me to create the **same style README** for **Handlebars (hbs)** next, so you can compare both engines easily?
