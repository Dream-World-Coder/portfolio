import { useEffect, useRef } from "react";

const ThanksSection = () => {
    const hiddenRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        // Observe the hidden element if it exists
        if (hiddenRef.current) {
            observer.observe(hiddenRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (hiddenRef.current) {
                observer.unobserve(hiddenRef.current);
            }
        };
    }, []); // Empty dependency array since we only want to run this once,

    return (
        <section id="s5-thanks" className="sec5">
            <div className="" ref={hiddenRef}>
                <h1>Thanks For Visiting</h1>
            </div>
            <div>
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon='{"token": "f05e25fc21414732bf14800935663c6d"}'
                ></script>
            </div>
        </section>
    );
};

export default ThanksSection;
