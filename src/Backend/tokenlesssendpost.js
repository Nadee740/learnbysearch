

////////////////post rqst without any tokens///////////////////////
import { useCookies } from 'react-cookie';
 const Tokenlesssendpost = async(url, data) => {
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
                
                    if(url.includes("login"))
                   { 
                    
                         
                          localStorage.setItem("loggedinuserid",json.user._id)
                          
                          localStorage.setItem("LoggedInUserTokenID",json.user.tokens[json.user.tokens.length-1].token)
                          document.cookie=json.user.tokens[json.user.tokens.length-1].token
                          
                          
                }

                else if(url.includes("user")){

                    retdata=json.user
                }
                 
                    throw Error(json.msg);

                } else{
                    
                    
                    throw Error(JSON.stringify(json));
                }
            })
            .catch(
            err => {
                
                
                message=err.message
                // setErr(err.message)
                
            
            })
            

// },[]); 

if(url.includes("user")){
    return {retdata}
}
else{
return {message,retdata};
}
}

export default Tokenlesssendpost;