import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";
@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    description: string;

    // @Column({ default: false })
    // isCompleted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @ManyToOne(() => Users, user => user.todos)
    // @JoinColumn({ name: "userId" })
    // user: Users;

    @ManyToOne(() => Users, user => user.todos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "userId" })
    user: Users;

    @Column({ type: "int" })
    userId: number;

 
}

