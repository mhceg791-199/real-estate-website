import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const DynamicPerspectiveHero = () => {
    const heroRef = useRef(null);
    const skewContainerRef = useRef(null);
    const contentRef = useRef(null);
    const supportLineRef = useRef(null);

    const slides = [
        {
            title: "Where Spaces",
            subtitle: " Become Statements.",
            description: "Creating destinations shaped by design, purpose, and long-term value.",
        },
        {
            title: "From Investment ",
            subtitle: "to Landmarks.",
            description: "Transforming properties into cultural and financial landmarks.",
        },
        {
            title: "Creating Value You ",
            subtitle: "Can Walk Into.",
            description: "Developing and enhancing real estate that inspires and performs.",
        },
    ];
    const [current, setCurrent] = useState(0);

    useLayoutEffect(() => {
        // حركات الظهور الأولى
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        gsap.set(skewContainerRef.current, { xPercent: 100, opacity: 0 });
        gsap.set(contentRef.current.children, { opacity: 0, y: 10 });
        gsap.set(supportLineRef.current, { scaleX: 0, transformOrigin: 'left center' });

        tl.to(skewContainerRef.current, { xPercent: 0, opacity: 1, duration: 1.2, delay: 0.3 })
          .to(supportLineRef.current, { scaleX: 1, duration: 0.7 }, "-=0.5")
          .to(contentRef.current.children, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=0.4");

        gsap.to(".bg-image", { scale: 1.05, duration: 25, ease: "none" });

        return () => {
            tl.kill();
            gsap.killTweensOf(".bg-image");
        };
    }, []);

    // Slider + Progress Bar
    useLayoutEffect(() => {
        const slideDuration = 6; 
        const interval = setInterval(() => {
            const next = (current + 1) % slides.length;
            const tl = gsap.timeline();

            // اختفاء النصوص الحالية
            tl.to(contentRef.current.children, { opacity: 0, y: -10, duration: 0.5, stagger: 0.1 })
              .call(() => setCurrent(next)) // تغيير النصوص
              .to(contentRef.current.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });

            // إعادة progress bar
            gsap.set(supportLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
            gsap.to(supportLineRef.current, { scaleX: 1, duration: slideDuration, ease: "linear" });

        }, slideDuration * 1000);

        // تشغيل progress bar لأول سلايد
        gsap.set(supportLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
        gsap.to(supportLineRef.current, { scaleX: 1, duration: slideDuration, ease: "linear" });

        return () => clearInterval(interval);
    }, [current]);

    const slide = slides[current];

    return (
        <section 
            ref={heroRef} 
            className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* الخلفية */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/dorchester2.webp"
                    alt="Massive Structural Project" 
                    className="bg-image w-full h-full object-cover opacity-60" 
                    style={{ transform: 'scale(1.0)' }} 
                />
            </div>

            {/* الحاوية المائلة */}
            <div className="relative z-20 w-11/12 max-w-6xl mx-auto">
                <div 
                    ref={skewContainerRef}
                    className="p-8 lg:p-12 text-white"
                    style={{ 
                        transform: 'skewY(-3deg)', 
                        backgroundColor: 'rgba(29, 30, 31, 0.9)', 
                        borderLeft: '4px solid #B8860B', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                >
                    <div style={{ transform: 'skewY(3deg)' }}> 
                        <div ref={contentRef} className="space-y-6">

                            <h1 className="text-2xl lg:text-7xl font-extrabold tracking-tight leading-tight text-mainGold">
                                {slide.title}
                                <span className="block text-white">{slide.subtitle}</span>
                            </h1>

                            {/* ✅ الخط الداعم يتحول إلى progress bar */}
                            <div ref={supportLineRef} className="h-0.5 bg-mainGold my-4"></div>

                            <p className="text-lg lg:text-xl font-light text-gray-300 max-w-4xl">
                                {slide.description}
                            </p>
                            
                            <Link
                                to="/who-we-are" 
                                className="inline-block mt-8 px-10 py-4 bg-mainGold text-gray-900 font-bold text-base 
                                           rounded-sm tracking-widest hover:bg-white transition-colors duration-300"
                            >
                                VIEW OUR EXPERTISE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DynamicPerspectiveHero;
