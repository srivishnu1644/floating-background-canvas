
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function WelcomeVideo({ onComplete }: { onComplete: () => void }) {
    const [currentText, setCurrentText] = useState(0);
    
    const texts = [
        "WELCOME",
        "TO THE VIGORS CLUB",
        "EXPERIENCE YOUR FITNESS WORLD",
        "LIKE NEVER BEFORE",
        "BECAUSE",
        "WE DO IT IN",
        "THE VIGORS WAY"
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentText < texts.length - 1) {
                setCurrentText(currentText + 1);
            } else {
                onComplete();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentText, onComplete, texts.length]);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black dark:bg-black">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1 
                        key={currentText}
                        initial={{ 
                            opacity: 0, 
                            scale: 0.8, 
                            filter: "blur(8px)" 
                        }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            filter: "blur(0px)" 
                        }}
                        exit={{ 
                            opacity: 0, 
                            scale: 1.2, 
                            filter: "blur(8px)" 
                        }}
                        transition={{ 
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 dark:from-white dark:to-white/80"
                    >
                        {texts[currentText]}
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
}
