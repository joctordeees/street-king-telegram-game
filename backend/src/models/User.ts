import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: 0 })
    level: number;

    @Column({ default: 0 })
    experience: number;

    @Column({ default: 100 })
    health: number;

    @Column({ default: 100 })
    mana: number;

    @Column({ default: 0 })
    gold: number;

    @Column({ default: 0 })
    strength: number;

    @Column({ default: 0 })
    dexterity: number;

    @Column({ default: 0 })
    intelligence: number;

    @Column({ default: 0 })
    equipment: string;

    @Column({ default: '{}', type: 'json' })
    inventory: object;

    @Column({ default: '{}', type: 'json' })
    achievements: object;

    @Column({ default: 0 })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}