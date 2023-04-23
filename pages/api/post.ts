import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
    if (req.method == "POST") {

        // type post = {
        //     _id?: number;
        //     title?: string;
        //     content?: string;
        // }

        if (req.body.title == '') {
            return res.status(500).json('아맞다제목 아맞다제목 아맞다제목')
        }

        try {
            const db: any = (await connectDB).db("forum");
            let post = await db.collection("post").insertOne(req.body)
        } catch (error) {
            console.log(error)
        }

        return res.redirect(302, "/list")
    }

    if (req.method == "DELETE") {
        if (req.body == '') {
            return res.status(500).json('id 없음')
        }

        try {
            const db: any = (await connectDB).db("forum");
            let result = await db.collection("post").deleteOne({_id: new ObjectId(req.body)})
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        return res.redirect(302, "/list")    
    }
}