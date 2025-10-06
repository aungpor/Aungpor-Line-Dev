import NextAuth, { Account, DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: Account.accessToken;
    myUser?: Account.myUser;
    campaign?: Account.campaign;
    isNewRegister?: Account.isNewRegister;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: Account.accessToken;
    myUser?: Account.myUser;
    campaign?: Account.campaign;
    isNewRegister?: Account.isNewRegister;
  }
}

declare module "next-auth/user" {
  interface JWT {
    data?: Account.data;
  }
}
