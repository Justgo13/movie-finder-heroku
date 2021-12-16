import React from 'react';
import {useNavigate} from "react-router-dom";

import { useHttpHook } from '../../shared/hooks/http-hook';
import Button from '../../shared/Button';

import "bootstrap/dist/css/bootstrap.css"
import "../../Search/styles/SearchStyles.css"

const NoMovies = () => {
    const navigate = useNavigate();
    const { clearError } = useHttpHook();

    const backToSearchHandler = () => {
        navigate("/movie-search");
        clearError();
    }
    return (
        <div className='title container'>
            <h1 className="display-1">No movies found</h1>
            <Button className="btn btn-primary toggle__button" onClick={backToSearchHandler}>Back to Search</Button>
        </div>
    );
}

export default NoMovies;
