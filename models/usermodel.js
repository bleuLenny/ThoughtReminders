const userDatabase = [
    {
        id: 1,
        name: "Cindy Smith",
        email: "cindy@gmail.com",
        password: "cindy123",
        githubID: "0000",
        role: "user",
    },
    {
        id: 3,
        name: "Armaan Dhanji",
        email: "armaan@gmail.com",
        password: "helloWorld!",
        githubID: "0000",
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
        let user = userDatabase.find((user) => user.githubID === profile.id)
        if (user) {
            return user;
        }
        console.log('Adding github user')
        userDatabase.push({ id: userDatabase.length, name: profile["displayName"], email: profile["email"], password: null, githubID: profile.id, role: 'user' })
        console.log('Added user.')
        user = userDatabase.find((user) => user.githubID === profile.id)
        if (user) {
            return user;
        }
        // throw new Error(`Couldn't find user with github id: ${id}`);
    },
};

module.exports = { userDatabase, userModel };
