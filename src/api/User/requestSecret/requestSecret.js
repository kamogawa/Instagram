import { prisma } from "../../../../generated/prisma-client"
import { generateSecret } from "../../../utils/generateSecret";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;

      const loginSecret = await generateSecret();
      console.log(loginSecret);

      try {
        await prisma.updateUser({
          data: {loginSecret}, 
          where: {email}
        });
  
        return true;
      } catch (error) {
        return false;
      }
    }
  }
}