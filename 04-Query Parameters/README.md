# 📘 Query Parameters in Express.js

## 🧩 What are Query Parameters?

Query parameters wo **key-value pairs** hotay hain jo URL ke end mei **question mark (?)** ke baad likhe jatay hain.
Ye server ko **extra information** dene ke liye use hotay hain **without changing the route**.

🗣️ **Example:**
`/search?keyword=apple`

Yahan:

* `/search` → Route
* `?keyword=apple` → Query parameter (`keyword` key hai, `apple` value hai)




## 💡 Why We Use Query Parameters

Hum query parameters ko use kartay hain taake hum:

1. **Filter** ya **sort** kar saken data ko
2. **Search** kar saken specific record
3. **Pagination** kar saken (data ko pages mei divide karna)
4. **Optional data** bhejna ho bina route badlay
5. **Dynamic requests** handle kar saken client se





## 🌐 URL Structure

```
/route?key=value&key2=value2
```

🧠 **Example:**
`/products?category=shoes&sort=price&page=2`

Yahan:

* `?` → start hota hai query parameters ka
* `&` → multiple parameters separate karta hai
* `category`, `sort`, `page` → keys hain
* `shoes`, `price`, `2` → unki values hain




## 🔍 Important Concepts

### 1. **Basic Query Parameter**

Sirf ek key-value pair hota hai.
Example: `/search?keyword=apple` → “apple” search karega.

---

### 2. **Multiple Query Parameters**

Jab ek se zyada parameters bhejne hoon.
Example: `/products?category=shoes&sort=asc&page=3`

---

### 3. **Default Values**

Agar query parameter na diya jaye to ek **default value** lagayi jati hai.
Example: agar `/items` me `sort` na ho to default `"asc"` lagta hai.

---

### 4. **Optional Query Parameters**

Agar parameter diya gaya ho to result uske hisab se badalta hai.
Agar na diya jaye to general data show hota hai.
Example:

* `/blogs?author=John` → sirf John ke blogs
* `/blogs` → sab blogs

---

### 5. **Pagination and Filtering**

Large data ko pages mei divide karne ke liye.
Example: `/users?page=2&limit=5` → page 2, har page pe 5 users.

---

### 6. **Sorting**

Data ko sort karne ke liye (price, name, date etc).
Example: `/products/sort?sortBy=price&order=desc`

---

### 7. **Search Feature**

Agar `keyword` diya gaya ho to search result milta hai.
Agar na ho to error ya message milta hai.
Example: `/search?keyword=AI`

---

### 8. **Validation of Query Parameters**

Query values check karna ke wo sahi format mei hain ya nahi.
Example: `price` number hai ya nahi, `category` khali to nahi.

---

### 9. **Security Concerns (Query Injection)**

Kabhi kabhi users malicious data bhej dete hain (XSS attacks).
Isliye input ko **sanitize** karna zaroori hai (like `xss` library se).

---

### 10. **Blogs Example (Filtering and Limiting)**

* `/blogs?author=Alice` → sirf Alice ke blogs
* `/blogs?limit=2` → sirf pehle 2 blogs
* `/blogs?author=Alice&limit=1` → sirf Alice ka pehla blog


## ⚙️ Summary Table

| Concept             | Description                | Example                            |
| ------------------- | -------------------------- | ---------------------------------- |
| **Basic Query**     | Ek key-value pair          | `/search?keyword=apple`            |
| **Multiple Query**  | Multiple pairs             | `/products?sort=asc&page=2`        |
| **Default Values**  | Agar na ho to default      | `sort=asc`                         |
| **Optional Params** | Ho bhi sakta hai ya na bhi | `/blogs?author=John`               |
| **Pagination**      | Data divide karna          | `/users?page=1&limit=5`            |
| **Sorting**         | Order set karna            | `/sort?by=price&order=desc`        |
| **Validation**      | Input check karna          | `/filter?category=shoes&price=500` |
| **Security**        | Safe rakhna input ko       | `/secure?input=<script>`           |

