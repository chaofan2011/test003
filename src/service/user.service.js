const connection = require('../app/database');


class UserService {
    async create(user) {
        const { name, password } = user;

        // return "yonghuchuangjianchengg"

        const sattement = `INSERT into user (name,password) values (?,?);`;

        const result = await connection.execute(sattement, [name, password]);

        return result;
    }

    async getUserByName(name) {
        console.log('getUserByNamegetUserByNamegetUserByNamegetUserByName');
        const statement = `SELECT * FROM user WHERE name = ?;`;
        const result = await connection.execute(statement, [name]);

        return result[0];
    }
}

module.exports = new UserService();