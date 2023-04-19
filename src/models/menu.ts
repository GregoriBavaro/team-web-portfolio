class MenuItem {
  name: string;
  id: number;
  to: string;

  constructor(navText: string, idNumber: number, toText: string) {
    this.name = navText;
    this.id = idNumber;
    this.to = toText;
  }
}

export default MenuItem;
