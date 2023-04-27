import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
        GithubProvider({
            clientId: process.env.GITHUB_OAUTH_CLIENTID!,
            clientSecret: process.env.GITHUB_OAUTH_CLIENTSECRET!,
        }),
    ],
    secret: process.env.JWTSECRET
};
export default NextAuth(authOptions); 