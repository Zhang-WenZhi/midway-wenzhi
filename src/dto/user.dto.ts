// import { Rule, RuleType } from '@midwayjs/validate';

// export class UserDTO {
//     @Rule(RuleType.number().required())  // id不能为空，并且是数字
//     id: number;

//     @Rule(RuleType.number().max(60))     // 年龄字段必须是数字，并且不能大于60
//     age: number;
// }

// import { Rule, RuleType } from '@midwayjs/validate';

// export class UserDTO {
//     @Rule(RuleType.number().required().error(new Error('error'))) // id不能为空，并且是数字
//     id: number;

//     @Rule(RuleType.number().max(60)) // 年龄字段必须是数字，并且不能大于60
//     age: number;
// }

// 创建DTO，前端向后端传送数据的模型。
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';
import { R } from '../common/base.error.util';

export class UserDTO {
    @ApiProperty({
        description: 'id',
    })
    @Rule(RuleType.allow(null))
    id?: number;
    @ApiProperty({
        description: '姓名',
    })
    // @Rule(RuleType.string().required().error(new Error('姓名不能为空'))) // 这个错误消息正常需要做多语言的，这里demo偷懒不做了
    // 封装异常公共方法
    @Rule(RuleType.string().required().error(R.validateError('姓名不能为空')))
    name: string;
    @ApiProperty({
        description: '年龄',
    })
    // @Rule(RuleType.number().required().error(new Error('年龄不能为空')))
    // 封装异常公共方法
    @Rule(RuleType.number().required().error(R.validateError('年龄不能为空')))
    age: number;
}


