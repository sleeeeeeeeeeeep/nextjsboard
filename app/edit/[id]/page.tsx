import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props: any) {
    let db: any = (await connectDB).db("forum");

    type post = {
        _id?: number;
        title?: string;
        content?: string;
    }

    const post: post = await db.collection("post")
        .findOne({
            _id: new ObjectId(props.params.id)
        })

    return (
        <div className="p-20">
            <h4>글 수정</h4>
            <form action="/api/edit" method="POST">
                <input style={{display: "none"}} name="_id" defaultValue={post._id?.toString()}></input>
                <input name="title" defaultValue={post.title} placeholder="제목"/>
                <input name="content" defaultValue={post.content} placeholder="내용"/>

                <button type="submit">버튼</button>
            </form>
        </div>
    )
}