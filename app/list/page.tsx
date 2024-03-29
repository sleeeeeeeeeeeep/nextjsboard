import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 강제로 dynamic rendering
export const dynamic = 'force-dynamic'

export default async function List() {
    let db: any = (await connectDB).db('forum');

    type post = {
        _id?: number;
        title?: string;
        content?: string;
    }

    let posts: post[] = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
            <ListItem posts={posts} />
        </div>
    )
}