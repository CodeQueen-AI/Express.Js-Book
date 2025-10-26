import express from 'express'
const app = express();
const PORT = 8000;

//Home Route
app.get('/' , (req, res) => {
    res.send('Hello World!!')
})

//Blog Route
app.get('blogs' , (req , res) => {
    res.json({blogs : [
        {id : 1, title : 'Mastering React Hooks'},
        {id : 2, title : 'Exploring CSS Grid Layout'}
    ]})
})

//About Route
app.get('/about' , (req , res) => {
    res.send('Hello World from About Page!!')
})

//Services Route
app.get('/services' , (req , res) => {
    res.send('Hello world from Service Page')
})

//Server Run
app.listen(PORT) , () => {
    console.log(`Server is Running on port ${PORT}`)
}  