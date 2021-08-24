////////////////post rqst without any tokens///////////////////////
import { useCookies } from 'react-cookie';
 const Applyasguest = async(url, data) => {
    // const [cookies, setCookie] = useCookies(['user']);
 let message="";

 let id="";
    
        
         await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
                message=json.msg
             id=json.guest._id
                } 
                else{
                    
                    
                    throw Error(JSON.stringify(json));
                }
            })
            .catch(
            err => {
                
                
                message=err.message
                
                
            
            })
            

// },[]); 

return {message,id}
}

export default Applyasguest;