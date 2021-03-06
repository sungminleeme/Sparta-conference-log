import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
  //서버주소
  baseURL: "http://3.35.174.4/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `${getCookie("token")}`,
  },
});

export const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url 즉 예시로
  // getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  // // 게시물 불러오기
  // getPost: () => instance.get("/posts"),
  // // 게시물 작성하기
  // createPost: (contents) => instance.post("/posts", contents),
  // // 게시물 수정하기
  // editPost: (id, content) => instance.put(`/posts/${id}`, content),
  // // 게시물 삭제하기
  // delPost: (id) => instance.delete(`/posts/${id}`),

  // getPost: () => instance.get("posts"),
  // creatUser: (id, username, pwd, pwdcheck) =>
  //   instance.post("/signup", id, username, pwd, pwdcheck),
  // user

  signup: (id, username, pwd, pwdcheck) =>
    instance.post("/user/signup", {
      username: id,
      nickname: username,
      password: pwd,
    }),

  signin: (id, pwd) =>
    instance.post("/user/login", {
      username: id,
      password: pwd,
    }),
  유저확인: () => instance.get("/user"),

  회원아이디중복체크: (id, data) => instance.post("/user/email", id, data),
  닉네임중복체크: (username, data) =>
    instance.post("/user/nickname", username, data),

  // addPost: (userId) =>
  //   api.post("/conference", {
  //     title: title,
  //     date: insertDt,
  //     contents: content,
  //   }),

  // readmode
  getPost: () => instance.get("/conferenceDetail?conferenceId=1"),
  // create
  createPost: (content) => instance.post("/conference", content),
  delPost: (conferenceId) => instance.delete(`/conference/${conferenceId}`),
  // edit: (id, contents) => instance.put(`api/articles/${id}`, contents),
  // del: (id) => instance.delete(`api/articles/${id}`),
};
