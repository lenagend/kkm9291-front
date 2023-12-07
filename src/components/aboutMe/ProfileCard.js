import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {CalendarToday, Download, Email, Face6, Phone, School, Work} from "@mui/icons-material";
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
        <Card sx={{ maxWidth: 'auto', mt: 2 }} id="profileCard">
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
                                    <TableCell>업무</TableCell>
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
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={0.5} >
                            <Face6/>
                            <Typography variant="body1" display="block" sx={{fontSize: '1rem', textAlign: 'left'}} gutterBottom>
                                안녕하세요! 웹 개발자 김광민입니다.
                                <br/>
                                <br/>
                                작가가 만화를 그리고, 소설을 쓰듯이, 머릿속에 떠오른 것을 브라우져안에 표현할 수 있는 것에 매력을 느껴 개발자가 되었습니다.
                                <br/>
                                <br/>
                                신기술로 더욱 생산적인 코드를 작성하는 것을 선호하며, 원하는 결과를 낼 때까지 포기하지 않는 열정은 누구보다 자신 있습니다.
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Collapse>
        </Card>
    );
}
