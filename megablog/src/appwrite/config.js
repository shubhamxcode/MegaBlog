import conf from "../conf/conf";
import { Client,Databases,Storage,Query } from "appwrite";

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
    async createPost({title,slug,content,featuredimage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
    async updatedocument(slug,{title,content,featuredimage,status}){
        try {
           return await this.databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            {
                title,
                content,
                featuredimage,
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
    async getdocument(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
            )
            
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
    async listdocument(querys=[Query.equal("status","active")]){//key:value
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                querys,
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
}

const service= new Service()


export default service
