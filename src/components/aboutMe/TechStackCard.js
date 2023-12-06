import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {deepPurple} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from "@mui/material";
import {AutoAwesome, Download, Layers} from "@mui/icons-material";
import {htmlToImageDownloader} from "../../utils/DownloadUtils";


export default function TechStackCard() {

    return (
        <Card sx={{ maxWidth: 'auto', mt: 2 }} id="techStackCard">
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: deepPurple[500]}}>
                        <Layers />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="기술스택"
                subheader="Tech stack"
            />
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Backend</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="springbootBadge" src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/>
                        <img alt="springBadge" src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/>
                        <img alt="javaBadge" src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white"/>
                        <img alt="pythonBadge" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Frontend</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="reactBadge" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                        <img alt="javascriptBadge" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                        <img alt="jqueryBadge" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white"/>
                        <img alt="html5Badge" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Data</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="oracleBadge" src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"/>
                        <img alt="mysqlBadge" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Service</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="oracleBadge" src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
                        <img alt="mysqlBadge" src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>
                    </Stack>
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => {htmlToImageDownloader('techStackCard')}}>
                    <Download />
                </IconButton>
            </CardActions>
        </Card>
    );
}
