
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

const RegisterButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const commonClasses = "rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-primary/20 backdrop-blur-lg border border-primary/30 hover:bg-primary/30 text-primary-foreground font-bold";

    const handleClick = () => {
        window.open("https://eventhubcc.vit.ac.in/EventHub", "_blank", "noopener noreferrer");
    };

    return (
        <div 
            className="fixed bottom-8 right-8 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                size="lg"
                className={`${commonClasses} h-16 transition-all duration-300 ease-in-out ${isHovered ? 'w-40' : 'w-16'}`}
                onClick={handleClick}
            >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                   <Ticket className={`absolute transition-all duration-300 ${isHovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`} />
                    <span className={`absolute transition-all duration-300 whitespace-nowrap ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                       Register Now
                    </span>
                </div>
            </Button>
        </div>
    );
};

export default RegisterButton;
