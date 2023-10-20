import React, { useState } from 'react';

interface Names {
    heads: string[];
}

function Headings({heads}: Names) {
    const [message, setMessage] = useState('Initial Message');

    function toggleOptions(val: string) {
        setMessage(val);
    };

    return (
        heads.map((head) => (
        <a key={head} href="#" className={`mx-1.5 sm:mx-6 hover:border-blue-500 hover:border-b-2 ${message === head ? 'border-b-2 border-blue-500' : ''}`} onClick={() => toggleOptions(head)}>{head}</a>
        ))
    );
}

export default Headings;