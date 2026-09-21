import { cn } from '@/app/utils/cn';
import React from 'react';

const Label = ({children, className}) => {
    return (
        <div className={cn('', className)}>
            {children}
        </div>
    );
};

export default Label;