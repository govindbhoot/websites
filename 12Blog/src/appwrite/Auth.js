import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    };
    async CreateAccount({email, password, name}){
        try {
            const userAccount= await this.account.create(ID.unique(),email, password, name)
            if(userAccount){
               //call another method
               return this.Login({email,password});
            }else{
                return userAccount;
            }
            
        } catch (error) {
            throw error;
            
        }
    }
    async Login ({email, password}){
        try {
            return await this.account.createEmailSession(
                email, 
                password
            );
            
        } catch (error){
            throw error;
            
        }
    }

    async getCurrentUser(){
        try {
            const user =await this.account.get();
            console.log("Authservice - getcurrentuser", user)
            return user
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);    
        }
        return null;
    }
    async Logout(){
        try {
            await this.account.deleteSessions(); 
            
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error); 
            throw error;
            
            
        }
    }
}

const authService = new AuthService()


export default authService


