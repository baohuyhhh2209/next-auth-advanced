import { getVerificationTokenByEmail } from "@/data/verification-token";
import prisma from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires: expiresAt,
    },
  });

  return verificationToken;
};
