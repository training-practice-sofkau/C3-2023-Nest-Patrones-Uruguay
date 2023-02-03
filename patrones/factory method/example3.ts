interface IAccountType {
    show(): void;
}

class SavingsAccount implements IAccountType {
    private name: string;
    private id: string;
    private state: boolean;

    constructor() {
        this.id = '205f5b48-94a2-470a-9258-49a16cbab6ee';
        this.name = 'Savins account';
        this.state = true;
    }
    show(): void {
        console.log({...this});
    }
}

class CheckingAccount implements IAccountType {
    private name: string;
    private id: string;
    private state: boolean;

    constructor() {
        this.id = 'ad8ecde7-f281-4b0a-80f9-90904d68c161';
        this.name = 'Checking account';
        this.state = true;
    }
    show(): void {
        console.log({...this});
    }
}

class AccountTypeFactory{
    static create(name: string): IAccountType {
        if(name === 'savins account') {
            return new SavingsAccount();
        }
        return new CheckingAccount();
    }
}


let accountType1 = AccountTypeFactory.create('savins account');
accountType1.show();

let accountType2 = AccountTypeFactory.create('something else');
accountType2.show();