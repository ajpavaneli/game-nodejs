import express from 'express'
import http from 'http'

const app = express()
app.use(express.static('public'))


app.listen(3000, ()=>{
    console.log('servidor iniciado na porta 3000')
})

