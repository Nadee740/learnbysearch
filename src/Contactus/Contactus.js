
import "./Contactus.css"
const ContactUs = () => {
    return ( 
<>

       
       <section className="contact-us">
   <div className="container">
       <div className="contactus-content">
           <div className="contactus-image">
               <figure>
                   <img src="../images/login.png" alt="Login pic"></img>
               </figure>
 
           </div>
           <div className="contact-usheadh">
               <h2 className="Contact title">Contact Us</h2>
               <p>To know more about us or collaborate with us please feel to reach us through the below form, we try to respond to all messages within 2 working days.</p>
               <br />
               <p>Learn By Research | +91-7972251272

</p>
           </div>
       </div>
   </div>

       </section>
<section className="contactformpart">
<div className="contactheading">
    <h2>Contact Form</h2>
</div>
<div className="contactform">
<div className="formclass">

<form id="contactform">
<input type="text" placeholder="name"/>
<input type="text" placeholder="name"/>
<input type="text" placeholder="name"/>
<input type="text" placeholder="name"/>
<br />
<div className="textarea">
<textarea name="proble" id="proble"  rows="15"></textarea>
</div>



</form>

</div>

</div>

</section> 

       
</>

     );
}
 
export default ContactUs;