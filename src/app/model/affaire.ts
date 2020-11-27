import { Document } from "./document";

export class Affaire {
    idAffaire:number;
    referenceAffaire:String;
    titreAffaire:String;
	descriptionAffaire:String; 
	status:String;
    document:Document[] ;
}
