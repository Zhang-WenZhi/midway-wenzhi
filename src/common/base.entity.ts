// 封装基础entity实体类
import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: string;
    @CreateDateColumn()
    create_time?: Date;
    @UpdateDateColumn()
    update_time?: Date;
}
