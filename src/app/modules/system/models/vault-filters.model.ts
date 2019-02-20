export class VaultFilters {
  constructor(
    public favorites: boolean,
    public type: string | null,
    public collection: string | null
  ) {}
}
