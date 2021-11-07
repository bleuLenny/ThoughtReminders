const userDatabase = [
    {
        id: 1,
        name: "Cindy Smith",
        email: "cindy@gmail.com",
        password: "cindy123",
    },
    {
        id: 2,
        name: "Alex Smith",
        email: "alex@gmail.com",
        password: "123",
    },
];

const userModel = {
    findOne: (email) => {
        const user = userDatabase.find((user) => user.email === email);
        if (user) {
            return user;
        }
        throw new Error(`Couldn't find user with email: ${email}`);
    },
    findById: (id) => {
        const user = userDatabase.find((user) => user.id === id);
        if (user) {
            return user;
        }
        throw new Error(`Couldn't find user with id: ${id}`);
    },
};

module.exports = { userDatabase, userModel };