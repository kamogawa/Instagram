import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userPofile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userPofile,
        posts
      };
    },
    User: {
      fullName: parent => {
        return `${parent.firstName} ${parent.lastName}`;
      }
    }
  }
};
