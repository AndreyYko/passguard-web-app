export class AddItemCardForm {
  constructor(
    public name: string,
    public owner: number,
    public cardholder: string,
    public brand: number,
    public cardNumber: string,
    public expiryDate: string,
    public cvv: string,
    public notes: string
  ) {}
}
