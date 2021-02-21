import React from 'react';
import { Router } from '@reach/router';
import Card1 from "./Card";

const Converter = () => {

    return (
        <Router>
            <Card1 path="/:id" />
        </Router>
    )
};

export default Converter;
