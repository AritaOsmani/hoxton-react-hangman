import React from 'react';

export default function Title({ children, ...props }) {
    return <h1 {...props}>
        {children}
    </h1>
}
