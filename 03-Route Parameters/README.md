
# 📌 Route Parameters in Express.js

## 🔹 What are Route Parameters?

**Route parameters** Express.js mein URL ke dynamic parts hote hain 
Ye server ko **user ke URL ke specific data ko capture** karne ka tareeqa dete hain 

> Short definition: Route parameters allow the server to receive **dynamic values from the URL**



## 🔹 Why Do We Use Route Parameters?

* To get **specific information from the URL**, like user ID, order ID, blog ID
* To make **dynamic routes** instead of creating a separate route for each item.  
* To handle **resources efficiently** (like fetching a single blog, product, or user).  
* To combine with **middleware** for validation, logging, or authorization.  


## 🔹 URL Structure of Route Parameters

* **Single Route Parameter:**  
  Example: `/user/:id`  
  - `:id` → Dynamic parameter representing user ID  

* **Multiple Route Parameters:**  
  Example: `/user/:id/order/:orderId`  
  - `:id` → User ID  
  - `:orderId` → Order ID  

* **Optional Parameters:**  
  Example: `/users/:id?`  
  - `:id?` → Parameter is optional; route works even without it  

* **Resource Lookup:**  
  Example: `/blogs/:blogId`  
  - `:blogId` → Use to fetch a specific blog  

* **Regex in Parameters (Pattern Matching):**  
  Example: `/user/:id(\d+)` → Only numbers allowed  
  Example: `/name/:name([a-zA-Z]+)` → Only letters allowed  



## 🔹 Single vs Multiple Parameters

* **Single Parameter:** One dynamic value captured from URL.  
  Example: `/users/:id` → Captures only user ID  

* **Multiple Parameters:** Multiple dynamic values captured from URL.  
  Example: `/users/:userId/orders/:orderId` → Captures user ID and order ID  

 

## 🔹 Accessing Route Parameters

* **`req.params`** object is used to access route parameters.  
* Destructuring can be used for multiple parameters:  
  ```text
  const { userId, orderId } = req.params


## 🔹 Route Parameters vs Query Parameters

| Type            | Example URL              | Description                               |
| --------------- | ------------------------ | ----------------------------------------- |
| Route Parameter | `/products/:id`          | Part of the URL path, mandatory for route |
| Query Parameter | `/search?keyword=laptop` | Optional data sent after `?` in URL       |



## 🔹 Order of Routes

* **Specific routes** should be defined **before generic routes**.
  Example:

  * `/users/admin` (specific)
  * `/users/:id` (generic)
* Reason: Express matches routes in the order they are defined.



## 🔹 Combining Route Parameters with Middleware

* Middleware can **process route parameters** before the route handler executes.
* Example uses: Logging, validation, authorization.



## 🔹 Nested Route Parameters

* Parameters can be **nested for hierarchical resources**.
  Example: `/users/:userId/orders/:orderId`
* Useful for **sub-resources** like orders of a specific user.



## 🔹 Summary

* **Route Parameters** allow dynamic values in URLs.
* **Single & Multiple Parameters** handle one or more dynamic values.
* **Optional Parameters** let routes work without some values.
* **`req.params`** is used to access parameter values.
* **Regex Parameters** enforce patterns in URLs.
* **Order of Routes** matters — specific first, generic later.
* **Nested Parameters** handle hierarchical resources efficiently.
* **Difference from Query Parameters:** Route parameters are part of the URL path, query parameters are optional and appear after `?`.


