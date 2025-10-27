//Basic Query Parameters
import express from "express";
const app = express();
const PORT = 8000

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`You searched for: ${keyword}`);
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Multiple Query Parameters
import express from "express";
const app = express();
const PORT = 8000

app.get("/products", (req, res) => {
  const { category, sort, page } = req.query;
  res.send({
    category,
    sort,
    page,
  });
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Default Values for Query Params
import express from "express";
const app = express();
const PORT = 8000

app.get("/items", (req, res) => {
  const sort = req.query.sort || "asc";
  const page = req.query.page || 1;

  res.send(`Sort: ${sort}, Page: ${page}`);
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Optional Query Parameters
import express from "express";
const app = express();
const PORT = 8000

app.get("/blogs", (req, res) => {
  const author = req.query.author;
  if (author) {
    res.send(`Showing blogs written by ${author}`);
  } else {
    res.send("Showing all blogs");
  }
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Pagination & Filtering with Query Params
import express from "express";
const app = express();
const PORT = 8000

app.get("/users", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  res.send({
    page,
    limit,
    skip,
    message: "Pagination and filtering applied",
  });
});


app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Sorting with Query Params
import express from "express";
const app = express();
const PORT = 8000

app.get("/products/sort", (req, res) => {
  const sortBy = req.query.sortBy || "price";
  const order = req.query.order || "asc";

  res.send(`Sorting by ${sortBy} in ${order} order`);
});


app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Search Feature with Query Params
import express from "express";
const app = express();
const PORT = 8000

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).send("Keyword required!");
  }
  res.send(`Search results for: ${keyword}`);
});
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Validation of Query Params
import express from "express";
const app = express();
const PORT = 8000

app.get("/filter", (req, res) => {
  const { category, price } = req.query;

  if (!category) {
    return res.status(400).send("Category is required!");
  }

  if (price && isNaN(price)) {
    return res.status(400).send("Price must be a number!");
  }

  res.send(`Filtering by ${category} and price: ${price || "any"}`);
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Security Concerns (Query Injection)
import express from "express";
const app = express();
const PORT = 8000;
import xss from "xss";

app.get("/secure", (req, res) => {
  let { input } = req.query;
  input = xss(input); // sanitize user input
  res.send(`Securely received: ${input}`);
});
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


//Search Route with Query Parameters
import express from "express";
const app = express();
const PORT = 8000;

app.get("/search", (req, res) => {
    const { term, sort } = req.query; 
    res.send(`Search Term: ${term || "none"}, Sort By: ${sort || "none"}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Blogs Route with Optional Query Parameters
import express from 'express'
const app = express();
const PORT = 8000;

const blogs = [
    { id: 1, title: "Mastering React Hooks", author: "Alice Walker" },
    { id: 2, title: "Exploring CSS Grid Layout", author: "John Doe" },
    { id: 3, title: "Node.js REST APIs", author: "Emily Davis" },
]

app.get('/blogs', (req, res) => {
    const { author, limit } = req.query; 

    let filteredBlogs = blogs; 

    if (author) {
        filteredBlogs = filteredBlogs.filter(b => b.author === author); 
    }
    if (limit) {
        filteredBlogs = filteredBlogs.slice(0, Number(limit)); 
    }
    res.json(filteredBlogs); 
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})