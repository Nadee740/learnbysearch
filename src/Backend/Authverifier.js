
 
 const Authverifier = async(url) => {

 let message="a";
 let isLoggedIn=false;
 let Token=localStorage.getItem('LoggedInUserTokenID')
    
        
         await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${Token}`
                },
                
            })
            .then(res => res.json())
            .then(json => {
                if(json.error){
                    isLoggedIn=false
                    console.log(json.error)
                   
                    
                }  else{
                    isLoggedIn=true
                    console.log(json)
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


return {isLoggedIn};

}

export default Authverifier;