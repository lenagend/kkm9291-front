import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import {ArrowCircleDown, ArrowCircleUp} from "@mui/icons-material";

export default function FixedBottomNavigation() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };


    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1, maxWidth: 'sm', mx: 'auto' }} elevation={3}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction label="위로" icon={<ArrowCircleUp />} onClick={()=> handleScrollToTop()}/>
                <BottomNavigationAction label="아래로" icon={<ArrowCircleDown />} onClick={()=> handleScrollToBottom()}/>
            </BottomNavigation>
        </Paper>
    );
}
