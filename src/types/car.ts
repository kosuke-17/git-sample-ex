export class Car {
  constructor(private _name: string, private _speed: string) {}

  chngeName(name: string) {
    this.name = name;
    return this.name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get speed(): string {
    return this._speed;
  }

  public set speed(speed: string) {
    this._speed = speed;
  }
}
