export class Car {
  constructor(private _name: string, private _speed: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get speed(): number {
    return this._speed;
  }

  public set speed(speed: number) {
    this._speed = speed;
  }
}
