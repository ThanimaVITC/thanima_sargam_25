
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

interface RegisterButtonProps {
    showIcon: boolean;
}

const RegisterButton = ({ showIcon }: RegisterButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClick = () => {
        window.open("https://eventhubcc.vit.ac.in/EventHub", "_blank", "noopener noreferrer");
    };

    if (!isMounted) return null;

    const shouldShowText = !showIcon || isHovered;

    return (
        <div 
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                size="lg"
                className={`rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-primary/20 backdrop-blur-lg border border-primary/30 hover:bg-primary/30 text-primary-foreground font-bold h-14 ${shouldShowText ? 'w-40' : 'w-14'}`}
                onClick={handleClick}
            >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                   <Ticket className={`absolute transition-all duration-300 ${shouldShowText ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                    <span className={`absolute transition-all duration-300 whitespace-nowrap ${shouldShowText ? 'opacity-100' : 'opacity-0'}`}>
                       Register Now
                    </span>
                </div>
            </Button>
        </div>
    );
};

export default RegisterButton;
