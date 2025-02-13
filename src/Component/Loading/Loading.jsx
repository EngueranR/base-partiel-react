import React from 'react';

 const Loading = ({ message }) => {
    return (
        <div>
            {message ? message : 'Loading'}
        </div>
    );
};

export default Loading;
