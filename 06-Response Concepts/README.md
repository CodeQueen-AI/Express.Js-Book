

# 📘 **Response in Express.js**

## 🔹 What is Response?

**Response (res)** aik **object hota hai Express.js mein** jiska kaam hota hai **server se client (browser ya API request) tak data bhejna**.

> 💡 Example: Jab user website open karta hai, server HTML page ya koi message **response** ke taur par bhejta hai.



## 🔹 How It Works (Flow / URL Structure)

1. Client request bhejta hai (GET, POST, etc.) kisi route par — jaise `/`, `/home`, `/about`
2. Server request receive karta hai aur process karta hai
3. Server `res` object ka use karke **response send karta hai**

👉 Example URL flow:

```
Client → http://localhost:3000/ → Server → res.send("Hello!")
```


## 🔹 Response Object (`res`)

`res` object automatically **Express.js ke route function ke andar milta hai**.
Iska kaam hai server se **text, file, JSON, HTML, ya status code** bhejna.

🟢 Yahan `res` = response object hota hai.




## 🔹 Response Methods

Response methods wo built-in functions hain jo **different formats mein data send karte hain**.
Niche kuch important methods diye gaye hain 👇

| Method                       | Description                          | Example                                 |
| ---------------------------- | ------------------------------------ | --------------------------------------- |
| `res.send()`                 | Text ya HTML bhejne ke liye          | `res.send("Hello Code Queen 👑")`       |
| `res.json()`                 | JSON format mein data bhejne ke liye | `res.json({ name: "Code Queen" })`      |
| `res.status()`               | HTTP status code set karta hai       | `res.status(404).send("Not Found")`     |
| `res.redirect()`             | Dusre route par bhejta hai           | `res.redirect("/home")`                 |
| `res.sendFile()`             | File bhejta hai                      | `res.sendFile("index.html")`            |
| `res.download()`             | File download karwata hai            | `res.download("file.txt")`              |
| `res.render()`               | Template render karta hai            | `res.render("home")`                    |
| `res.end()`                  | Response manually end karta hai      | `res.end()`                             |
| `res.type()`                 | Content-Type set karta hai           | `res.type("html").send("<h2>Hi</h2>")`  |
| `res.set()` / `res.header()` | Custom header set karta hai          | `res.set("X-Powered-By", "Code Queen")` |
| `res.cookie()`               | Cookie set karta hai                 | `res.cookie("username", "CodeQueen")`   |
| `res.clearCookie()`          | Cookie remove karta hai              | `res.clearCookie("username")`           |



## 🔹 Response Properties

Response properties wo values hoti hain jo **current response ke details batati hain**.

| Property            | Description                                       | Example                        |
| ------------------- | ------------------------------------------------- | ------------------------------ |
| `res.statusCode`    | Status code show ya set karta hai                 | `res.statusCode = 200`         |
| `res.headersSent`   | Check karta hai kya headers bheje gaye hain       | `console.log(res.headersSent)` |
| `res.locals`        | Local variables store karta hai templates ke liye | `res.locals.message = "Hi"`    |
| `res.app`           | Express app instance ko refer karta hai           | `res.app.get("env")`           |
| `res.statusMessage` | Status message show ya set karta hai              | `res.statusMessage = "OK"`     |



## 🔹 Summary

✅ `res` ka use **server se client tak data bhejne** ke liye hota hai.
✅ Iske do main parts hote hain:

* **Methods** → data bhejne, redirect karne, file download karne, etc.
* **Properties** → response ke info ko view ya modify karne ke liye.

Together ye dono **server aur client ke beech ek bridge** banate hain 🧩

