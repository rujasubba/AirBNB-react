import React, {useState } from "react"
import AppContextProvider from "../context";
import * as Yup from "yup"
import "../styles/contact.css"

import { Icons } from '../assets/index';
import { useFormik } from "formik";

function FormSection() {

   const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
        fullName: '',
        email: '',
        subject:'',
        message:''
    },

    validationSchema: Yup.object({
        fullName: Yup.string(). required('This field is required')
    }),
    onSubmit: (values) => {
        console.log(values);
    }
   })
    return(
        <React.Fragment>
            <div className="container">
                     <h2>Your details</h2>
                 <div className="info-lower">
                     {/* <div className="info-items">
                         <h2>Choose how to pay</h2>
                         <div class="pay-options">
                              
                              <button>Pay $7,625.54 AUD now</button>
                            <button>Pay Part now, Pay part later</button>
                          </div>
                         

                     </div> */}
            
                      <div className="form">

                        <form id="contactForm" onSubmit={(e) =>{
                            e.preventDefault();
                            formik.submitForm();

                        }}
                        >
                              <label>Your name</label>
                              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange} 
                             />
                             {formik.touched.fullName && formik.errors.fullName ? (
                                <span style={{
                                    fontSize:'12px', color:'red'
                                }}>{formik.errors.fullName}</span>
                             ) :null}


                              <label>Email address</label>
                              <input type="email" id="email" name="email" placeholder="enter a valid email address" 
                                value={formik.values.email}
                                onChange={formik.handleChange}/>
                              {formik.touched.email && formik.errors.email ? (
                                <span style={{
                                    fontSize:'12px', color:'red'
                                }}>{formik.errors.email}</span>
                             ) :null}

                              <label>Subject</label>
                              <input type="text" id="subject" name="subject" placeholder="This is optional" 
                                value={formik.values.subject}
                                onChange={formik.handleChange}/>

                              <label>Message</label>
                              <textarea id="message" name="message" placeholder="Ask anything" 
                                value={formik.values.message}
                                onChange={formik.handleChange}></textarea>

                              <button type="submit">Submit</button>

                        </form>
                       
                     </div>
                </div>
            </div>

         </React.Fragment>
         
    )
}

export default FormSection;