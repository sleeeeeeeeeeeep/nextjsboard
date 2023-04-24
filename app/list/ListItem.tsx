'use client'

import { useEffect } from "react"
import DetailLink from "./DetailLink"
import Link from "next/link"

export default function ListItem(props: any) {
    type post = {
        _id?: number;
        title?: string;
        content?: string;
    }

    let posts: post[] = props.posts;

    return (
        <div>
            {
                posts.map((post: post, i: number) => {
                    let strPostId: string = post._id + ""
                    let link: string = "/detail/" + strPostId

                    return (
                        <div className="list-item" key={i}>
                            <Link href={"/detail/" + strPostId}>
                                <h4>{post.title}</h4>
                            </Link>
                            <DetailLink postId={post._id} />
                            <br />
                            <Link href={'/edit/' + strPostId}>✏️</Link>
                            <br />
                            <span onClick={() => { deletePost(strPostId) }}>삭제</span>
                        </div>
                    )
                })
            }
        </div>
    )

    function deletePost(postId: string) {
        fetch('/api/post', {
            method: 'DELETE',
            body: postId
        }).then((r) => {
            r.json();
        }).then((result) => {

        }).catch((error) => {
            console.log('실패')
        })
    }
}