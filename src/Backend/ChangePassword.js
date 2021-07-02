

 const ChangePassword = async(url) => {
    
 let message="";
 let retdata={};
 console.log(url)
    
        
         await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                
            })
            .then(res => 
                
                res.json())
            .then(json => {
             
                    if(json.error)
                    {
                        message=json.error
                    }
                    else{message=json.status}
                          
               
            })
            .catch(
            err => {
                
                
                message=err.message
                // setErr(err.message)
                
            
            })
            

// },[]); 



return {message};

}

export default ChangePassword ;