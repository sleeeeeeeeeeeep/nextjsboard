import { MongoClient } from 'mongodb'

const url: any = process.env.MONGODB_URL
let connectDB: any

if (process.env.NODE_ENV === 'development') {
  if (!((global as any)._mongo)) {
    (global as any)._mongo = new MongoClient(url).connect()
  }
  connectDB = (global as any)._mongo
} else {
  connectDB = new MongoClient(url).connect()
}

export { connectDB };

