const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000

const indexRouter = require('./routers/indexRouter')

app.set('view engine', 'ejs')
app.use('/', indexRouter)
app.listen(PORT, console.log(`Server connected on port ${PORT}`))