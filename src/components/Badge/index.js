import React from 'react';

export default function Badge({ label, ...other }) {
    if (!label) {
        return null;
    }
    return <div {...other}>{label}</div>;
}
