import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
    // 일단 put 대신 post 사용, 나중에 ajax로 api 정리
    if (req.method == "POST") {

        // type post = {
        //     _id?: number;
        //     title?: string;
        //     content?: string;
        // }

        if (req.body.title == '') {
            return res.status(500).json('아맞다제목 아맞다제목 아맞다제목')
        }

        let editedPost = {
            title: req.body.title,
            content: req.body.content
        }

        try {
            const db: any = (await connectDB).db("forum");
            let post = await db.collection("post")
                .updateOne({
                    _id: new ObjectId(req.body._id)
                }, {
                    $set: editedPost
                })
        } catch (error) {
            console.log(error)
        }

        return res.redirect(302, "/list")
    }

}