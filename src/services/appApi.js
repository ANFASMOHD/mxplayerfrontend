//api to upload viedos.

import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const uploadAllViedos = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/videos`, reqBody);
};

export const getAllViedos = async () => {
  return await commonApi("GET", `${serverUrl}/videos`, "");
};
