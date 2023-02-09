import React from 'react';

export type ToggleProps = {
    onChange: (e: React.RefObject<HTMLSpanElement>) => void;
    active: boolean;
    name: string;
};
