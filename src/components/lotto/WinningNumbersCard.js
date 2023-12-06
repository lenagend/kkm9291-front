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
import {red} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Pagination, Stack} from "@mui/material";
import '../../css/lotto/common.css'
import {useFetchPaginatedData} from "../../hooks/useFetchPaginatedData";
import {useEffect, useState} from "react";
import LottoNumber from "./LottoNumber";
import {formatKoreanDate} from "../../utils/formatDate";
import {Download} from "@mui/icons-material";
import {htmlToImageDownloader} from "../../utils/DownloadUtils";
import LoadingCard from "../loading/LoadingCard";

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

export default function WinningNumbersCard() {
    const [expanded, setExpanded] = React.useState(false);
    const apiUrl = process.env.REACT_APP_API_URL ?  process.env.REACT_APP_API_URL : "http://127.0.0.1:8080";
    const [currentPage, setCurrentPage] = useState(0);
    const { data: lottoDrawsData, loading } = useFetchPaginatedData(`${apiUrl}/api/lotto`, currentPage, 5, "drawDate,desc");
    const [latestDraw, setLatestDraw] = useState(null);

    useEffect(() => {
        if (lottoDrawsData && lottoDrawsData.content && lottoDrawsData.content.length > 0) {
            setLatestDraw(prevLatestDraw => prevLatestDraw || lottoDrawsData.content[0]);
        }
    }, [lottoDrawsData]);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if(loading || !latestDraw){
        return <LoadingCard />;
    }

    return (
        <Card sx={{ maxWidth: 'auto', mt: 2 }} id="winningNumbersCard">
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
                title={`${latestDraw.drawNo}회 당첨번호`}
                subheader={`(${formatKoreanDate(latestDraw.drawDate)} 추첨)`}
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                        <LottoNumber number={latestDraw.drawNo1} />
                        <LottoNumber number={latestDraw.drawNo2} />
                        <LottoNumber number={latestDraw.drawNo3} />
                        <LottoNumber number={latestDraw.drawNo4} />
                        <LottoNumber number={latestDraw.drawNo5} />
                        <LottoNumber number={latestDraw.drawNo6} />
                        <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                        <LottoNumber number={latestDraw.bonusNo} />
                    </Stack>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => htmlToImageDownloader('winningNumbersCard')}>
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
                    <Box>
                        <Stack spacing={1}>
                            {
                                lottoDrawsData && lottoDrawsData.content.map((draw, index) => (
                                    <React.Fragment key={index}>
                                        <Typography variant="subtitle2">
                                            {draw.drawNo}회 ({formatKoreanDate(draw.drawDate)} 추첨)
                                        </Typography>
                                        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                                            <LottoNumber number={draw.drawNo1} />
                                            <LottoNumber number={draw.drawNo2} />
                                            <LottoNumber number={draw.drawNo3} />
                                            <LottoNumber number={draw.drawNo4} />
                                            <LottoNumber number={draw.drawNo5} />
                                            <LottoNumber number={draw.drawNo6} />
                                            <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                            <LottoNumber number={draw.bonusNo} />
                                        </Stack>
                                    </React.Fragment>
                                ))
                            }

                            {/*React.Fragment는 여러 JSX 요소를 그룹화하지만, 추가적인 DOM 요소를 생성하지 않는 리액트의 컴포넌트입니다. 일반적으로 JSX는 하나의 부모 요소만 반환할 수 있기 때문에, 여러 요소를 반환해야 할 때 React.Fragment를 사용합니다.*/}
                            {/*예를 들어, 여러 <div>나 다른 요소들을 연속적으로 반환하고 싶을 때, 이들을 <React.Fragment>로 감싸서 반환할 수 있습니다. 이는 <div>나 다른 요소를 추가로 생성하지 않기 때문에 DOM 트리를 깔끔하게 유지하는 데 도움이 됩니다.*/}
                            {/*간단히 <>와 </>로도 사용할 수 있으며, 이를 'Short Syntax'라고 부릅니다. 예: <>...</>.*/}
                        </Stack>
                        <Stack justifyContent="center" alignItems="center" sx={{mt: 2}}>
                            <Pagination
                                count={lottoDrawsData.totalPages}
                                color="primary"
                                page={currentPage + 1}
                                onChange={(event, page) => setCurrentPage(page - 1)}
                            />
                        </Stack>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
