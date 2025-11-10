'use client';

// yes can you do the missing pieces DropdownItem, DropdownLabel, and DropdownSeparator

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

// Context to share dropdown state between components
interface DropdownContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement | null>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

// Hook to use dropdown context
const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('Dropdown components must be used within a Dropdown');
    }
    return context;
};

// Main Dropdown wrapper component
interface DropdownProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ children, onOpenChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLElement>(null);

    const handleSetIsOpen = (open: boolean) => {
        setIsOpen(open);
        onOpenChange?.(open);
    };

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen: handleSetIsOpen, triggerRef }}>
            <div className="relative inline-block">
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

// Dropdown Trigger component
interface DropdownTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, asChild = false }) => {
    const { isOpen, setIsOpen, triggerRef } = useDropdownContext();

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // If asChild is true, clone the child and add our props
    if (asChild && React.isValidElement(children)) {
        const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }>;

        return React.cloneElement(child, {
            ref: triggerRef,
            onClick: (e: React.MouseEvent<HTMLElement>) => {
                handleClick(e);
                child.props.onClick?.(e);
            },
        });
    }

    // Otherwise wrap in a button
    return (
        <button
            ref={triggerRef as React.RefObject<HTMLButtonElement>}
            onClick={handleClick}
            className="inline-flex items-center justify-center"
            type="button"
        >
            {children}
        </button>
    );
};

// Dropdown Content component
interface DropdownContentProps {
    children: React.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
}

export const DropdownContent: React.FC<DropdownContentProps> = ({children, className = '', align = 'end'}) => {
    const { isOpen, setIsOpen, triggerRef } = useDropdownContext();
    const contentRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        // Add a small delay to prevent immediate closing
        const timeoutId = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen, triggerRef]);

    // Handle escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    const alignmentClasses = {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0'
    };

    return (
        <div
            ref={contentRef}
            className={`
        absolute top-full mt-2 z-50
        min-w-[12rem] 
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700
        rounded-lg shadow-lg
        py-1
        animate-in fade-in-0 zoom-in-95
        ${alignmentClasses[align]}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

// Dropdown Item component
interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    onSelect?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
                                                              children,
                                                              onSelect,
                                                              className = '',
                                                              ...props
                                                          }) => {
    const { setIsOpen } = useDropdownContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onSelect?.();     // optional callback
        setIsOpen(false); // close dropdown after selecting
    };

    return (
        <button
            onClick={handleClick}
            className={`
        w-full text-left px-4 py-2 text-sm 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors duration-100
        focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

// Dropdown Label component
interface DropdownLabelProps {
    children: React.ReactNode;
    className?: string;
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children, className = '' }) => (
    <div
        className={`
      px-4 py-2 text-xs font-semibold 
      text-gray-500 dark:text-gray-400 
      uppercase tracking-wide select-none
      ${className}
    `}
    >
        {children}
    </div>
);

// Dropdown Separator component
interface DropdownSeparatorProps {
    className?: string;
}

export const DropdownSeparator: React.FC<DropdownSeparatorProps> = ({ className = '' }) => (
    <div
        role="separator"
        className={`
      h-px my-1 bg-gray-200 dark:bg-gray-700 
      ${className}
    `}
    />
);


export default Dropdown;