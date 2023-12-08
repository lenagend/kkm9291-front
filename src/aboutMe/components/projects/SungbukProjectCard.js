import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {purple} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {openUrlInNewTab} from "../../../commons/utils/navigationUtils";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import {Folder, Looks3, LooksOne, LooksTwo} from "@mui/icons-material";


export default function SungbukProjectCard() {


    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[400] }} aria-label="recipe">
                        <Folder />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="로또 추천번호 제공 프로젝트"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="100%"
                image="/images/projects/lotto-project-image.png"
                alt="Paella dish"
            />
            <CardContent>
                <Stack spacing={2} sx={{textAlign: 'left'}}>
                    <Stack direction="row">
                        <LooksOne />
                        <Typography variant="body2" color="text.secondary">
                            Python으로 매주 로또 당첨번호 수집, 최신 번호를 포함해 통계기반, 랜덤 등 여러 로직으로 추천번호 생성 후 DB(MariaDB)저장
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <LooksTwo />
                        <Typography variant="body2" color="text.secondary">
                            Sprintboot로 API서버 구축
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Looks3 />
                        <Typography variant="body2" color="text.secondary">
                            React.js로 UI 제공
                        </Typography>
                    </Stack>

                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    onClick={() => openUrlInNewTab('/lotto')}
                    sx={{marginLeft: 'auto', marginRight: '1rem', fontWeight: 'bold'}}>Site로 이동...</Button>
            </CardActions>
        </Card>
    );
}
