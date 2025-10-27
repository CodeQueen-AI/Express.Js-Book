# 📘 Error Handling in Express.js

## 🔹 What Is Error Handling?

**Error handling** ka matlab hai ke **Express app mein hone wali errors ko catch aur manage karna**, taki app crash na ho.

Simple words mein:

> Ye server ko help karta hai ke jab kuch galat ho, to wo **gracefully respond kare**




## 🔹 Why Is Error Handling Important?

Real applications mein bohot si cheezein fail ho sakti hain —
jaise invalid routes, missing data, ya server bugs.

Agar proper handling na ho, to users ko ugly messages dikhte hain ya app stop ho jati hai.
Error handling se users ko **clear aur friendly messages** milte hain.





## 🔹 How It Works (Step-by-Step)

1. Client request bhejta hai
2. Express routes ko check karta hai ek ek karke
3. Agar kuch galat hota hai, **error create hoti hai**
4. Error ko **error-handling middleware** ko `next(err)` se pass kiya jata hai
5. Express user ko **clean aur readable message** show karta hai






## 🔹 Key Parts of Error Handling

### 1️⃣ Normal Route

Ye aapke regular routes hote hain, jaise `/`, `/home`, `/api`.
Ye normally kaam karte hain jab tak unexpected issue na ho.





### 2️⃣ Custom Error Route

Agar kuch fail hota hai, aap **manually error create** kar sakte hain:

> `next(err)` ke zariye error-handling middleware ko bhejna

Ye ensure karta hai ke error clean tareeke se handle ho.



### 3️⃣ 404 Handler (Page Not Found)

Jab user aise route par jata hai jo exist nahi karta:

> "Page Not Found" errors yahan handle hoti hain

Ye ensure karta hai ke invalid URLs par bhi app **proper response** de.



### 4️⃣ Error-Handling Middleware

Ye special middleware **sab errors ko catch karta hai**.
Iska structure kuch is tarah hota hai:

* 4 parameters hote hain: `(err, req, res, next)`
* `err` → error details rakhta hai
* `res.status()` → HTTP status code set karta hai
* `res.send()` → error message client ko bhejta hai

Ye middleware app ke har unexpected problem ko manage karta hai.



## 🔹 Common Error Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |


## 🔹 Summary

* **Error handling** app ko crash hone se bachata hai
* **404 Middleware** missing routes handle karta hai
* **Error Middleware** unexpected problems manage karta hai
* Hamesha `next(err)` use karein errors forward karne ke liye

✨ In short:

> “Express mein error handling aapki app ko smart, stable aur user-friendly banata hai — chahe kuch bhi galat ho jaye.” 💪💫
