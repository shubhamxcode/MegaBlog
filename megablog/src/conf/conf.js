const conf={
    appwriteurl:string(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid:string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid:string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionid:string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketid:string(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf