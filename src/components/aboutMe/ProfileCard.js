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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {CalendarToday, Download, Email, Phone, School, Work} from "@mui/icons-material";
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

export default function ProfileCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }} id="profileCard">
            <CardHeader
                avatar={
                    <Avatar alt="김광민" src="/images/kkm.jpg"/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="김광민"
                subheader="풀스택 개발자"
            />
            <CardContent>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={0.5} >
                        <CalendarToday/> <Typography variant="body1" display="block" style={{fontSize: '1rem'}} gutterBottom>생년월일: 1992년 7월 13일</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} >
                        <Phone /> <Typography variant="body1" display="block" style={{fontSize: '1rem'}} gutterBottom>연락처: 010-7159-2578</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} >
                        <Email /> <Typography variant="body1" display="block" style={{fontSize: '1rem'}} gutterBottom>이메일: lenagend@naver.com</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} >
                        <School /> <Typography variant="body1" display="block" style={{fontSize: '1rem'}} gutterBottom>전공: 컴퓨터공학(학사)</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} >
                        <Work />
                        <Typography variant="body1" display="block" style={{fontSize: '1rem'}} gutterBottom>경력</Typography>
                    </Stack>
                    <TableContainer component={Paper} >
                        <Table  size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>회사명</TableCell>
                                    <TableCell>기간</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>나라원(아사달)</TableCell>
                                    <TableCell>2021.08~</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>베리타스미디어</TableCell>
                                    <TableCell>2020.01~2021.01</TableCell>
                                </TableRow>
                            </TableBody>
                         </Table>
                    </TableContainer>
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
