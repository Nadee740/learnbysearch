
 
 const GetCollegelogos = async(url) => {

    let data={};
    
    
       
           
            await fetch(url, {
                   method: 'GET',
                   headers: {
                       'Content-Type': 'application/json'
                       
                   },
                   
               })
               .then(res => res.json())
               .then(json => {
                
                 data=json
                  
               })
               .catch(
               err => {
                   
               console.log(err)
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   
   return {data};
   
   }
   
   export default GetCollegelogos;