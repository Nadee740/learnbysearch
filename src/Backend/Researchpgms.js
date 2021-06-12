
 
 const Researchpgms = async(url) => {

    let data={};
    let message=""
    
       
           
            await fetch(url, {
                   method: 'GET',
                   headers: {
                       'Content-Type': 'application/json'
                       
                   },
                   
               })
               .then(res => res.json())
               .then(json => {
                 data=json.data
                  console.log(json.data)
                  console.log(data,"da")
               })
               .catch(
               err => {
                   
                   console.log(err.message)
                   console.log(1)
                   message=err.message
                   // setErr(err.message)
                   
               
               })
               
   
   // },[]); 
   
   
   return {data};
   
   }
   
   export default Researchpgms;