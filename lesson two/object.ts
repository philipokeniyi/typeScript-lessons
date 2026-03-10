// const User = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     isActive: true,
// }

// function createUser({name, email, isActive}: {name: string, email: string, isActive: boolean}){
//     return {
//         name,
//         email,
//         isActive
//     }
// }

// createUser({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     isActive: true
// })

// We can create a type alias for the user object to make our code cleaner and more reusable.

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true});



// We can also make some properties optional by using the `?` operator. This means that the property may or may not be present in the object.
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditDetails?: number;
};

let myUser: User = {
  _id: "12345",
  name: "John Doe",
  email: "john.doe@example.com",
  isActive: true,
};

type cardNumber = {
  cardNumber: string;
};

type cradDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cradDate &
  cradDate & {
    cvv: number;
  };

myUser.email = "john.new@example.com";

export {};
