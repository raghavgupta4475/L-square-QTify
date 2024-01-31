import React from 'react'
import Hero from '../../components/Hero/Hero'
import { useOutletContext } from 'react-router-dom'
import styles from "./HomePage.module.css";
import Section from '../../components/Section/Section';

const HomePage = () => {

    const { data } = useOutletContext();
    const { topAlbums, newAlbums, songs } = data;
    return (
        <>
            <Hero />
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
            </div>
        </>
    )
}

export default HomePage