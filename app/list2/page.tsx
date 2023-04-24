import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 20초동안 캐싱
export const revalidate = 20

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