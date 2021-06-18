import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SendPost from '../Backend/Sendpost';

function ApplicationForm() {
  
    const[q1,setq1]=useState("");
    const[q2,setq2]=useState("");
    const[q3,setq3]=useState("");

    useEffect(() => {
        
      

      }, []);

  const submitApplictaionform=async()=>{
    const data={q1,q2,q3};

    const { message: messagee } = await SendPost(
        `${window.name}application-form`,
        data
      );

  }

    return (
        <div>
            <h2>hyy</h2>
        </div>
    )
}

export default ApplicationForm;
