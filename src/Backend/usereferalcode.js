////////////////////////fnction to check weather logged in or not and rtr user data/////////////
 
const UserReferalCode = async(url,data) => {

    let message="a";
    let error=false
    let isLoggedIn=false;
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
   
                   
                   if(json.error){
                       error=true
                      
                      
                       
                   }  else{
                     error=false
                         }
               })
               .catch(
               err => {
                   
                   
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   ////////////////////data rtns user dtaa/////////////////////
   
   return {error};
   
   }
   
   export default UserReferalCode;