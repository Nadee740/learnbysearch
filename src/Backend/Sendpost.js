import {useState,useEffect} from "react"
 
 const SendPost = async(url, data) => {

 let message="a";
    // const [erro,setErr]=useState("")
    // useEffect(()=>{
        const abortCont=new AbortController();
         await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(json => {
                if(json.status === 'error'){
                    
                    if(typeof json.msg === "object"){
                        console.log(JSON.stringify(json.msg))
                        console.log(4)
                        throw Error(JSON.stringify(json.msg));
                       
                    } else{
                        console.log(json.msg)
                        throw Error(json.msg);
                      
                    }
                   
                    
                } else if(json.status.toLowerCase() === 'ok'){
                    console.log(json.msg)
                    if(url.includes("login")||url.includes("edit-profile"))
                   { 
                    
                          console.log("nadeeem")
                      localStorage.setItem('userdata', JSON.stringify(json.user))
                     console.log(JSON.parse(localStorage.getItem('userdata')))
                     console.log(json.user,"resdata")
                }
                    console.log('success')
                    throw Error(json.msg);

                } else{
                    
                    console.log(JSON.stringify(json))
                    throw Error(JSON.stringify(json));
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
return {message};
}

export default SendPost;