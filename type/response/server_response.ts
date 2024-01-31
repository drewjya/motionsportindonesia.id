export type Meta = {
  limit: number;
  page: number;
  next_page: number;
  previous_page: number;
  count: number;
  total_page: number;
};

export type VResponse<T> = {
  code: number;
  messages: any;
  data?: T;
  meta?: Meta;
};

export type State<T> = {
  data?: T;
  loading: boolean;
  error?: any;
  meta?: Meta;
  message?: any;
};
