////////////////post rqst without any tokens///////////////////////

 const Createtestemonials = async(url, data) => {
    // const [cookies, setCookie] = useCookies(['user']);
 let message="";

 let retdata={};
    
        
         await fetch(url, {
                method: 'POST',
                body: data
            })
            .then(res => res.json())
            .then(json => {
               
                
               if(json.status.toLowerCase() === 'ok'){
                   retdata=json;
                    

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