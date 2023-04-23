import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

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
            {
                posts.map((post: post, i: number) => {
                    let link: string = "/detail/" + post._id

                    return (
                        <div className="list-item" key = {i}>
                            <Link href={"/detail/" + post._id}>
                                <h4>{post.title}</h4>
                            </Link>
                            <DetailLink postId={post._id}/>

                            <Link href={'/edit/' + post._id}>✏️</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}