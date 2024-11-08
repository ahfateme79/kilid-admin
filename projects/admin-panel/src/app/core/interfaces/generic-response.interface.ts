export interface GenericDataResponse<T> {
  response: { [key: string]: T | T[] }  | any;
  links?: any;
  meta?: any;
  status?: number;
  message?:string
  errors?:any
}
