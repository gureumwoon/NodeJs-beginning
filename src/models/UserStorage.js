"use strict"

class UserStorage {
    static #users = {
        id: ["woony", "gureum", "young"],
        psword: ["1234", "1234", "5678"],
        names: ["채운", "민영", "혜정"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;