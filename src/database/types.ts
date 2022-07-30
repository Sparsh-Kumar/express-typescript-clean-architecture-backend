export type Todo = {
  _id: string;
  account: string;
  description: string;
  status: string;
};

export type Account = {
  _id: string;
  username: string;
  hashedPassword: string;
};
