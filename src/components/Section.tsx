import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react'


interface ISection { title: string; description: string; image: string; index: number; }

const Section = ({ title, description, image, index }: ISection) => {

    const { ref, inView } = useInView();
    const anim = useAnimation();

    // fix this
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    useEffect(() => {
        inView ? anim.start({ x: 0, opacity: 1, scale: 1, transition: { type: "tween", duration: 0.6, delay: 0.1 } }) : anim.start({ x: index % 2 == 0 ? '-100vw' : '100vw', opacity: 0, scale: 0 })
        console.warn(index, inView)
    }, [inView])

    return (
        <motion.div className='section' ref={ref}>
            <motion.div className='wrapper' animate={anim} style={windowSize[0] > 1000 ? index % 2 == 0 ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' } : {}}>
                <motion.div className='textWrapper'>
                    <motion.h2>{title}</motion.h2>
                    <motion.p className='bodytext justified'>{description}</motion.p>
                </motion.div>
                <motion.img src={image} />
            </motion.div>

        </motion.div>
    )
}

export default Section