// function with return type
function addTwo(num: number) {
  return num + 4;
}

// function with no return type
function getUpper(val: string) {
  return val.toUpperCase();
}
// function declaration
function signUpUser(name: string, email: string, isPaid: boolean) {}

// function expression
let loginUser = (name: string, email: string, isPaid: boolean) => {};

addTwo(5);
getUpper("hello");
signUpUser("Philip", "philip@example.com", true);
loginUser("Philip", "philip@example.com", true);

export {};

// function with return type
const getHello = (s: string): string => {
  return "";
};

// array
const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});


// void type
function consoleError(errmsg: string): void {
  console.log(errmsg);
}


function handleError(errmsg: string): never {
  throw new Error(errmsg);
}



export {};