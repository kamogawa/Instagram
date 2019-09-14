import { prisma } from "../../../../generated/prisma-client"
import generateSecret from "../../../utils/generateSecret";
import sendSecretMail from "../../../utils/sendSecretMail";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;

      const loginSecret = await generateSecret();
      console.log(loginSecret);

      try {
        await sendSecretMail(email,loginSecret);
        await prisma.updateUser({
          data: {loginSecret}, 
          where: {email}
        });
  
        return true;
      } catch {
        return false;
      }
    }
  }
}