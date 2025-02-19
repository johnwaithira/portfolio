import React from 'react'
import { my_contact } from '../../assets/data'
import './Contact.css'

const ContactComponent = () => {
  return (
    <div className='contact-div m-5 sm:m-7 md:m-10' >
      <div className="details">
        <div>
          <h2 className='text-4xl font-serif'>Get in touch</h2>
          <p className="py-6 w-full md:w-4/6 lg:w-3/6 sm:w-5/6">
            You can reach out to me on the following contact information 


          </p>
          <div>
            {
              my_contact.map((contact, index) => {
                return (
                  <div className='contact-component col-3' key={index}>
                    <img src={contact.contact_icon} alt="" />
                    <a href={contact.contact_value_link} target='_blank'>
                      <div>
                      <p> {contact.contact_value}</p>
                      </div>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="form">

      </div>
    </div>
  )
}

export default ContactComponent