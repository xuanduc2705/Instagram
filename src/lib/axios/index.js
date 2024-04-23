import { clientApi } from "./clientApi";

export const getListUser = () => clientApi.get("/tshirt");
export const DeleteUser = (userId) => clientApi.delete(`/tshirt/${userId}`);
export const addUser = (param) => clientApi.post("/tshirt", param);
export const getListAccount = () => clientApi.get("/user/api/user");
export const getListBoxchat = () => clientApi.get("/boxchat/api/boxchat");
export const getListBoxchatMess = (boxchatid) =>
  clientApi.post("/boxchat/api/boxchat/mess", { boxchatid });
export const LoginApi = (email, password) =>
  clientApi.post("/user/login", { email, password });
export const getMessage = () => clientApi.get("/boxchat/api/boxchat/mess");
export const createBoxchat = (
  host,
  partner,
  isg,
  avatar1,
  avatar2,
  groupname
) =>
  clientApi.post("/boxchat/api/addboxchat", {
    host,
    partner,
    isg,
    avatar1,
    avatar2,
    groupname,
  });
export const evictMessage = (id) =>
  clientApi.post("/boxchat/api/boxchat/evictmess", { id });
export const getListMessage = () =>
  clientApi.get("/boxchat/api/boxchat/message");
export const getListPost = () => clientApi.get("/post/api/post/getpost");
export const addPost = (host, img, title) =>
  clientApi.post("/post/api/post/createpost", { host, img, title });
export const addComment = (account, content, postid) =>
  clientApi.post("/post/api/post/addcomment", { account, content, postid });
export const addReply = (account, content, reply) =>
  clientApi.post("/post/api/post/addreply", { account, content, reply });
export const getPostbyId = (id) =>
  clientApi.post("/post/api/post/postbyid", { id });
