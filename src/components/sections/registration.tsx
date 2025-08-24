import { Button } from "@/components/ui/button";

const Registration = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-primary/20 backdrop-blur-lg border border-primary/30 hover:bg-primary/30 text-primary-foreground text-lg font-bold px-8 py-6"
            >
                <a href="#">Register Now</a>
            </Button>
        </div>
    );
};

export default Registration;
