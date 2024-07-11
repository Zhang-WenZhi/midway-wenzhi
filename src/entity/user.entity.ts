// 创建实体
// import {
//     Column,
//     Entity,
//     PrimaryGeneratedColumn,
//     CreateDateColumn,
//     UpdateDateColumn,
// } from 'typeorm';

// @Entity('user')
// export class User {
//     @PrimaryGeneratedColumn()
//     id: number;
//     @Column({ comment: '姓名' })
//     name: string;
//     @Column({ comment: '年龄' })
//     age: number;
//     @CreateDateColumn({ comment: '创建日期' })
//     create_date: Date;
//     @UpdateDateColumn({ comment: '更新日期' })
//     update_date: Date;
// }


// 封装基础entity实体类
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('user')
export class User extends BaseEntity {
    @Column({ comment: '姓名' })
    name: string;
    @Column({ comment: '年龄' })
    age: number;
}
