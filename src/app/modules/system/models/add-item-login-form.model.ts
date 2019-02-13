export class AddItemLoginForm {
  constructor(
    public name: string,
    public owner: number,
    public username: string,
    public password: string,
    public notes: string
  ) {}
}
