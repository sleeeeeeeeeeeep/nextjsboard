'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(props: any) {
    let router = useRouter()
    return(
        <button onClick={() => {clickDetailLink(props.postId)}}>
            버튼
        </button>
    )

    function clickDetailLink(postId: number) {
        router.push('/detail/' + postId)
    }
}