import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contactButton.scss'

const ContactButton = ({ text }) => {
    let navigate = useNavigate();
    const RouteChange = () => {
        navigate('/contact')
    }

    return (
        <button translate="no" className='ContactButton' onClick={RouteChange}>
            {

                text ? text : "Je contacte Attribut conseils"
            }
        </button>
    );
};

export default ContactButton;