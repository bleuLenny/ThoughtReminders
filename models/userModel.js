const database = [
  {
    id: 1,
    name: "cindy",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "admin"
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user"
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "user"
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  findByGitHubID: (profile) => {
    let user = database.find((user) => user.githubID === profile.id);
    if(!profile){
      throw new Error(`Couldn't find user with githubID: ${profile.id}`);
    }
    if (user) {
      return user;
    }
    else{
      user = {
        id: database.length + 1,
        githubID: profile.id,
        name: profile["displayname"],
        email: `${profile["userName"]}@github.com`,
        password: profile["userName"]
      }
      database.push(user);
      return user;
    }
  }
};

module.exports = { database, userModel };
