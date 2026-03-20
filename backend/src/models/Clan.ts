export class Clan {
    constructor(
        public id: number,
        public name: string,
        public members: string[],
        public createdAt: Date
    ) {}
}