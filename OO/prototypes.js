// == constructor
function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
  this.online = false;
  console.log(this.email, 'has logged out');
};

// prototype inheritance
function Admin(...args){
  User.apply(this, args); // pass "this" (from admin) to User
}

Admin.prototype = Object.create(User.prototype);

// put a deleteUser property on Admin.property object an point at an anonymous function
Admin.prototype.deleteUser = function(u){
  users = users.filter(user => {
      return user.email != u.email;
  });
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];
