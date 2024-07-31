import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    Client=new Client()
    account;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
        this.account = new Account(this.Client)
    }
}