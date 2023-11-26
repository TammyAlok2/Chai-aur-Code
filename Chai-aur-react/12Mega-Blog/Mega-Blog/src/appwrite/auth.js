import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, passward, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        passward,
        name
      );
      if (userAccount) {
        // login kara do
        return this.login({email,passward})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({email,passward}){
    try {
    return  await this.account.createEmailSession(email,passward);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service ",error)
    }
    return null;
  }

  async logout (){
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default AuthService;
