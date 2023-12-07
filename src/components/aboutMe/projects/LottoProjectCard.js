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
import {openUrlInNewTab} from "../../../utils/navigationUtils";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import {Campaign, Folder, Looks3, Looks4, Looks5, LooksOne, LooksTwo} from "@mui/icons-material";


export default function LottoProjectCard() {

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
                            Sprintboot(3.x), Java(17)로 API서버 구축
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Looks3 />
                        <Typography variant="body2" color="text.secondary">
                            React.js로 UI 제공
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Looks4 />
                        <Typography variant="body2" color="text.secondary">
                            Docker와 Docker-compose로 컨테이너화
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Looks5 />
                        <Typography variant="body2" color="text.secondary">
                            AWS ECS로 배포
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Campaign />
                        <Typography variant="body2" color="text.secondary">
                            기획부터 배포까지 웹개발 프로젝트의 전체 수명 주기를 주도하고 관리하는데 초점을 두고 로직 자체는 간단한 주제를 설정해 프로젝트를 진행했습니다.
                            <br/>
                            <br/>
                            Python은 그동안 알고리즘 등을 구현하며 Function단위로만 작성해보았었는데, Python의 프로젝트 구조와 Class를 이용한 설계(재사용성, 유지보수성)를 경험해볼 수 있었습니다.
                            <br/>
                            <br/>
                            SpringBoot는 작업이 익숙하지만, 이번에 처음으로 DTO를 Records객체로 작성했습니다. 데이터의 안전성과 일관성을 불변성으로 보장하고, 여러 메서드를 자동생성하며 간결한 코드를 작성할 수 있어 가독성이 향상됨을 느꼈습니다.
                            <br/>
                            <br/>
                            UI를 구성하는데 React.js를 사용한 것은 API와의 통합이 용이하고, 컴포넌트 기반 설계로 재사용성과 유지보수&확장성을 노릴 수 있으며 SPA나 클라이언트측 연산 등으로 사용자 경험을 증대시키려는 목적이었습니다. 코드를 작성할때도 이와 같은 특성을 살리려고 노력했습니다.
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
