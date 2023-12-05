import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ButtonMenuCard() {
    const navigate = useNavigate();
    const menuItems = [
        { label: 'about Me', path: '/info',  color: '#ec407a' },
        { label: '로또번호 추천', path: '/lotto', color: '#f06292' },
        // ... 추가 메뉴 아이템
    ];
    const handleButtonClick = (path) => {
        navigate(path);
    };
    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/images/cloudy.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    다른 유용한 기능들...
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction="row" sx={{flexWrap: 'wrap', gap: 1, justifyContent: 'left'}}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            onClick={() => handleButtonClick(item.path)}
                            sx={{backgroundColor: item.color}}
                            size="small"
                        >
                            {item.label}
                        </Button>
                    ))}
                </Stack>
            </CardActions>
        </Card>
    );
}