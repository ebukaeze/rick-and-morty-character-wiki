import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is the details page</h1>
        </div>
    )
}

export default CardDetails
