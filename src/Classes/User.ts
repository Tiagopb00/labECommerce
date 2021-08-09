

export class User {
    public id: string;
    private email: string;
    public name: string;
    private age: number;


    constructor(
        id: string,
        email: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.age = age

    }


    public getEmail(): string {
        return this.email
    }

 
    public getAge(): number {
        return this.age
    }
}
