
const Logout = async(url) => {
    let message="a";
 let LoggedOut=false;
 let Token=localStorage.getItem('LoggedInUserTokenID')
    
        
         await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${Token}`
                },
                
            })
            .then(res => res.json())
            .then(json => {
                if(json.error){
                    LoggedOut=false
                    console.log(json.error)
                   
                    
                }  else{
                    LoggedOut=true
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


return {LoggedOut};
    
}
 
export default Logout;