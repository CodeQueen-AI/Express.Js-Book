# 📘 Request in Express.js

## 🔹 What is a Request?

In Express.js, a **Request (req)** represents the **data sent by the client (browser or app) to the server**.
It carries information such as method type, URL, parameters, headers, and body content.

🗣️ *Simple words:*

> Jab client (user) server ko kuch data bhejta hai, to us data ko request kehte hain.



## 🔹 How Request Works

When a client sends a request (like GET, POST, etc.), the **Express server** receives it through a route
The server then processes it and sends a **response** back.

📍 Example flow:

```
Client → sends request → Server receives → Server processes → Sends response back
```


## 🔹 URL Structure of a Request

A typical request URL looks like this:

```
http://localhost:3000/user?id=123&name=CodeQueen
```

| Part                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **http**                   | Protocol                                    |
| **localhost:3000**         | Server address                              |
| **/user**                  | Route path                                  |
| **?id=123&name=CodeQueen** | Query parameters (extra data sent with URL) |



## 🔹 Request Object (`req`)

The `req` object in Express stores **all the details** of the request that comes from the client.
It helps the server **understand what the client wants**.

🧠 *Think of it as:*

> A container holding all the client’s request information.



## 🔹 Request Methods

Different methods define **what action** the client wants to perform.

| Method     | Purpose                        | Example                 |
| ---------- | ------------------------------ | ----------------------- |
| **GET**    | To fetch data from server      | Viewing posts or users  |
| **POST**   | To send new data to server     | Submitting a form       |
| **PUT**    | To replace old data completely | Updating a record       |
| **PATCH**  | To modify part of the data     | Changing only one field |
| **DELETE** | To remove data                 | Deleting a user or item |


## 🔹 Request Properties

The `req` object has several useful properties that give access to client data:

| Property        | Description                                          | Example                            |
| --------------- | ---------------------------------------------------- | ---------------------------------- |
| **req.method**  | Shows which HTTP method was used                     | `"GET"`, `"POST"`                  |
| **req.url**     | Shows the full request URL                           | `"/user?id=123"`                   |
| **req.path**    | Shows only the route path                            | `"/user"`                          |
| **req.headers** | Contains all client header information               | `{ host, user-agent, ... }`        |
| **req.query**   | Shows query parameters from URL                      | `{ id: "123", name: "CodeQueen" }` |
| **req.body**    | Holds body data sent by client (mostly for POST/PUT) | `{ message: "Hello" }`             |



## 🔹 Summary

✅ **Request** → Data sent from client to server



✅ **Object** → Contains details of the client request (`req`)



✅ **Methods** → Define the action (GET, POST, PUT, PATCH, DELETE)




✅ **Properties** → Help access data like URL, path, query, and body

💡 *In short:*

> The request tells the server **what the client wants** and provides all the necessary information to process it.



