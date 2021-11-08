const database = [
  {
    id: 1,
    githubID: "33076940",
    name: "cindy",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
  },
  {
    id: 2,
    githubID: "0",
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
  },
  {
    id: 3,
    githubID: "2",
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
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
  findByGitHubID: (githubID) => {
    const user = database.find((user) => user.githubID === githubID);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with githubID: ${githubID}`);
  }
};

module.exports = { database, userModel };
