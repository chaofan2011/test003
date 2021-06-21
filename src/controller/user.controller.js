const service = require('../service/user.service');

class UserController {
    async create(ctx, next) {
        //获取用户传入信息

        const user = ctx.request.body;
        console.log('888888');
        //创建用户
        const result = await service.create(user);
        //返回结果
        ctx.body = result;
    }
}

module.exports = new UserController();