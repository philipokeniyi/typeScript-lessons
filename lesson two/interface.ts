
interface User {
  readonly dbId: number;
  eamil: string;
  userId: string;
  googleId?: string;
//   startTrial: () => string;
    startTrial(): string;
    getCoupon(couponname: string, value: number): number;
}


interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const philip: Admin = {
  dbId: 22,
  eamil: "philip@example.com",
  userId: "philip123",
  startTrial: () => {
    return "Trial started";
  },
    getCoupon: (name: "philipspecial", off: 10) => {
    return 10;
  },
  githubToken: "ghp_1234567890",
    role: "admin",
};
