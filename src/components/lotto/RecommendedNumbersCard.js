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
import { red} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, CircularProgress, Divider, Fab, Stack} from "@mui/material";
import '../../css/lotto/common.css'
import {AutoFixHighTwoTone, Download} from "@mui/icons-material";
import LottoNumber from "./LottoNumber";
import {useEffect, useState} from "react";
import {useFetchPaginatedData} from "../../hooks/useFetchPaginatedData";
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

export default function RecommendedNumbersCard() {
    const [expanded, setExpanded] = React.useState(false);
    const apiUrl = process.env.REACT_APP_API_URL ?  process.env.REACT_APP_API_URL : "http://127.0.0.1:8080";
    const [currentPage, setCurrentPage] = useState(0);
    const { data: recommendedNumbersData, loading } = useFetchPaginatedData(`${apiUrl}/api/lotto/recommend`, currentPage, 30, "createdAt,desc");
    const [latestRecommend, setLatestRecommend] = useState(null);
    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
    const [displayedNumbers, setDisplayedNumbers] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleButtonClick = () => {
        if (currentNumberIndex < recommendedNumbersData.content.length) {
            addNextDisplayedNumbers();
        } else {
            // 인덱스 초기화 및 새로운 목록 요청
            resetIndexAndFetchNewData();
        }
    };

    const addNextDisplayedNumbers = () => {
        setDisplayedNumbers([...displayedNumbers, recommendedNumbersData.content[currentNumberIndex]]);
        setCurrentNumberIndex(currentNumberIndex + 1);
    };

    const resetIndexAndFetchNewData = () => {
        if (!recommendedNumbersData.last) { // 마지막 페이지가 아니라면
            setCurrentPage(prevPage => prevPage + 1); // 다음 페이지로 이동
            setCurrentNumberIndex(0); // 인덱스 초기화
        } else {
            // 더 이상 불러올 데이터가 없는 경우의 처리
            handleNoMoreData();
        }
    };

    const handleNoMoreData = () => {
        console.log("더 이상 로드할 추천 번호가 없습니다.");
    };

    useEffect(() => {
        if (recommendedNumbersData && recommendedNumbersData.content && recommendedNumbersData.content.length > 0) {
            const firstRecommend = recommendedNumbersData.content[0];
            setLatestRecommend(prevLatestRecommend => prevLatestRecommend || firstRecommend);
            addNextDisplayedNumbers();
        }
    }, [recommendedNumbersData]);

    if(loading || !latestRecommend){
        return (
            <Card sx={{ maxWidth: 'auto', m: 2 }}>
                <CircularProgress />
            </Card>
        );
    }

    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }} id="recommendedNumbersCard">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500], fontSize: 14 }} aria-label="recipe">
                       Lotto
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="로또 번호 추천"
                subheader={`ex) ${latestRecommend.reason}`}
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                        <LottoNumber number={latestRecommend.number1} />
                        <LottoNumber number={latestRecommend.number2} />
                        <LottoNumber number={latestRecommend.number3} />
                        <LottoNumber number={latestRecommend.number4} />
                        <LottoNumber number={latestRecommend.number5} />
                        <LottoNumber number={latestRecommend.number6} />
                    </Stack>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => {htmlToImageDownloader('recommendedNumbersCard')}}>
                    <Download />
                </IconButton>
                <Stack direction="row" sx={{marginLeft : 'auto'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Typography align="justify" variant="body2" sx={{marginLeft : 'auto'}} >더하기</Typography>
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
                    <Box>
                        <Stack spacing={2}>
                            <Divider orientation="horizontal" flexItem />
                            <Typography variant="subtitle2">생성된 번호</Typography>
                            {displayedNumbers.map((recommend, index) => (
                                recommend && ( // recommend 객체가 존재할 때만 내부 컴포넌트를 렌더링
                                    <Stack key={index} spacing={1}>
                                        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                                            {recommend.number1 && <LottoNumber number={recommend.number1} />}
                                            {recommend.number2 && <LottoNumber number={recommend.number2} />}
                                            {recommend.number3 && <LottoNumber number={recommend.number3} />}
                                            {recommend.number4 && <LottoNumber number={recommend.number4} />}
                                            {recommend.number5 && <LottoNumber number={recommend.number5} />}
                                            {recommend.number6 && <LottoNumber number={recommend.number6} />}
                                        </Stack>
                                        {recommend.reason && (
                                            <Typography variant="subtitle2">
                                                ({recommend.reason})
                                            </Typography>
                                        )}
                                        {recommend.frequencyInfo && (
                                            <Typography variant="subtitle2">
                                                ({recommend.frequencyInfo})
                                            </Typography>
                                        )}
                                    </Stack>
                                )
                            ))}
                            <Divider orientation="horizontal" flexItem />
                            <Box>
                                <Fab variant="extended" color="primary" onClick={handleButtonClick}>
                                    <AutoFixHighTwoTone />
                                    생성하기
                                </Fab>
                            </Box>
                        </Stack>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
