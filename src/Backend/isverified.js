//////////////////////to check if mail is verified//////////////////////
import { useCookies } from 'react-cookie';
const Isverified = async(url, data) => {
   // const [cookies, setCookie] = useCookies(['user']);
let message="a";

let retdata={};
   
       
        await fetch(url, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(json => {
              
               retdata=json;
               if(json.status === 'error'){
                   
                   if(typeof json.msg === "object"){
                      
                       throw Error(JSON.stringify(json.msg));
                      
                   } else{
                      
                       throw Error(json.msg);
                     
                   }
                  
                   
               } else if(json.status.toLowerCase() === 'ok'){
                retdata=json.isVerified
                 throw Error(JSON.stringify(json));
               }
           })
           .catch(
           err => {
               
               
               message=err.isVerified
               // setErr(err.message)
               
           
           })
           

// },[]); 


return {message,retdata};

}

export default Isverified;