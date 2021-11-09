const userDatabase = [
    {
        id: 1,
        name: "Cindy Smith",
        profile_pic:"",
        email: "cindy@gmail.com",
        password: "cindy123",
        role: "user",
    },
    {
        id: 2,
        name: "Armaan Dhanji",
        profile_pic:"",
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
            throw new Error(`Argument sent is ${profile}`);
        };
        let user = userDatabase.find((user) => user.githubID === profile.id)
        if (user) {
            return user;
        }
        user = { id: userDatabase.length + 1, name: profile["displayName"], githubID: profile.id, role: 'user', profile_pic: String(profile.photos[0].value)}
        userDatabase.push(user) //If the github user is not already in the db, they will be added and then returned.
        return user
    },
};

module.exports = { userDatabase, userModel };
