import express from 'express'
import router from "./router/routes.mjs"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const port = 4000 || process.env.PORT

mongoose.connect('mongodb://localhost:27017/vn_locations')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/v1/provinces', router.provinceRouter)
app.use('/api/v1/districts', router.districtRouter)
app.use('/api/v1/wards', router.wardRouter)

app.use('/api/v1/tables', router.tableRouter)

app.listen(port, () => {
    console.log(`App connected successfully on port ${port}`)
})
