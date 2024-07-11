// // 创建service
// import { Provide } from '@midwayjs/core';
// import { FindOptionsWhere, Repository } from 'typeorm';
// import { User } from '../entity/user.entity';
// import { InjectEntityModel } from '@midwayjs/typeorm';

// @Provide()
// export class UserService {
//     @InjectEntityModel(User)
//     userModel: Repository<User>;

//     // 新增
//     async create(user: User) {
//         await this.userModel.save(user);
//         return user;
//     }

//     // 删除
//     async remove(user: User) {
//         await await this.userModel.remove(user);
//     }

//     // 修改
//     async edit(user: User): Promise<User> {
//         return await this.userModel.save(user);
//     }

//     // 分页查询
//     async page(page: number, pageSize: number, where?: FindOptionsWhere<User>) {
//         // 按照创建日期倒序返回
//         const order: any = { create_date: 'desc' };

//         const [data, total] = await this.userModel.findAndCount({
//             order,
//             skip: page * pageSize,
//             take: pageSize,
//             where,
//         });

//         return { data, total };
//     }

//     // 根据查询条件返回全部
//     async list(where?: FindOptionsWhere<User>) {
//         const order: any = { create_time: 'desc' };
//         const data = await this.userModel.find({
//             where,
//             order,
//         });

//         return data;
//     }
// }


// 封装基础service
import { Provide } from '@midwayjs/core';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { BaseService } from '../common/base.service';

@Provide()
export class UserService extends BaseService<User> {
    @InjectEntityModel(User)
    userModel: Repository<User>;

    getModel(): Repository<User> {
        return this.userModel;
    }
}
