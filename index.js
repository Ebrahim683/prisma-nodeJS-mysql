import express from 'express'
import bodyParser from 'body-parser'
import createUser from './user/handleUser.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use('/user', createUser)


const port = process.env.PORT || '3000'
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})