export default class user {
    // 1. Les propriété d'un user
    id: number;
    Like: number;
    Follow: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
    
    // 2. Définition des valeur par défaut des propriété définie précedement
    constructor(
     id: number,
     Like: number = 0,
     Follow: number = 0,
     name: string = '...',
     picture: string = 'https://...',
     types: Array<string> = ['Normal'],
     created: Date = new Date()
    ) {
        // 3. Initialisation des propriété à la valeur par défaut
     this.id = id;
     this.Like = Like;
     this.Follow = Follow;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }