export class Battle {
    constructor(
        public id: number,
        public player1Id: number,
        public player2Id: number,
        public winnerId: number | null,
        public startTime: Date,
        public endTime: Date | null,
        public status: string
    ) {}

    public startBattle(): void {
        this.status = 'In Progress';
        this.startTime = new Date();
    }

    public endBattle(winnerId: number): void {
        this.winnerId = winnerId;
        this.status = 'Completed';
        this.endTime = new Date();
    }
}