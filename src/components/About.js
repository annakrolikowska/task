import React from 'react'
import Gear from './Gear'
import '../styles/About.css'

export default class Form extends React.Component {
    
    render() {
        return (
            <section className="about">
                <h2 className="about__title title">Obszary naszych kompetencji</h2>
                <p className="about__paragraph description">Pomagamy uczyć się na błędach innych. Wspieramy i rekomendujemy wartościowe rozwiązania biznesowe.</p>
                <div className="about__gear-container">
                    <div className="about__container">
                        <h3 className="about__text">Poznaj nasze kompetencje</h3>
                    </div>
                    <h3 className="about__text--mobile">Poznaj nasze kompetencje</h3>
                    <Gear/>
                </div>
            </section>
        )
    }
}