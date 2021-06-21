
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
                console.log(json)
                retdata=json;
                if(json.status === 'error'){
                    
                    if(typeof json.msg === "object"){
                        console.log(JSON.stringify(json.msg))
                        console.log(4)
                        throw Error(JSON.stringify(json.msg));
                       
                    } else{
                        console.log(json.msg)
                        throw Error(json.msg);
                      
                    }
                   
                    
                } else if(json.status.toLowerCase() === 'ok'){
                    console.log(json.msg)
                    if(url.includes("login"))
                   { 
                    
                          console.log("nadeeem")
                          localStorage.setItem("loggedinuserid",json.user._id)
                          console.log(json.user.tokens[json.user.tokens.length-1].token)
                          localStorage.setItem("LoggedInUserTokenID",json.user.tokens[json.user.tokens.length-1].token)
                          document.cookie=json.user.tokens[json.user.tokens.length-1].token
                          
                          console.log(document.cookie,"cookie")
                        //   setCookie('TokenID', json.user.tokens[json.user.tokens.length-1].token, { path: '/' });
                        // console.log(cookies.TokenID,"Cooki");
                }

                else if(url.includes("user")){

                    retdata=json.user
                }
                    console.log('success')
                    throw Error(json.msg);

                } else{
                    
                    console.log(JSON.stringify(json))
                    throw Error(JSON.stringify(json));
                }
            })
            .catch(
            err => {
                
                console.log(err.message)
                console.log(1)
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