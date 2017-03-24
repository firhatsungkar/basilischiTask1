const faker = require('faker');

module.exports = () => {
    var userList = []
    for (var index = 0; index < 5; index++) {
        userList.push({
            id: index+1,
            name: faker.name.findName(),
            email: faker.internet.email(),
            town: faker.address.city(),
            picture: faker.internet.avatar()
        });
    }

    return {users: userList};
}