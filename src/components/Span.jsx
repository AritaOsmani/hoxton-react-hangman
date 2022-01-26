import React from 'react';

export default function Span({ children, ...props }) {
    return <span {...props}>{children}</span>
}
