import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalEl = document.getElementById('modal');

const Portal = ({ children }) => {
    const [el, setEl] = useState(document.createElement('div'));

    useEffect(() => {
        modalEl.appendChild(el);

        return () => modalEl.removeChild(el);
    }, []);

    return createPortal(children, el);
}

export default Portal;