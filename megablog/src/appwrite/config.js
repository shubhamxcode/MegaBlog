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
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
    async updatedocument(slug,{title,content,featuredImage,status,userId}){
        try {
           return await this.databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }

           )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
    async deletedocument(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
            // return true
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            // return false
        }
    }
}

const service= new Service()


export default service
