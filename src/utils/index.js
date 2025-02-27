
export const users = [];

/* Features for the user
1. Streak - make a method that checks if the user pass the quiz and if it does add one point to the streak
2. 

*/

export class User {
  constructor(name, lastName, username, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.questions = [];
    this.answers = [];
    this.level = 0;
    this.xp = 0;
    this.lifetimeXP = 0;
    this.streak = 0;
    this.badges = [];
    this.topic = "";
    this.customTopics = []; // Changed from a single value to an array

    this.golangXp = 0;
    this.awsXp = 0;
    this.javascriptXp = 0;
    this.ciCdXp = 0;
    this.homeGardensXp = 0;
    this.coffeeXp = 0;
    this.fingerFoodXp = 0;
  }
}
