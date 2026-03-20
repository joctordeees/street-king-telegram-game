class Gym {
    constructor(public id: number, public name: string, public level: number) {}

    upgrade(): void {
        this.level++;
    }

    getInfo(): string {
        return `Gym: ${this.name}, Level: ${this.level}`;
    }
}

export default Gym;