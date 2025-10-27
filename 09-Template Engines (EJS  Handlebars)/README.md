# 📘 Template Engines (Handlebars / hbs) in Express.js

## 🔹 What is a Template Engine?

**Template Engine** ek tool hai jo **dynamic HTML pages generate karne** ke liye use hota hai.
Ye aapko HTML ke andar **variables aur logic insert karne** deta hai, taki page server se aayi hui data ke hisaab se change ho.

🩵 *Simple words:*
Handlebars HTML ke andar data automatically daalne ka tareeqa hai (dynamic pages create karna).



## 🔹 Why We Use Template Engines

Normal HTML **static hota hai** — ye tabhi change hota hai jab hum manually file edit karein.
Template engine se hum backend se frontend ko **dynamic data** easily bhej sakte hain.

Example: User login kare → page bole:
**“Welcome, Code Queen 👑!”** — bina har bar nayi HTML file banaye.


## 🔹 What is Handlebars (hbs)?

**Handlebars (hbs)** ek popular template engine hai Express.js ke saath.
Ye HTML ke andar **mustache-style syntax `{{ }}`** use karke data aur logic allow karta hai.

🩵 *In short:*
Handlebars ka matlab hai “HTML + easy templating syntax for JS data”.



## 🔹 How Handlebars Works

1. Express server data bhejta hai template file (hbs) ko.
2. Handlebars engine data ko HTML ke saath merge karta hai.
3. Browser ko final HTML page milta hai jo ready aur dynamic hota hai.

🪄 Example:

* Server sends `{ name: "Code Queen" }`
* Template has `{{name}}`
* Browser shows → “Welcome, Code Queen 👑!”


## 🔹 Handlebars Tags (Used Inside HTML)

| Type     | Syntax            | Purpose                           |
| -------- | ----------------- | --------------------------------- |
| Variable | `{{}}`            | Display variable data             |
| Block    | `{{#if}} {{/if}}` | Add conditions or loops           |
| Comment  | `{{!-- --}}`      | Write hidden comments (not shown) |

Example:

* `{{name}}` → prints data
* `{{#if isLoggedIn}}` → adds logic
* `{{!-- comment --}}` → hidden note



## 🔹 Installation of Handlebars

1. Install via npm:
   `npm install hbs`
2. Tell Express to use hbs: `app.set('view engine', 'hbs')`
3. Create a `views` folder for your template files.



## 🔹 Benefits of Using Handlebars

✅ Simple syntax (mustache style)
✅ Easy to integrate with Express.js
✅ Dynamic HTML pages without complex JS code
✅ Supports conditions, loops, and partials
✅ Keeps templates clean and reusable


## 🔹 Summary

* **Template Engine:** Dynamic HTML using backend data
* **Handlebars / hbs:** Easy-to-use templating with `{{ }}` syntax
* **Main Purpose:** Insert data + logic inside HTML
* **Tags:** `{{}}` for data, `{{#if}}` / `{{#each}}` for logic
* **Result:** Clean, reusable, and dynamic web pages


