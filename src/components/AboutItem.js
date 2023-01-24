import React from 'react'
import '../styles/AboutItem.css'

function AboutItem(props){

    const angle = props.number * (360 / props.allOptions);
    let linkElement, descriptionElement, iconElement;

    if (angle < 20 || angle > 361) {
        linkElement = ('about__link--top');
        descriptionElement = ('about__description--top');
        iconElement = ('about__icon-container--bottom');
    } else if (angle < 160) {
        linkElement = ('about__link--right');
        descriptionElement = ('about__description--right');
        iconElement = ('about__icon-container--left');
    } else if (angle < 200) {
        linkElement = ('about__link--bottom');
        descriptionElement = ('about__description--bottom');
        iconElement = ('about__icon-container--top');
    } else if (angle < 340) {
        linkElement = ('about__link--left');
        descriptionElement = ('about__description--left');
        iconElement = ('about__icon-container--right');
    }


    return(
        <li className="about__item" style={{transform: `rotate(${angle}deg)`}}>
              <a style={{transform: `rotate(${-angle}deg)`}} href="/" className={"about__link link".concat(" ", linkElement)}>
                <div className={"about__icon-container".concat(" ", iconElement)}>
                    <img className="about__icon" alt="icon" src={require('../images/'+props.image+'.png')}/>
                </div>
                <span className={"about__description".concat(" ", descriptionElement)}>{props.name}</span>
            </a>
        </li>
    )
}

export default AboutItem