import { request } from "graphql-request";

const endpoint = "https://nutrisportcoach.herokuapp.com/graphql";

const api = (query, base = endpoint) => {
  return request(base, query);
};

export const getData = async (query, base) => {
  const response = await api(query, base);

  return response;
};
