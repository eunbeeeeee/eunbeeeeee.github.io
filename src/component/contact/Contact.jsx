import React,{ useRef } from 'react';
import me from "../../img/gg.jpg"
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();
  

    const myid = {
        SERVICE_ID : 'eunbeeGmail',
        TEMPLATE_ID: "template_0uqbosh",
        USER_ID : "k6CcaUAx-grNjk5Wf"
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
            .then((rs) => {
                console.log(rs);
                alert("전송되었습니다");
            })
            .catch((error) => {
                console.log(error);
                alert("전송에 실패했습니다.");
            });
    };
    return (
        <div>
            <section className='contact'id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h4>Contact With Me</h4>
                    </div>

                    <div className="content d-flex">
                        <div className="left">
                            <div className="box btn-shadow contact-img">
                                <div className="cont-img">
                                    <img src={me} alt="me" />
                                </div>
                                <div className="details">
                                    <h1>Thank You!</h1>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box btn-shadow">
                                <form ref={form} onSubmit={sendEmail} className='emailform'>
                                 <div className="contact">
                                 <div className='col-50'>
                                    <label>보내시는 분 성함</label>
                                    <input type="text" name="user_name" placeholder='이름'/>
                                 </div>
                                 <div className='col-50'>
                                    <label>보내시는 분 이메일</label>
                                    <input type="email" name="user_email" placeholder='이메일'/>
                                 </div>
                                 </div>
                                 <div>
                                    <textarea name="message" placeholder='하실말씀'></textarea>
                                 </div>
                                 <div className='text-center'>
                                    <button type='submit'> 이메일 전송</button>
                                 </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Contact;