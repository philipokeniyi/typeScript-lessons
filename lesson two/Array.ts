// Arrays
const superHeros: string[] = ["Superman", "Batman"];
const heroPower: number[] = [1, 2, 3];

// We can also use the Array generic type to define an array of a specific type.
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [
  [0.1, 0.2, 0.3],
  [0.4, 0.5, 0.6],
  [0.7, 0.8, 0.9],
];

superHeros.push("Spiderman");
heroPower.push(4);
allUsers.push({ name: "", isActive: true });

export {};