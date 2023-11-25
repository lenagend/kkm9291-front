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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Divider, Fab, Stack} from "@mui/material";
import '../css/lotto/common.css'
import {AutoFixHighTwoTone} from "@mui/icons-material";
import LottoNumber from "./LottoNumber";

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

export default function RecommendedLottoCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                       로또
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="로또 번호 추천"
                subheader="ex)최근 가장 나오지 않았던 번호 랜덤 추첨"
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                        <LottoNumber number={7} />
                        <LottoNumber number={18} />
                        <LottoNumber number={19} />
                        <LottoNumber number={26} />
                        <LottoNumber number={33} />
                        <LottoNumber number={45} />
                    </Stack>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
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
                            <Box>
                                <Fab variant="extended" color="primary">
                                    <AutoFixHighTwoTone />
                                    생성하기
                                </Fab>
                            </Box>
                            <Divider orientation="horizontal" flexItem />
                            <Stack spacing={1}>
                                <Typography variant="subtitle2">생성된 번호</Typography>
                                <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                    <Avatar className="winning-numbers">7</Avatar>
                                    <Avatar className="winning-numbers">18</Avatar>
                                    <Avatar className="winning-numbers">19</Avatar>
                                    <Avatar className="winning-numbers">26</Avatar>
                                    <Avatar className="winning-numbers">33</Avatar>
                                    <Avatar className="winning-numbers">45</Avatar>
                                </Stack>
                                <Typography variant="subtitle2">
                                    (6개의 랜덤 번호)
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
