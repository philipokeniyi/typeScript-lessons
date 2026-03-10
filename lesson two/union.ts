let score: number | string | boolean = 33;
score = "33";
score = true;
score = "24";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let philip: User | Admin = { name: "philip", id: 334 };
philip = { username: "hc", id: 334 };

function getDbId(id: number | string) {
  console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

export {};

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", " 2", "3"];
const data3: (string | number | boolean)[] = ["1", 2, "3", true];
