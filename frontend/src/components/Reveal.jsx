import { useEffect, useRef, useState } from "react";

const Reveal = ({
    children,
    direction = "up",
    delay = 0,
    duration = 700,
    className = "",
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Stop observing after the animation runs once
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const directionClasses = {
        up: isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12",

        down: isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-12",

        left: isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-12",

        right: isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12",

        fade: isVisible
            ? "opacity-100"
            : "opacity-0",
    };

    return (
        <div
            ref={ref}
            className={`${directionClasses[direction]} ${className}`}
            style={{
                transitionProperty: "opacity, transform",
                transitionDuration: `${duration}ms`,
                transitionTimingFunction:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;