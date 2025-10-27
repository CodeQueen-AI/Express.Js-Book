# 📌 Routing in Express.js

## 🔹 What is Routing?

**Routing** ek process hai jisme hum **different URLs (paths) ke liye specific actions** define karte hain 
Express.js mein routing ka matlab hai ki **server ko bataana ke user ne kaunsa URL visit kiya aur uske response mein kya return karna hai**.




## 🔹 Why Do We Use Routes?

* Organize different pages ya APIs  
* Handle requests and responses efficiently  
* Modular code structure  
* Each route has its **URL path** for browser/frontend requests


## 🔹 Route Terms in Express.js

| Term | Meaning |
|------|---------|
| Route | URL path jiske liye server specific response deta hai |
| Method | HTTP method jaise GET, POST, PUT, DELETE, PATCH |
| Handler | Function jo request receive karke response return karta hai |
| Parameter | URL ka dynamic part jo input ya ID provide karta hai |
| Query | URL ke saath optional data pass karne ka method |



## 🔹 Single Route

* Ek URL ke liye ek response define karna  
* Example: `/` → "Hello World"  



## 🔹 Multiple Routes

* Multiple URLs ke liye alag responses define karna  
* Example:  
  - `/` → "Home Page"  
  - `/about` → "About Page"  
  - `/contact` → "Contact Page"


## 🔹 URL Structure in Express.js

* **Static Route:** Exact match required (`/about`)  
* **Dynamic Route (Parameters):** `/user/:id`  
* **Query Parameters:** `/search?term=express`



## 🔹 HTTP & HTTPS

* **HTTP** → Standard protocol for browser-server communication  
* **HTTPS** → Secure version of HTTP (encrypted)  
* **URL** → Address to reach server  

**URL Breakdown Example:**

* `https://` → Protocol (secure communication)  
* `www.example.com` → Domain name / server address  
* `/about` → Route/path handled by server



## 🔹 Summary

* Routing = server ko batana ki **har URL ke liye kya response dena hai**  
* Single Route → ek URL ek response  
* Multiple Routes → multiple URLs alag responses  
* Parameters & Query → dynamic ya optional data  
* HTTP/HTTPS → data transfer protocol  
* URL → browser se server tak request ka address  
* Routes = modular aur clean code structure
