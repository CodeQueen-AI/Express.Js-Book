# 📘 Error Handling in Express.js

## 🔹 What Is Error Handling?

**Error handling** means catching and managing errors that happen in your Express app — instead of letting your app crash.

In simple words:

> It helps your server **respond gracefully** when something goes wrong.

---

## 🔹 Why Is Error Handling Important?

Because in real applications, many things can fail —
like invalid routes, missing data, or server bugs.

Without proper handling, users see ugly messages or your app may stop working.
With error handling, users get **clear and friendly error messages**.

---

## 🔹 How It Works (Step-by-Step)

1. The client sends a request.
2. Express checks routes one by one.
3. If something goes wrong, an **error is created**.
4. The error is passed to the **error-handling middleware** using `next(err)`.
5. Express displays a clean message to the user.

---

## 🔹 Key Parts of Error Handling

### 1️⃣ Normal Route

These are your regular routes, like `/`, `/home`, or `/api`.
They work fine until an unexpected issue occurs.

---

### 2️⃣ Custom Error Route

If something fails, you can **manually create an error** using:

```js
const err = new Error("Custom message");
err.status = 500;
next(err);
```

This passes the error to the error-handling middleware.

---

### 3️⃣ 404 Handler (Page Not Found)

When a user visits a route that doesn’t exist,
Express uses a **404 middleware**:

> "Page Not Found" errors are handled here.

It ensures your app responds nicely even for invalid URLs.

---

### 4️⃣ Error-Handling Middleware

This special middleware **catches all errors** in the app.
It looks like this:

```js
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ status: err.status, message: err.message });
});
```

* It always has **4 parameters** — `(err, req, res, next)`
* `err` → contains the error details
* `res.status()` → sets the HTTP status code
* `res.send()` → sends the error message to the client

---

## 🔹 Common Error Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

## 🔹 Summary

* **Error handling** prevents your app from crashing.
* **404 Middleware** catches missing routes.
* **Error Middleware** manages unexpected problems.
* Always use `next(err)` to pass errors forward.

✨ In short:

> “Error handling in Express makes your app smart, stable, and user-friendly — even when something breaks.” 💪💫

