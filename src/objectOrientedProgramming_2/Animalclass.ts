class Animal {
    private _species: string = ""; 
    private _age: number; 
    private _color: string;

    constructor(species: string, age: number, color: string){
        this._species = species;
        this._age = age; 
        this._color = color; 
    }
    get species() {
        return this._species;
    }
    set species(value: string) {
        this._species = value;
    }
    get age() {
        return this._age;
    }
    set age(value: number){
        this._age = value;
    }
    get color(){
        return this._color;
    } 
    set color(value: string ){
        this._color = value
    }
}

export default Animal;
