import React from 'react';

export default function Button({ content, ...props }) {
    return <button {...props}>{content}</button>
}
