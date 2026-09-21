import { cn } from '@/app/utils/cn';
import React from 'react';

const Paragraph = ({children, className}) => {
    return (
        <p className={cn('leading-relaxed text-slate text-[15px]', className)}>
            {children}
        </p>
    );
};

export default Paragraph;