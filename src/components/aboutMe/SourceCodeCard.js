import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {pink} from '@mui/material/colors';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

import {Code, Download, NearMe} from "@mui/icons-material";
import {htmlToImageDownloader} from "../../utils/DownloadUtils";
import {useEffect, useState} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LoadingCard from "../loading/LoadingCard";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import {formatKoreanDate} from "../../utils/formatDate";
import {openUrlInNewTab} from "../../utils/navigationUtils";

export default function SourceCodeCard() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        fetch(`https://api.github.com/users/lenagend/repos`)
            .then(response => response.json())
            .then(data => {
                const sortedRepos = data
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // 업데이트 날짜로 정렬
                    .slice(0, 5); // 상위 5개만 선택
                setRepos(sortedRepos);
                setLoading(false);
             })
            .catch(error => console.error(error));
    }, []);


    if(loading){
        return <LoadingCard />
    }

    return (
        <Card sx={{ maxWidth: 'auto', mt: 2 }} id="sourceCodeCard">
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: pink[500]}}>
                        <Code />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="소스 코드"
                subheader="Source code"
            />
            <CardContent>
                <Card sx={{boxShadow: 2}}>
                    <List>
                        {repos.map((repo, index) => (
                            <Box key={repo.id}>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="start" onClick={() => openUrlInNewTab(repo.html_url)}>
                                            <NearMe />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{bgcolor: 'black'}}>
                                            <GitHubIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${repo.name} (${repo.language})`}
                                        secondary={`업데이트: ${formatKoreanDate(repo.updated_at)}`}
                                    />
                                </ListItem>
                                {index !== repos.length - 1 && <Divider />} {/* 마지막 항목이 아닌 경우에만 Divider 표시 */}
                            </Box>
                        ))}
                    </List>
                </Card>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => {htmlToImageDownloader('sourceCodeCard')}}>
                    <Download />
                </IconButton>
                <Button
                    onClick={() => openUrlInNewTab('https://github.com/lenagend')}
                    sx={{marginLeft: 'auto', marginRight: '1rem', fontWeight: 'bold'}}>깃허브에서 더보기...</Button>
            </CardActions>
        </Card>
    );
}
