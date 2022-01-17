
 
 const Researchpgms = async(url) => {

    let data={};
    let jsonda={}
    let message=""
    
       
           
            await fetch(url, {
                   method: 'GET',
                   headers: {
                       'Content-Type': 'application/json'
                       
                   },
                   
               })
               .then(res => res.json())
               .then(json => {
                   jsonda=json
               
                 data=json.data
                  
               })
               .catch(
               err => {
                   
                  
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   
   return {data,jsonda};
   
   }
   
   export default Researchpgms;