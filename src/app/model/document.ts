import { Affaire } from "./affaire";



export class Document {
    id:number;
    dateCreation:Date ; 
    nom:String ; 
    description:String ;
    archive:String ; 
    affaire:Affaire;
}
