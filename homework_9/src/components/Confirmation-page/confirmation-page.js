import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/button';
import checkMark from './checkmark.svg';
import './confirmation-page.css';

const ConfirmationPage = () => {
    let navigate = useNavigate();
    return (
        <Fragment>
            <div className="block-center">
                <div className="make-center">
                    <img className="img-checkmark" src={checkMark} alt="checkmark-pic" />
                    <h3>Thank you!</h3>
                    <p className="general-text confirm-text">Check your mailbox. There should be a confirmation letter.<br />
                    We’ll contact you soon to give you info about next steps</p>
                    <Button text={'Back to Home'} color='white' onClick={() => navigate("/home")} />
                </div>
            </div>
        </Fragment>
    );
};
export default ConfirmationPage;
