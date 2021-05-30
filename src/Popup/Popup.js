// import React, { Component } from 'react';
// import Modal from "react-awesome-modal"
// import {Link} from "react-router-dom"
// import "./Popup.css"
// export default class Examples extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : true
//         }
//     }

//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }

//     render() {
//         return (
//             <div className="popupscreen" >

//             <section className="popupscreen">
           
       
//                 <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
//                     <div className="popup">
//                         <h1>LEARN BY RESEARCH</h1>
//                         <p>PLEASE VERIFY YOUR EMAIL .YOUR ARE ONE STEP AHEAD OF CREATING YOUR ACCOUNT...</p>
//                         <Link to="/" onClick={() => this.closeModal()}>Close</Link>
//                     </div>
//                 </Modal>
//             </section>
// </div>
            
//         );
//     }
// }