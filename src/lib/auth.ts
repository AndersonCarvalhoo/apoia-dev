import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET!,
    trustHost: true,
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
})