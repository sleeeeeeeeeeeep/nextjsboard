import { connectDB } from "@/util/database"

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)

  return (
    <div>
      <h1>메인</h1>
    </div>
  )
}
