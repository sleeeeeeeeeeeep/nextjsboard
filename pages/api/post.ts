import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: any, res: any) {
    type post = {
        _id?: number;
        title?: string;
        content?: string;
        author?: string;
    }

    // 유저 세션정보
    let session = await getServerSession(req, res, authOptions)

    if (req.method == "POST") {
        if (session) {
            req.body.author = session?.user?.email
        } else {
            return res.status(500).json('로그인안함')
        }
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
        if (!session) {
            return res.status(500).json('로그인안함')
        }

        if (req.body == '') {
            return res.status(500).json('id 없음')
        }

        console.log(req.body)

        try {
            const db: any = (await connectDB).db("forum");
            console.log(req.body.id)

            const post: post = await db.collection("post")
                .findOne({
                    _id: new ObjectId(req.body)
                })

            console.log(post)
            if (session?.user?.email == post.author) {
                let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body) })
                console.log(result)
            } else {
                console.log("다른유저")
                return res.status(500).json('다른유저')
            }
        } catch (error) {
            console.log(error)
        }

        return res.redirect(302, "/list")
    }
}