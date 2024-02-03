import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Filters.module.css"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Filters({ filters, selectedIndex, setSelectedFilterIndex }) {

    console.log(filters, "filters")
    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue)
    };

    return (
        <div>
            <Tabs value={selectedIndex} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style: {
                    backgroundColor: "var(--color-primary)"
                }
            }}>
                {filters.map((ele, idx) => {
                    return <Tab label={ele.label} {...a11yProps(idx)} className={styles.tab} />
                })}

            </Tabs>
        </div >
    );
}