import { prisma } from "../../../../generated/prisma-client";

//全てのユーザー情報を取得
export default {
  Query: {
    allUsers: async () => {
      return await prisma.users();
    }
  }
};
