import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
});
