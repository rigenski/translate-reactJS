import React, { useState } from 'react';

const Translate = ({ textID, textENG, textCL}) => {
        const [bahasa, setBahasa] = useState('Kosong');
    return (
        <>
        <p>{bahasa}</p>
        <button className="btn btn-primary" onClick={() => setBahasa('Bahasa Indonesia')}>{textID}</button>
        <button className="btn btn-success" onClick={() => setBahasa('English Language')}>{textENG}</button>
    <button className="btn btn-secondary" onClick={() => setBahasa('Kosong')}>{textCL}</button>
        </>
    )    
};

export default Translate;