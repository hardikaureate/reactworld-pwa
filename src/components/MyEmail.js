import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const MyEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c99tbiq', 'template_uka7cpn', form.current, 'user_c84fL5wcNKMvdJy6gkH1c')
            .then((result) => {
                console.log(result.text);
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div id="wrapper">
                <section id="">
                    <div className="inner">
                        <section>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="fields"> <label>Name</label>
                                    <input className="animate__animated animate__fadeInUp" type="text" name="from_name" />
                                </div>
                                <div className="fields">
                                    <label>Email</label>
                                    <input className="animate__animated animate__fadeInUp" type="email" name="user_email" />
                                </div>
                                <div className="fields">
                                    <label>Message</label>
                                    <textarea className="animate__animated animate__fadeInUp" name="message" />
                                </div>
                                <input className="animate__zoomIn animate__animated" type="submit" value="Send" />
                            </form>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};
