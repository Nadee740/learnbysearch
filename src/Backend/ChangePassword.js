

 const ChangePassword = async(url) => {
    // const [cookies, setCookie] = useCookies(['user']);
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
                
                console.log(err.message)
                console.log(1)
                message=err.message
                // setErr(err.message)
                
            
            })
            

// },[]); 



return {message};

}

export default ChangePassword ;