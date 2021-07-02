import {useState,useEffect} from "react"
 
 const SendPost = async(url, data) => {

 let message="a";
 let retdata={};
 let Token=localStorage.getItem('LoggedInUserTokenID')
        
         await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${Token}`
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(json => {
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
return {message};
}
}

export default SendPost;