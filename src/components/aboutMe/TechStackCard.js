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
                <Stack spacing={2}>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Backend</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="springbootBadge" src="/images/techStacks/Spring Boot-6DB33F.svg"/>
                        <img alt="springBadge" src="/images/techStacks/Spring-6DB33F.svg"/>
                        <img alt="javaBadge" src="/images/techStacks/Java-007396.svg"/>
                        <img alt="pythonBadge" src="/images/techStacks/python-3776AB.svg"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Frontend</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="reactBadge" src="/images/techStacks/react-61DAFB.svg"/>
                        <img alt="javascriptBadge" src="/images/techStacks/javascript-F7DF1E.svg"/>
                        <img alt="jqueryBadge" src="/images/techStacks/jQuery-0769AD.svg"/>
                        <img alt="html5Badge" src="/images/techStacks/html5-E34F26.svg"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Data</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="oracleBadge" src="/images/techStacks/oracle-F80000.svg"/>
                        <img alt="mysqlBadge" src="/images/techStacks/mysql-4479A1.svg"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left"><AutoAwesome/>Service</Typography>
                    <Stack direction={{ sm: 'row' }} width={{ xs: '50%'}}  spacing={{xs: 2, sm: 1}}>
                        <img alt="awsBadge" src="/images/techStacks/amazonaws-232F3E.svg"/>
                        <img alt="linuxBadge" src="/images/techStacks/linux-FCC624.svg"/>
                    </Stack>
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
