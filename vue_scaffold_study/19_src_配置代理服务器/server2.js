const express = require('express')

const app = express()



app.get("/animal", (req, res) => {
    const animal = [
        {id: '001', name: 'cat', age:25},
        {id: '002', name: 'dogs', age:26},
        {id: '003', name: 'bird', age:27}
    ]
    res.send(animal)
})

app.listen(8001, () => {
    console.log("正在监听")
})