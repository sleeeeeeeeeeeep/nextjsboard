import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
        GithubProvider({
            clientId: process.env.GITHUB_OAUTH_CLIENTID!,
            clientSecret: process.env.GITHUB_OAUTH_CLIENTSECRET!,
        }),
    ],
    secret: process.env.JWTSECRET,
    adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 