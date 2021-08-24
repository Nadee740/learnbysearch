////////////////post rqst without any tokens///////////////////////
import { useCookies } from "react-cookie";
const Applyforwebinarasguest = async (url, data) => {
  // const [cookies, setCookie] = useCookies(['user']);
  let message = "";

 

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.status === "error") {
        if (typeof json.msg === "object") {
          throw Error(JSON.stringify(json.msg));
        } else {
          throw Error(json.msg);
        }
      } else if (json.status.toLowerCase() === "ok") {
        message = json.msg;
      } else {
        throw Error(JSON.stringify(json));
      }
    })
    .catch((err) => {
      message = err.message;
    });

  // },[]);

  return { message };
};
export default Applyforwebinarasguest;
