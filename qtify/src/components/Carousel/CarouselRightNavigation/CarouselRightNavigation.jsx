import React from 'react'
import styles from "./CarouselRightNavigation.module.css"
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from "../../../assets/right.svg";
import { useState, useEffect } from 'react';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setisEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setisEnd(swiper.isEnd)
        })
    }, []);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRightNavigation