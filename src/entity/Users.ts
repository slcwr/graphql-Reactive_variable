import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"
import { Todo } from "./Todo";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    username!: string;

    @Column({ type: "varchar" })
    password!: string;

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[];
}