import { clientApi } from "./clientApi";

export const getListUser = () => clientApi.get("/tshirt");
export const DeleteUser = (userId) => clientApi.delete(`/tshirt/${userId}`);
export const addUser = (param) => clientApi.post("/tshirt", param);
export const getListAccount = () => clientApi.get("/api/user");
export const getListBoxchat = () => clientApi.get("/api/boxchat");
export const getListBoxchatMess = (boxchatid) =>
  clientApi.post("/api/boxchat/mess", { boxchatid });
export const LoginApi = (email, password) =>
  clientApi.post("/login", { email, password });
export const getMessage = () => clientApi.get("/api/mess");
export const createBoxchat = (
  host,
  partner,
  isg,
  avatar1,
  avatar2,
  groupname
) =>
  clientApi.post("/boxchat", {
    host,
    partner,
    isg,
    avatar1,
    avatar2,
    groupname,
  });
