// Single Route(/user/:id)
import express from 'express'
const app = express()
const PORT = 8000;

app.get('/user/:id' , (req , res) => {
    const userId = req.params.id;
    res.send(`User Id is ${userId}`)
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Multiple Route(/user/:id/order/:orderId )
import express from 'express'
const app = express();
const PORT = 8000

app.get('/user/:id/order/:orderId' , (req , res) => {
    const {id , orderId} = req.params //Destructing
    res.send(`User ${id} has order ${orderId}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//Optional Paramters
import express from 'express'
const app = express();
const PORT = 8000

// Optional parameter :id?
app.get("/users/:id?", (req, res) => {
  const userId = req.params.id; // yahan se parameter milega

  if (userId) {
    res.send(`User ID is: ${userId}`);
  } else {
    res.send("No User ID provided");
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//Resource lookup with route parameters(/blogs/:blogId)
import express from 'express'
const app = express()
const PORT = 8000;

const blogs = [
    { id: 1, title: "Mastering React Hooks"},
    { id: 2, title: 'Exploring CSS Grid Layout'},
    { id: 3, title: 'Node.js rest API'},
]
    
app.get('/blogs/:blogId' , (req , res) => {
    const blogId = Number(req.params.blogId);
    const blog = blogs.find(b => b.id === blogId)

    if(blog){
        res.json(blog);
    }else {
        res.status(404),send('Blog not found!')
    }
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


//Accessing Parameters with req.params
import express from 'express'
const app = express()
const PORT = 8000;

app.get("/users/:id", (req, res) => {
  const userId = req.params.id; // Access parameter
  res.send(`User ID is: ${userId}`);
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


//Route Parameters vs Query Parameters
import express from 'express'
const app = express()
const PORT = 8000;

// Route parameter example: /products/15
app.get("/products/:id", (req, res) => {
  res.send(`Product ID (Route Param): ${req.params.id}`);
});

// Query parameter example: /search?keyword=laptop
app.get("/search", (req, res) => {
  res.send(`Search keyword (Query Param): ${req.query.keyword}`);
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


//Regex in Route Parameters (Pattern Matching)
import express from 'express'
const app = express()
const PORT = 8000;

// Only numbers allowed (e.g. /user/123)
app.get("/user/:id(\\d+)", (req, res) => {
  res.send(`User ID (numbers only): ${req.params.id}`);
});

// Only letters allowed (e.g. /name/Ali)
app.get("/name/:name([a-zA-Z]+)", (req, res) => {
  res.send(`Name (letters only): ${req.params.name}`);
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


// Order of Routes (Specific vs Generic)
import express from 'express'
const app = express()
const PORT = 8000;

// Specific route (write first)
app.get("/users/admin", (req, res) => {
  res.send("Welcome Admin!");
});

// Generic route (write later)
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


//Combining Route Parameters with Middleware
import express from 'express'
const app = express()
const PORT = 8000;

// Middleware to log parameter
app.param("id", (req, res, next, id) => {
  console.log(`User ID is: ${id}`);
  next();
});

app.get("/users/:id", (req, res) => {
  res.send(`User ID is: ${req.params.id}`);
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})


// Nested Route Parameters
import express from 'express'
const app = express()
const PORT = 8000;

// Example: /users/10/orders/5
app.get("/users/:userId/orders/:orderId", (req, res) => {
  const { userId, orderId } = req.params;
  res.send(`User ID: ${userId}, Order ID: ${orderId}`);
});


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})