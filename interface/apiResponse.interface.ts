export interface IApiResponse<T> {
  ResponseCode?: number;
  ResponseMessage?: string;
  data?: T;
}

export interface IApiPaginateResponse<T> {
  ResponseCode?: string;
  ResponseMsg?: string;
  total?: number;
  data?: T;
}
