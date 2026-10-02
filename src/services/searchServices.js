import * as httpRequest from "../utils/httpRequest";
import { searchMockUsers } from "./mockUsers";

export const search = async (q, type = "less") => {
  if (!process.env.REACT_APP_BASE_URL) {
    return searchMockUsers(q, type);
  }

  try {
    const res = await httpRequest.get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return searchMockUsers(q, type);
  }
};
