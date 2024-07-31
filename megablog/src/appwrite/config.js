import conf from "../conf/conf";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";

export class Service{
    Client=new Client();
    databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
        this.databases =new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }
}

const service= new Service()


export default service
