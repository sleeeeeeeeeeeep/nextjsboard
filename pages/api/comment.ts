import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: any, res: any) {
    // 유저 세션정보
    // @ts-ignore
    let session = await getServerSession(req, res, authOptions)

    if (req.method == 'GET') {
        /**
         * 
         */

    } else if (req.method == 'POST') {
        if (!session) {
            return res.status(500).json('로그인안함')
        }

        let data = JSON.parse(req.body)

        let inputData = {
            content: data.comment,
            author: session.user?.email,
            parent: new ObjectId(data.parent)
        }
        console.log(inputData)

        const db: any = (await connectDB).db("forum");
        let comment = await db.collection("comment").insertOne(inputData)

        return res.status(200)

    } else if (req.method == 'DELETE') {
        /**
         * 
         */
    }
}