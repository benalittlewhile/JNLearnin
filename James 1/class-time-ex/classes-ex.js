class HumanPerson{
    constructor(adult1, adult2){
        this.adult1 = adult1;
        this.adult2 = adult2;
    }
    present(){
        return (` parents are ${this.adult1} and ${this.adult2}`);
}
}
class Childen extends HumanPerson{
    constructor(name, adult1, adult2){
        super(adult1,adult2);
        this.name = name;
    }
    displayName(){
        return (this.name + "'s"+ this.present());
    }
}


const realPerson = new Childen("James", "David","Cindy");
console.log(realPerson.displayName());