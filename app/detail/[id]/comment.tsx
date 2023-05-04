'use client'

import { useEffect, useState } from "react"

export default function Comment(props: any) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    const postId: string = props.postId

    useEffect(() => {
        fetch(`/api/comment?postId=${postId}`)
            .then(r => r.json())
            .then((result) => {
                setData(result)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <div>댓글</div>
            <input onChange={(e) => { setComment(e.target.value as any) }} />
            <button onClick={() => { postComment(postId, comment as any) }}>댓글추가</button>

            {
                data.length > 0 ?
                data.map((comment: any, i: number) => {
                    
                    return (
                        <div key={i}>
                            <p>{comment.author}: {comment.content}</p>
                        </div>
                    )
                })
                : '댓글 x'
            }
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