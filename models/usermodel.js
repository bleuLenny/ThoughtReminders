const userDatabase = [
    {
        id: 1,
        name: "Cindy Smith",
        email: "cindy@gmail.com",
        password: "cindy123",
        role: "user",
    },
    {
        id: 2,
        name: "Armaan Dhanji",
        email: "armaan@gmail.com",
        password: "helloWorld!",
        role: "admin",
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
    findOrAddGithub: (profile) => {
        if (!profile) {
            throw new Error(`Couldn't find user with github id: ${id}`);
        };
        let user = userDatabase.find((user) => user.githubID === profile.id)
        if (user) {
            return user;
        }
        userDatabase.push({ id: userDatabase.length + 1, name: profile["displayName"], githubID: profile.id, role: 'user' }) //If the github user is not already in the db, they will be added and then returned.
        user = userDatabase.find((user) => user.githubID === profile.id)
        if (user) {
            console.log(user)
            return user;
        }
    },
};

module.exports = { userDatabase, userModel };
