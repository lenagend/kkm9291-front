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
import {Box, Divider, Fab, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";
import '../css/lotto/common.css'
import {AutoFixHighTwoTone} from "@mui/icons-material";

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
                subheader="최근 가장 나오지 않았던 번호 랜덤 추첨"
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                        <Avatar className="winning-numbers">7</Avatar>
                        <Avatar className="winning-numbers">18</Avatar>
                        <Avatar className="winning-numbers">19</Avatar>
                        <Avatar className="winning-numbers">26</Avatar>
                        <Avatar className="winning-numbers">33</Avatar>
                        <Avatar className="winning-numbers">45</Avatar>
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
                            <Stack spacing={1}  direction={{ xs: 'column', sm: 'row' }}>
                                <Typography variant="caption">최근</Typography>
                                <Box sx={{ minWidth: {xs: 80, sm: 120} }}>
                                    <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">몇회</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        //value={age}
                                        label="Age"
                                        //onChange={handleChange}
                                    >
                                        <MenuItem value={5}>5회</MenuItem>
                                        <MenuItem value={4}>4회</MenuItem>
                                        <MenuItem value={3}>3회</MenuItem>
                                        <MenuItem value={2}>2회</MenuItem>
                                        <MenuItem value={1}>1회</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                                <Typography variant="caption">동안</Typography>
                                <Box sx={{ minWidth: {xs: 80, sm: 120} }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">출현</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            //value={age}
                                            label="Age"
                                            //onChange={handleChange}
                                        >
                                            <MenuItem value={1}>안나온</MenuItem>
                                            <MenuItem value={2}>많이나온</MenuItem>
                                            <MenuItem value={3}>랜덤</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Typography variant="caption">번호</Typography>
                                <Box sx={{ minWidth: {xs: 80, sm: 120} }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">갯수</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            //value={age}
                                            label="Age"
                                            //onChange={handleChange}
                                        >
                                            <MenuItem value={1}>1개</MenuItem>
                                            <MenuItem value={2}>2개</MenuItem>
                                            <MenuItem value={3}>3개</MenuItem>
                                            <MenuItem value={4}>4개</MenuItem>
                                            <MenuItem value={5}>5개</MenuItem>
                                            <MenuItem value={6}>6개</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Stack>
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
                                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                                      <Typography>1.</Typography>
                                    </Box>
                                    <Avatar className="winning-numbers">7</Avatar>
                                    <Avatar className="winning-numbers">18</Avatar>
                                    <Avatar className="winning-numbers">19</Avatar>
                                    <Avatar className="winning-numbers">26</Avatar>
                                    <Avatar className="winning-numbers">33</Avatar>
                                    <Avatar className="winning-numbers">45</Avatar>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
