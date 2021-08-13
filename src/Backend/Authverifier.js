////////////////////////fnction to check weather logged in or not and rtr user data/////////////
 
 const Authverifier = async(url) => {

 let message="a";
 let data={}
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
                   
                   
                    
                }  else{
                    isLoggedIn=true
                   
                    data=json;
                    
                    
                }
            })
            .catch(
            err => {
                
                
                message=err.message
                // setErr(err.message)
                
            
            })
            

// },[]); 
////////////////////data rtns user dtaa/////////////////////

return {isLoggedIn,data};

}

export default Authverifier;