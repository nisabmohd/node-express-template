import { NextFunction, Request, Response } from "express";

class RequestInfo {
  url: string;
  params: object;
  query: object;
  body: object;
  headers: object;
  constructor(
    url: string,
    query: object,
    params: object,
    body: object,
    headers: object
  ) {
    this.url = url;
    this.body = body;
    this.query = query;
    this.params = params;
    this.headers = headers;
  }
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const requestInfo = new RequestInfo(
    req.originalUrl,
    req.query,
    req.params,
    req.body,
    req.headers
  );
  console.log(requestInfo);
  next();
};
