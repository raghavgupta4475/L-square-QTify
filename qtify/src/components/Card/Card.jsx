import React from 'react'
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";
import { Link } from 'react-router-dom';
const Card = ({ data, type }) => {

    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, songs, slug, follows, title } = data;
                return (
                    // <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                    <>
                        <Link to={`/album/${slug}`}></Link>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="album" loading='lazy' />
                                <Chip
                                    label={`${follows} follows`}
                                    size="small"
                                    className={styles.chip}
                                />
                                <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <p>
                                            {follows} Follows
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </>
                    // </Tooltip>
                )
            }
            case "song": {
                const { image, likes, title } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="" loading='lazy' />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>
                                        {likes} Likes
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default:
                return <></>
        }
    }

    return getCard(type);
}

export default Card