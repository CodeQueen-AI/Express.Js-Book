Bilkul Code Queen 👑! Tumhara content ab mai **isi style mei rewrite kar deti hoon** — headings English mei, explanations simple points mei, English letters mei lekin Urdu mai samjha ke type kiya hua ✨

---

# 📖 Introduction to Express.js

## 🔹 What is Express.js?

Express.js ek **fast, lightweight aur flexible web framework** hai jo **Node.js** par bana hai.
Ye humein **servers aur APIs** easily banane ki power deta hai, aur code short aur clean rakhta hai.

---

## 🔹 Why Do We Use Express.js?

1- **Simple and Easy** → Pure Node.js se server banana lamba aur complex hota hai, lekin Express.js se ye **quick aur clean** hota hai.
2- **Routing System** → Multiple pages ya URLs ko **easily manage** kar sakte ho.
3- **Middleware Support** → Request aur response ke beech **custom logic** add karna possible hai (jaise logging, authentication, validation).
4- **REST API Creation** → APIs banani easy ho jati hain jo frontend ya mobile apps ke sath connect hoti hain.
5- **Popular and Powerful** → Backend development ke liye sabse zyada use hone wala Node.js framework hai.

---

## 🔹 When Do We Use Express.js?

Express.js use karte hain:

* Web applications (blogs, e-commerce, social media apps)
* REST APIs (backend ko frontend ya mobile apps se connect karne ke liye)
* Real-time apps (chat apps ya notifications ke liye, e.g., Socket.io)
* Microservices ya server-side applications ke liye

---

## 🔹 How Do We Use Express.js?

1- **Install Node.js** → Ye required hai Express use karne se pehle.
2- **Create a New Project** → Naya project banao aur `npm init` ke sath initialize karo.
3- **Install Express** → Project ke andar npm se Express install karo.
4- **Create a Simple Server** → Ek simple server banao jo requests aur responses handle kare.
5- **Run Your Server** → Node.js ke through server ko run karo.

---

## 🔹 What is Dev Mode (Nodemon)?

Normally, jab code change karte hain, server ko manually restart karna padta hai.
**Nodemon** automatically server ko restart kar deta hai har save ke baad.

### 🔸 Benefits of Using Nodemon:

* Server **auto restart** ho jata hai har save ke baad.
* Development speed ⚡ **increase** hoti hai.
* Manual restart ki tension khatam ho jaati hai.

---

## 🔹 Code Explanation (Conceptual)

* **`express` import:** Express framework project me laata hai.
* **`app` creation:** Ek Express application object banata hai.
* **`PORT` setup:** Server kis port par run karega decide karta hai.
* **`app.get()` route:** Jab user specific URL visit karega to kya response milega define karta hai.
* **`app.listen()` method:** Server start hota hai aur requests sunta hai.

