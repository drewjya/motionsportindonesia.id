export type User = {
  name: string;
  email: string;
  userId: number;
  accountId: number;
};

export type Token = {
  access_token: string;
  refresh_token: string;
};
