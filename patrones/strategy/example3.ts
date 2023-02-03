abstract class Fighter {
    abstract punch(): void;
}
  

class Ryu extends Fighter {
    punch(): void {
        console.log('Ryu punch!')
    }
}

class Ken extends Fighter {
    punch(): void {
        console.log('Ken punch!')
    }
}
  
class StreetFighter {
    private fighter: Fighter;

    constructor(fighter: Fighter) {
        this.fighter = fighter;
    }

    public fight(): void {
        this.fighter.punch();
    }
}


let streetFighterRyu: StreetFighter = new StreetFighter(new Ryu());
let streetFighterKen: StreetFighter = new StreetFighter(new Ken());

streetFighterKen.fight();
streetFighterRyu.fight();