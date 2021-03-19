class User {
  constructor(email, name) {
    this.email = email; // "this" is for all objects created
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this; // for method chaining

  }
  logout() {
    console.log(this.email, "just logged out");
    return this; // for method chaining

  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this; // for method chaining
  }
}

class Admin extends User {
  deleteUser(user){
      users = users.filter(u => {
          return u.email != user.email
      });
  }
}

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");

userOne.login();
userTwo.logout();
userOne.login().updateScore().logout();

// Static method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
