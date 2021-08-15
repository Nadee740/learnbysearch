////////////////////////fnction to check weather logged in or not and rtr user data/////////////
 
const ReferalCode = async(url,data) => {

    let message="a";
    let refercode="";
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
                       isLoggedIn=false
                      
                      
                       
                   }  else{
                       isLoggedIn=true
                       refercode=json.code
                         }
               })
               .catch(
               err => {
                   
                   
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   ////////////////////data rtns user dtaa/////////////////////
   
   return {isLoggedIn,refercode};
   
   }
   
   export default ReferalCode;