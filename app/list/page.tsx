import { connectDB } from "@/util/database";

export default async function List() {
    let db: any = (await connectDB).db('forum');

    type post = {
        id?: number;
        title?: string;
        content?: string;
    }

    let posts: post[] = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
            {
                posts.map((post: post) => {
                    return (
                        <div className="list-item">
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}