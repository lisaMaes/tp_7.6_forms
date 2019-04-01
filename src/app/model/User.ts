export class User {

  private _name:string;
  private _surname:string;
  private _phone:string;
  private _email:string;
  private _knowledge:Array<string>;

  constructor(_name?:string, _surname?:string, _phone?:string, _email?:string, _knowledge?:Array<string>){
    this._name = _name;
    this._surname = _surname;
    this._phone = _phone;
    this._email = _email;
    this._knowledge = _knowledge;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    console.log('SET EMAIL', value);
    this._email = value;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    console.log('SET name', value);
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    console.log('SET surname', value);
    this._surname = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    console.log('SET phone', value);
    this._phone = value;
  }

  get knowledge(): Array<string> {
    return this._knowledge;
  }

  set knowledge(value: Array<string>) {
    console.log('SET knowledge', value);
    this._knowledge = value;
  }
}
