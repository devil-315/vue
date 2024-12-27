const express = require('express')

const app = express()



app.get("/person", (req, res) => {
    const person = [
        {id: '001', name: 'herb01', age:25},
        {id: '002', name: 'herb02', age:26},
        {id: '003', name: 'herb03', age:27}
    ]

    res.send(person)
})

app.listen(8000, () => {
    console.log("正在监听")
})