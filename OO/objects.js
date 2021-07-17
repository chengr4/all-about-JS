// a object
var userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

userOne.login();
userOne.logout();

const testMehthods = {
  // object methods
  coolMethod() {
    console.log("i ate an apple");
  }, // commas!

  // (anonymous) function expression property
  oldSchool: function () {
    console.log("i ate nothing");
  },
};

console.log(testMehthods.oldSchool); // do not print anything
testMehthods.oldSchool(); // i ate nothing
