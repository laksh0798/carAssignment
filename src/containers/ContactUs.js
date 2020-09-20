import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactcontainer">
                <section id="contact">

                    <h1 class="section-header">CONTACT</h1>

                    <div class="contact-wrapper">

                        <div class="form-horizontal" role="form">

                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" id="name" placeholder="NAME" name="name" />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" />
                                </div>
                            </div>

                            <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>

                            <button class="btn btn-primary send-button" id="submit">
                                <div class="button">
                                    <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                                </div>
                            </button>

                        </div>

                        <div class="direct-contact-container">

                            <ul class="contact-list">
                                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Seattle | WA</span></i></li>

                                <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

                                <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li>

                            </ul>

                            <hr />
                            <ul class="social-media-list">
                                <li>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <hr />

                            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                        </div>

                    </div>

                </section>


            </div>
        );
    }
}

export default ContactUs;