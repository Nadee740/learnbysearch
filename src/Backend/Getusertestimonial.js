
 const Getusertestimonials = async(url,data) => {
console.log("hyy",data)
    let testimonials={};
    let message=""
    
       
           
            await fetch(url, {
                   method: 'GET',
                   headers: {
                       'Content-Type': 'application/json'
                       
                   },
                   body:data
                   
               })
               .then(res => res.json())
               .then(json => {
                   console.log(json,"HYYYYY")
                 testimonials=json.testimonials
                  
               })
               .catch(
               err => {
                   
                  
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   
   return {testimonials};
   
   }
   
   export default Getusertestimonials;