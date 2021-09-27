////////////////post rqst without any tokens///////////////////////

 const Createtestemonials = async(url, data) => {
    // const [cookies, setCookie] = useCookies(['user']);
 let message="";

 let retdata={};
    
        
         await fetch(url, {
                method: 'POST',
                headers: {
                    
                },
                body: data
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
                   retdata=json;
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

return {message,retdata};

}

export default Createtestemonials;