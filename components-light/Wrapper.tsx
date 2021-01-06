import React from 'react';

export const Wrapper: React.FC = ({ children }) => {
    return <div id="wrapper" className="fade-in">
        {children}
    </div>
}