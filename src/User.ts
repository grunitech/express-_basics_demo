// we want to export the object in order to use it
export class User {
    name:string; // the name of the user
    id:number;// the user's unique id

    // constructor with id, and name passed to it.
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
}