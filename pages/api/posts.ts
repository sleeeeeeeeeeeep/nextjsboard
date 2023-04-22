import { connectDB } from "@/util/database";

export default async function handler(req: any, res: any) {
    if(req.method == "GET") {
        let db: any = (await connectDB).db('forum');

        type post = {
            _id?: number;
            title?: string;
            content?: string;
        }
    
        let posts: post[] = await db.collection('post').find().toArray();
    
        return res.status(200).json(posts)
    }

}