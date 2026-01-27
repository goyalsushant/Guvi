// const fs = require('fs')
import fs from 'fs'
import express from 'express'
import { greet } from './apis/index.js'

fs.writeFile('test.txt', 'Hello World from Node.js', (err) => {
    if (err) {
        console.log('Error encountered')
        return
    }
    console.log('File created successfully.')
})

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error encountered')
        return
    }
    console.log('File Content: ', data)
})

const greeting = greet('Javascript')
console.log(greeting)