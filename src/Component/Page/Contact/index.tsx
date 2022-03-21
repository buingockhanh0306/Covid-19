import React from 'react';
import './style.css'

function Contact() {
    return (
        <div className="container">
            <div className="row contact">
                <div className="col contact-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio architecto eligendi placeat
                    doloremque! Quod earum aspernatur recusandae
                    cupiditate nemo inventore quos officiis, voluptatum autem eos, quam, debitis illum doloremque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas. Ratione labore eum quasi
                    odio eos a consectetur maxime placeat est, nisi tenetur itaque, facilis fugit, aperiam esse culpa voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae vitae facilis nobis at, quasi et!
                    Corrupti nisi officiis quam optio explicabo sit, quibusdam doloremque, debitis vero natus quidem doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore provident atque est optio ad
                    necessitatibus iure vitae molestias? Iste harum sapiente omnis quibusdam. Ipsam animi impedit enim expedita quia!
                </div>
                <div className="col">
                    <img className='contact-img' src="assets/images/about.jpg" alt="" />
                </div>
            </div>

            <div className="row contact">
                <div className="col-md-6">
                    <img className='contact-img' src="assets/images/about2.jpg" alt="" />
                </div>
                <div className="col contact-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio architecto eligendi placeat
                    doloremque! Quod earum aspernatur recusandae
                    cupiditate nemo inventore quos officiis, voluptatum autem eos, quam, debitis illum doloremque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas. Ratione labore eum quasi
                    odio eos a consectetur maxime placeat est, nisi tenetur itaque, facilis fugit, aperiam esse culpa voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae vitae facilis nobis at, quasi et!
                    Corrupti nisi officiis quam optio explicabo sit, quibusdam doloremque, debitis vero natus quidem doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore provident atque est optio ad
                    necessitatibus iure vitae molestias? Iste harum sapiente omnis quibusdam. Ipsam animi impedit enim expedita quia!
                </div>
            </div>

            <h2 className='about-heading'>CONTACT</h2>
            <div className="row">
                <div className="col-6 about-text">
                    <div className='contact-item'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>07th Floor, Golden Field Building, 24 Nguyen Co Thach Street, Hanoi, Vietnam </span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-phone"></i>
                        <span>Phone: +(84).981.415.813</span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <span>Email: khanhbn@reactplus.jp</span>
                    </div>

                    <div className='row'>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Name' />
                        </div>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Email' />
                        </div>
                    </div>

                    <input required className='message' type="text" placeholder='Message' />

                    <button type='submit' className='send'>SEND</button>
                </div>
                <div className="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.942817604326!2d105.7634631144075!3d21.034973892943217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b93c73ca9d%3A0x210784911132ebe!2zMjQgUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1645084273523!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default Contact;