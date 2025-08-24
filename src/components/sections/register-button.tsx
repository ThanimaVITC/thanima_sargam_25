
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

interface RegisterButtonProps {
    showIcon: boolean;
}

const RegisterButton = ({ showIcon }: RegisterButtonProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClick = () => {
        window.open("https://eventhubcc.vit.ac.in/EventHub", "_blank", "noopener noreferrer");
    };

    if (!isMounted) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                size="lg"
                className={`rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-primary/20 backdrop-blur-lg border border-primary/30 hover:bg-primary/30 text-primary-foreground font-bold h-14 flex items-center justify-center ${
                    showIcon ? 'w-14' : 'w-40'
                }`}
                onClick={handleClick}
            >
                {showIcon ? (
                    <Ticket className="h-6 w-6" />
                ) : (
                    <span className="whitespace-nowrap">Register Now</span>
                )}
            </Button>
        </div>
    );
};

export default RegisterButton;
