<<<<<<< HEAD
export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
=======

export type TErrorSources = {
    path: string | number,
    message: string
  }[]
 export type TGenericErrorResponse = {
    statusCode:number,
    message:string,
    errorSources:TErrorSources
}
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
