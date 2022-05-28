import mongoose from "mongoose"

const provinceSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: Number },
    division_type: { type: String },
    code_name: { type: String },
    phone_code: { type: String },
    districts: { type: Array },
})

const districtSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: Number },
    division_type: { type: String },
    code_name: { type: String },
    province_code: { type: Number },
    wards: { type: Array },
})

const wardSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: Number },
    division_type: { type: String },
    code_name: { type: String },
    district_code: { type: Number },
    districts: { type: Array },
})

const tableSchema = new mongoose.Schema({
    tableName: { type: String },
    label: { type: String },
    displayLabel: {type: String},
    name: { type: String },
    className: { type: String },
    format: { type: String },
    width: { type: String },
    isShow: {type: Boolean},
})


export const Wards = mongoose.model('wards', wardSchema)
export const Districts = mongoose.model('districts', districtSchema)
export const Provinces = mongoose.model('provinces', provinceSchema)
export const Tables = mongoose.model('tables', tableSchema)