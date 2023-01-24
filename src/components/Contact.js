import React from 'react';
import Form from './Form';
import '../styles/Contact.css'

export default class Contact extends React.Component {
    
    render() {
        return (
            <section className="contact">
                <div className="contact__text">
                    <h2 className="contact__text--title title">Skontaktuj się z nami</h2>
                    <p className="contact__text--description description">Zadzwoń <span className="contact__span">+48 535 015 835</span> lub wypełnij formularz</p>
                </div>
                <Form/>
            </section>
        )
    }

}