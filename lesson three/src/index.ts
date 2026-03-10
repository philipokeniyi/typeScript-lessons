// console.log("Hello, TypeScript!");

class User {
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const philip = new User("philip@example.com", "Philip");
