export class Validator {
    constructor(name){
        this.name = this.validateUsername(name);
    }

    validateUsername(name){
        if(/[^\w-]+/.test(name)){
            console.log (`В "${name}" допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)`);
            return null;
        } else if(/^\d|^[-_]|\d{4}|\d$|[-_]$/.test(name)){
            console.log (`"${name}" не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире`);
            return null;
        } else {
            console.log (`"${name}" добавлен в базу данных`);
            return this.name = name;
        }
    }
}


new Validator('_Tor');
new Validator('Tor9');
new Validator('2Tor');
new Validator('T-1o_r');
new Validator('To1234r');
new Validator('Tor-');
new Validator('-Tor');
new Validator('-Tor!!!!!');
new Validator('-Tor*****');
new Validator('-Tor$$$');