export class Car {
  constructor(
    private _name: string,
    private _speed: number,
    private _size: number
  ) {}

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

  public get size(): number {
    return this._size;
  }

  public set size(size: number) {
    this._size = size;
  }
}
