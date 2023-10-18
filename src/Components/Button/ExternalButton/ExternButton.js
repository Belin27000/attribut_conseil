import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './externButton.scss'

const ExternButton = ({ text, goto }) => {
    let navigate = useNavigate();
    const RouteChange = () => {
        navigate('/comingSoon')
    }

    return (
        <button className='ExternButton'>
            <Link to='https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/49962155500030_BC4/49962155500030_BC4?contexteFormation=ACTIVITE_PROFESSIONNELLE' target='_blank' rel='noreferrer'>{text}</Link>
        </button>
    );
};

export default ExternButton;