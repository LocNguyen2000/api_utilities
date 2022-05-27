import {Wards, Districts, Provinces} from '../model.mjs'

export const getAllProvinces = async (req, res) => {
    try {
        const provinces = await Provinces.find()

        if (provinces.length < 0) return res.status(204).json([])

        return res.status(200).json(provinces)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}

export const getAllDistricts = async (req, res) => {
    try {
        const districts = await Districts.find()

        if (districts.length < 0) return res.status(204).json([])

        return res.status(200).json(districts)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}
export const getDistrictsByProvince = async (req, res) => {
    try {
        const { code } = req.query;

        if (!code || code == undefined) return res.status(204).json([])

        console.log(code);

        const districtsByCode = await Districts.find({province_code: code})

        return res.status(200).json(districtsByCode)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}

export const getAllWards = async (req, res) => {
    try {
        const wards = await Wards.find()

        if (wards.length < 0) return res.status(204).json([])

        return res.status(200).json(wards)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}
export const getWardsByDistricts = async (req, res) => {
    try {
        const { code } = req.query;

        if (!code || code == undefined) return res.status(204).json([])

        const wardsByCode = await Wards.find({district_code: code})

        return res.status(200).json(wardsByCode)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}