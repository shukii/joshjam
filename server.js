const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(serveStatic(path.join(__dirname, 'build')))

app.get('*', (req, res, next) => {
    if (req.get('X-Forwarded-Proto') === 'http') {
        const redirectTo = `https:\/\/${req.hostname}${req.url}`
        res.redirect(301, redirectTo);
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html')) 
    }
})

app.listen(3000)
console.log('App is listening on port 3000')
