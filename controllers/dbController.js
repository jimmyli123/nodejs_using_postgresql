

// exports.getUsernames = async(req, res) => {
//     res.send("users will be logged here - wip");
// }

// exports.createUsernameGet = async(req, res) => {
//     res.render('index');
// }

// exports.createUsernamePost = async(req, res) => {
//     console.log(`Username to be saved is ${req.body.username}.`)
//     res.end();
// }

const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
