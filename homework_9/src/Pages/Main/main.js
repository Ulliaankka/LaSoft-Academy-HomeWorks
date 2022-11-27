import React from "react";
import Button from "../../Components/Button/button";
import './main.css';
import oldLetter from './old-let.svg';
import paris from './paris.svg';

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="block">
                    <div className="decription">
                        <h1>Desperate to learn drawing? We’ll teach you!</h1>
                        <span className="left-small-text">Our school has more than 20 years of experience in teaching people who always thought that they 
                        don’t have even a slightest hint of a talent. Some other descriptive stuff that I’m too lazy to make up. </span>
                        <h4>With us you will get:</h4>
                        <ul className="left-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
                            <li>Vestibulum commodo id amet non facilisis in.</li>
                            <li>Est eros, vestibulum cursus luctus luctus aenean molestie.</li> 
                            <li>Augue ultricies non tristique malesuada justo neque mi, pellentesque lacus.</li>
                        </ul>
                            <Button text={'Apply now'} castomClassName='btn-apply-second' />
                    </div>
                        <div className="img-block">
                            <img src={paris} alt="Photo of Paris" />
                        </div>
                </div>

                <div className="block reverse-block">
                    <div className="img-block">
                        <img src={oldLetter} alt="Photo of Letter" />
                    </div>
                    <div className="decription">
                        <h2>Interested but currently have other plans?</h2>
                        <p>Subscribe to our newsletter to stay tuned and get hottest updates and deals</p>
                        <Button text = {'Subscribe'} castomClassName='btn-subscribe'/>
                    </div>      
                </div>
            </div>
        </main>
    );
};

export default Main;