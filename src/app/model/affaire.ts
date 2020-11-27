import { Document } from "./document";

export class Affaire {
    idAffaire:number;
    referenceAffaire:string;
    titreAffaire:string;
	descriptionAffaire:string; 
	status:string;
    document:Document[] ;
}
