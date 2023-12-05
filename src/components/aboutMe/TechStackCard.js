import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {deepPurple, red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Box,
    ListItem, ListItemAvatar, ListItemText,
    Paper,
    Stack, SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {CalendarToday, Download, Email, Layers, List, Phone, School, Work} from "@mui/icons-material";
import {htmlToImageDownloader} from "../../utils/DownloadUtils";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function TechStackCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }} id="profileCard">
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
                    <Typography variant="h5" textAlign="left">Backend</Typography>
                    <Stack direction="row" spacing={1}>
                        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=Spring%20Boot&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=OpenJDK&logoColor=white"/>
                        <img src="https://img.shields.io/badge/python-3776AB?style=flat&logo=python&logoColor=white"/>
                    </Stack>
                    <Typography variant="h5" textAlign="left">Frontend</Typography>
                    <Stack direction="row" spacing={1}>
                        <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black"/>
                        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
                    </Stack>
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => {htmlToImageDownloader('profileCard')}}>
                    <Download />
                </IconButton>
                <Stack direction="row" sx={{marginLeft : 'auto'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Typography align="justify" variant="body2" sx={{marginLeft : 'auto'}} >더보기</Typography>
                    </Box>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Stack>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>성격:</Typography>
                    <Typography paragraph>
                       블라블라
                    </Typography>
                    <Typography paragraph>
                        블라블라블라~
                    </Typography>
                    <Typography paragraph>
                        이러저러해서
                    </Typography>
                    <Typography>
                        마무리
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
