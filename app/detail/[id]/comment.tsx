'use client'

import { useState } from "react"

export default function Comment(props: any) {
    let [comment, setComment] = useState()
    const postId: string = props.postId

    return (
        <div>
            <div>댓글</div>
            <input onChange={(e) => { setComment(e.target.value as any) }} />
            <button onClick={() => { postComment(postId, comment as any) }}>댓글추가</button>
        </div>
    )

    function postComment(postId: string, comment: string) {
        console.log(postId)
        console.log(comment)

        let body = {
            parent: postId,
            comment: comment
        }

        fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify(body)
        })
    }
}