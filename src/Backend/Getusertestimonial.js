
 
 const Getusertestimonial = async(url,data) => {
console.log(url,data)
    
    let message=""
    
       
           
            await fetch(url, {
                   method: 'GET',
                   body:data
                   
               })
               .then(res => res.json())
               .then(json => {
                   console.log(json)
                 
                  
               })
               .catch(
               err => {
                   
                  
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   
   return {message};
   
   }
   
   export default Getusertestimonial;