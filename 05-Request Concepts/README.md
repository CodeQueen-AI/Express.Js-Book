# 📘 Request in Express.js

## 🔹 What is a Request?

Express.js mein **Request (req)** woh hota hai jo **client (browser ya app) server ko bhejta hai**.
Isme method type, URL, parameters, headers, aur body content hota hai.

🗣️ *Simple words:*

> Jab client (user) server ko koi data bhejta hai, us data ko **request** kehte hain.





## 🔹 How Request Works

Jab client request bhejta hai (GET, POST, etc.), **Express server** usay route ke zariye receive karta hai.
Server phir request process karta hai aur **response** bhejta hai.

📍 Example flow:

```
Client → request bhejta hai → Server receive karta hai → Server process karta hai → Response bhejta hai
```






## 🔹 URL Structure of a Request

Request URL kuch is tarah hota hai:

```
http://localhost:3000/user?id=123&name=CodeQueen
```

| Part                       | Description                                |
| -------------------------- | ------------------------------------------ |
| **http**                   | Protocol                                   |
| **localhost:3000**         | Server address                             |
| **/user**                  | Route path                                 |
| **?id=123&name=CodeQueen** | Query parameters (extra data URL ke saath) |






## 🔹 Request Object (`req`)

`req` object Express mein **saari request details** store karta hai jo client se aati hain.
Ye server ko **samajhne mein help karta hai ke client kya chahta hai**.

🧠 *Think of it as:*

> Ek container jo client ki request ki tamam information rakhta hai.






## 🔹 Request Methods

Methods define karti hain ke **client ka action kya hai**.

| Method     | Purpose                           | Example                    |
| ---------- | --------------------------------- | -------------------------- |
| **GET**    | Server se data fetch karna        | Posts ya users dekhna      |
| **POST**   | Naya data server ko bhejna        | Form submit karna          |
| **PUT**    | Purana data replace karna         | Record update karna        |
| **PATCH**  | Data ka sirf ek part update karna | Sirf ek field change karna |
| **DELETE** | Data remove karna                 | User ya item delete karna  |






## 🔹 Request Properties

`req` object ke kuch important properties jo **client data access** karne mein help karte hain:

| Property        | Description                                                       | Example                            |
| --------------- | ----------------------------------------------------------------- | ---------------------------------- |
| **req.method**  | HTTP method show karta hai                                        | `"GET"`, `"POST"`                  |
| **req.url**     | Full request URL dikhata hai                                      | `"/user?id=123"`                   |
| **req.path**    | Sirf route path dikhata hai                                       | `"/user"`                          |
| **req.headers** | Client ke headers ki information contain karta hai                | `{ host, user-agent, ... }`        |
| **req.query**   | URL se query parameters dikhata hai                               | `{ id: "123", name: "CodeQueen" }` |
| **req.body**    | Client se bheja gaya body data (POST/PUT requests) hold karta hai | `{ message: "Hello" }`             |





## 🔹 Summary

✅ **Request** → Client se server tak bheja gaya data

✅ **Object** → Client request ki details contain karta hai (`req`)

✅ **Methods** → Action define karti hain (GET, POST, PUT, PATCH, DELETE)

✅ **Properties** → Data access karne mein help karte hain jaise URL, path, query, aur body

💡 *In short:*

> Request server ko batata hai **ke client kya chahta hai** aur saari zaroori information provide karta hai jo server process kar sake
