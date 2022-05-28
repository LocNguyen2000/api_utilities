import {Tables} from '../models/model.mjs'

export const getColumnsByTableName = async (req, res) => {
    try {
        const { tableName } = req.query;
        
        if (!tableName) return res.status(204).json([])

        const columns = await Tables.find({tableName});

        return res.status(200).json(columns)

    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}

export const updateColumns = async (req, res) => {
    try {
        const { tableName } = req.query;
        const updatedColumns = req.body;
        
        if (!tableName) return res.status(204).json([])
        
        for (let column of updatedColumns){
            await Tables.findByIdAndUpdate({_id: column._id}, column);
        }

        return res.status(200).json('Done');

    } catch (error) {
        console.log(error);
        return res.status(500).json("Lỗi của Server. Xin liên hệ dev để xử lý vấn đề này")
    }
}