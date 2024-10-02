import Landing from '../Explore/Landing'
import UserPersonas from './Userpersonas'
import Navbar from '../Navbar'
import Shader from '../Shader'
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import Prototype from './Prototype'

function Page2() {
    const comp = useRef(null);
    const blackScreenRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            gsap.set(contentRef.current, { opacity: 0 });

            t1.set(blackScreenRef.current, { backgroundColor: "black", zIndex: 1000 })
                .to(blackScreenRef.current, {
                    duration: 0.6,
                    opacity: 1
                })
                .to(contentRef.current, {
                    duration: 0.2,
                    opacity: 1,
                })
                .to(blackScreenRef.current, {
                    duration: 0.5,
                    opacity: 0,
                    zIndex: -1
                });
        }, comp);

        return () => ctx.revert();
    }, []);
    return (
        <div className="preloader" ref={comp}>
            <div ref={blackScreenRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', zIndex: 1000 }}></div>
            <div id="slider" ref={contentRef} style={{ backgroundColor: "transparent" }}>
                <Navbar />
                <Shader />
                <div style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
                    <Landing />
                    <UserPersonas />
                    {/* <div style={{ height: '1300px' }}>
                    <Prototype />
                </div> */}
                    {/* <TabsPage></TabsPage> */}
                </div>
            </div>
        </div>

    )
}

export default Page2
