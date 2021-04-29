const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const helmet = require('helmet')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json')

const lessonRouter = require('./routes/lessonRouter')
const PORT = 8000

const app = express()
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use('/api/lessons', lessonRouter)

app.get('/', (req, res) => {
    res.send({ message: 'Server Online.' })
})

app.listen(PORT, () => {
    console.log(chalk.bgGreen.red.bold`Server online at port ${PORT}`)
})
