import Section from '../Section/Section'
import './Contact.css'
import { MdPhoneForwarded,MdOutgoingMail } from 'react-icons/md';

const Contact = () => {
    const info = 'my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'
  return (
    <div className='contact' id='contact'>
        <div className='container'>
        <Section about={'Get In Touch'} info={info}/>
        <div className='contact-center row justify-content-center align-items-center'>
            <div className='col-md-12 col-lg-6 row gap-5'>
                <div className='contact-mobile col-12'>
                    <label>Phone :</label>
                    <a href='tel:+2012-1028-4098'><MdPhoneForwarded className='phone'/></a>
                </div>
                <div className='contact-mobile col-12'>
                    <label>Gmail :</label>
                    <a href='mailto:houdahamdy12@gmail.com'><MdOutgoingMail className='gmail'/></a>
                </div>
            </div>
            <div className='col-md-12 col-lg-6'>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputName"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputMassage" class="form-label">Massage</label>
                        <textarea class="form-control" id="exampleInputMassage"/>
                    </div>
                    <button type="submit" class="btn ">Submit</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact