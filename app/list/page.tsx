import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

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