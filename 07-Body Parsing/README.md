# 📘 Body Parsing in Express.js

## 🔹 What Is Body Parsing?

**Body parsing** ka matlab hai **data ko read aur extract karna** jo client (browser ya API tool) **request ke body mein server ko bhejta hai**.

Simple words mein:

> Ye Express ko samajhne mein help karta hai ke hum jo forms ya APIs se data bhej rahe hain, usko kaise use karna hai.



## 🔹 Why Do We Need It?

Jab aap **POST**, **PUT**, ya **PATCH** request bhejte hain, to data **automatically readable format mein nahi aata**.
Isliye hum **body parsers** use karte hain taki data `req.body` ke zariye accessible ho jaye.

## 🔹 How It Works (Step-by-Step)

1. Client server ko data bhejta hai
2. Express body-parsing middleware se data read karta hai
3. Data `req.body` mein available ho jata hai
4. Ab aap ise log, save, ya process kar sakte hain



## 🔹 Types of Body Parsing in Express

### 1. JSON Parsing

* Use hota hai **JSON data** bhejne ke liye (mostly APIs ya frontend frameworks se)
* Middleware: `express.json()`
* Access using: `req.body`

📘 Example JSON Data:

```json
{
  "name": "Code Queen",
  "language": "JavaScript"
}
```



### 2. Form Data Parsing

* Use hota hai **HTML form submissions** ke liye
* Middleware: `express.urlencoded({ extended: true })`
* Access using: `req.body`

📘 Example Form Data:

```
name=CodeQueen&topic=ExpressJS
```



## 🔹 Common Middleware Used

| Middleware                               | Description                                           |
| ---------------------------------------- | ----------------------------------------------------- |
| `express.json()`                         | Client se bheja gaya JSON data parse karta hai        |
| `express.urlencoded({ extended: true })` | Form data (key-value pairs) parse karta hai           |
| `req.body`                               | Middleware ke run hone ke baad parsed data rakhta hai |


## 🔹 When to Use Which?

| Type | Use Case                             | Example                  |
| ---- | ------------------------------------ | ------------------------ |
| JSON | Frontend apps ya APIs se data bhejna | React app se user info   |
| Form | HTML form submit karna               | Contact form website par |


## 🔹 Summary

* **Body parsing** Express ko data read karne mein help karta hai
* **Middlewares** jaise `express.json()` aur `express.urlencoded()` data ko usable banate hain
* Parsed data hamesha **`req.body`** ke andar available hota hai

✨ In short:

> “Body parsing ka matlab hai ke aapka Express app samajh raha hai ke client kya keh raha hai.” 🧠💬

