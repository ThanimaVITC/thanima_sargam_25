
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

interface RegisterButtonProps {
    isHeroVisible: boolean;
}

const RegisterButton = ({ isHeroVisible }: RegisterButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const commonClasses = "rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-primary/20 backdrop-blur-lg border border-primary/30 hover:bg-primary/30 text-primary-foreground font-bold";

    const handleClick = () => {
        window.open("https://eventhubcc.vit.ac.in/EventHub", "_blank", "noopener noreferrer");
    };

    if (isHeroVisible) {
        return (
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
                <Button
                    size="lg"
                    className={`${commonClasses} text-lg px-8 py-6`}
                    onClick={handleClick}
                >
                    Register Now
                </Button>
            </div>
        );
    }

    return (
        <div 
            className="fixed bottom-8 right-8 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                size="icon"
                className={`${commonClasses} w-16 h-16`}
                onClick={handleClick}
            >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <Ticket className={`transition-all duration-300 ${isHovered ? 'translate-x-[-120%]' : 'translate-x-0'}`} />
                    <span className={`absolute transition-all duration-300 text-sm whitespace-nowrap ${isHovered ? 'translate-x-0' : 'translate-x-[120%]'}`}>
                       Register
                    </span>
                </div>
            </Button>
        </div>
    );
};

export default RegisterButton;
