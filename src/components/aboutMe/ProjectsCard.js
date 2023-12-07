import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { purple} from '@mui/material/colors';
import {Download, FolderCopy} from "@mui/icons-material";
import {htmlToImageDownloader} from "../../utils/DownloadUtils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import {openUrlInNewTab} from "../../utils/navigationUtils";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../css/swiper/common.css'
import GwangjinProjectCard from "./projects/GwangjinProjectCard";
import SungbukProjectCard from "./projects/SungbukProjectCard";
import LottoProjectCard from "./projects/LottoProjectCard";

export default function ProjectsCard() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card sx={{ maxWidth: 'auto', mt: 2 }} id="projectsCard">
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: purple[500]}}>
                        <FolderCopy />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="프로젝트&깃허브"
                subheader="Project&Github"
            />
            <CardContent>
                        <Swiper
                            style={{
                                "--swiper-navigation-size": "30px",
                            }}
                            modules={[Navigation ]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <LottoProjectCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <GwangjinProjectCard/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SungbukProjectCard/>
                            </SwiperSlide>
                        </Swiper>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => {htmlToImageDownloader('projectsCard')}}>
                    <Download />
                </IconButton>
            </CardActions>
        </Card>
    );
}
