import React from 'react';

export default class Form extends React.Component {
    
    render() {
        return (

        <form className="contact__form form">
        <div className="form__inputs__container">
                <input className="form__item form__item--input" placeholder="Imię i nazwisko" type="text" name="text" required></input>
                <input className="form__item form__item--input" placeholder="Telefon" type="tel"  name="tel" required></input>
                <input className="form__item form__item--input" placeholder="E-mail" type="email"  name="email" required></input>
                <input className="form__item form__item--input" placeholder="Firma" type="text" required></input>
                <select className="form__item form__item--select" id="employees" required>
                    <option value="defaultValue" selected hidden>Ilość pracowników</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-250">101-250</option>
                    <option value="250-500">250-500</option>
                    <option value="500"> + 501</option>
                </select>
                <select className="form__item form__item--select" id="income" required>
                    <option value="defaultValue" selected hidden>Roczny dochód firmy</option>
                    <option value="50"> 0-50tys</option>
                    <option value="50-100">50-100tys</option>
                    <option value="101-550">101-550tys</option>
                    <option value="551-1000">551-1mln</option>
                    <option value="1000">+ 1mln</option>
                </select>                   
                <textarea className="form__item form__item--text"placeholder="Wiadomość" required></textarea>
        </div>
        <div className="form__checbox__container">
            <label>
                <input className="form__item form__item--checkbox" type="checkbox" required></input >
                Zapoznałem(-łam) się z <a className="form__link link" href="/">Polityką prywatności</a> oraz z <a className="form__link link" href="/">Zastrzeżeniami prawnymi</a>
            </label>
        </div>
        <button className="form__item form__item--button" onSubmit={this.handleSubmit} type="submit">Wyślij</button>
        </form>  

        )
    }

    handleSubmit = e => {
        e.preventDefault();
    }

}