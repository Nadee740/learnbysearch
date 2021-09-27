
 const Gettestimonials = async(url) => {

    let testimonials={};
    let message=""
    
       
           
            await fetch(url, {
                   method: 'GET',
                   headers: {
                       'Content-Type': 'application/json'
                       
                   },
                   
               })
               .then(res => res.json())
               .then(json => {
                   console.log("hyy")
                 testimonials=json.testimonials
                  
               })
               .catch(
               err => {
                   
                  
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   console.log(testimonials)
   return {testimonials};
   
   }
   
   export default Gettestimonials;