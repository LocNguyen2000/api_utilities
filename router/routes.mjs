import { Router } from "express";

import { getAllProvinces, getAllWards, getAllDistricts, getDistrictsByProvince, getWardsByDistricts } from "../controllers/location.controler.mjs"
import { updateColumns, getColumnsByTableName } from "../controllers/tables.controller.mjs";


const provinceRouter = Router()
const districtRouter = Router()
const wardRouter = Router()
const tableRouter = Router()

provinceRouter.get('/', getAllProvinces)

districtRouter.get('/', getAllDistricts)
districtRouter.get('/byProvince', getDistrictsByProvince)

wardRouter.get('/', getAllWards)
wardRouter.get('/byDistrict', getWardsByDistricts)

tableRouter.get('/', getColumnsByTableName)
tableRouter.put('/', updateColumns)


export default {
    provinceRouter, districtRouter, wardRouter, tableRouter
} 
