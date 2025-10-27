# 📘 Static Files in Express.js

## 🔹 What Are Static Files?

Static files wo **files hain jo server par change nahi hoti** — ye directly client ko bheji jati hain jab request aati hai.
Examples:

* HTML files
* CSS files
* JavaScript files
* Images, videos, fonts



## 🔹 Purpose of Static Files

Static files client ke browser me **content aur styling dikhane** ke liye hoti hain.
Jaise jab website open karte hain — logo, styles, aur images sab **static assets** hote hain.



## 🔹 How Express Handles Static Files

Express ke paas ek built-in middleware function hai **`express.static()`** jo static files ko serve karna easy banata hai.
Ye Express ko batata hai **kahan dekhna hai** aur jab client request kare to automatically bhej deta hai.


## 🔹 Key Points

* Sare static assets ek folder me store kar sakte hain (jaise `public/`)
* Express automatically unhe serve karta hai `express.static()` ke zariye
* Agar zarurat ho to multiple static folders bhi serve kiye ja sakte hain
* Front-end integration ke liye useful hai (CSS, JS, images HTML me link karne ke liye)



## 🔹 Real-World Example (Conceptually)

Jab user website visit karta hai:

1. Express check karta hai agar requested file static folder me hai
2. Agar hai → directly browser ko bhej deta hai
3. Agar nahi → baaki routes check karta hai ya “Not Found” page dikhata hai



## 🔹 Summary

| Concept                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| **Static Files**       | Files jo change nahi hoti (HTML, CSS, JS, images). |
| **express.static()**   | Middleware jo static files serve karta hai.        |
| **Common Folder Name** | Usually `public/` ya `assets/`.                    |
| **Purpose**            | Users ko content aur styling easily dikhana.       |

