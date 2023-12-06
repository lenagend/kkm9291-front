import {Box, Container} from "@mui/material";
import ButtonMenuCard from "../components/ButtonMenuCard";
import ProfileCard from "../components/aboutMe/ProfileCard";
import TechStackCard from "../components/aboutMe/TechStackCard";
import ProjectsCard from "../components/aboutMe/ProjectsCard";
import SourceCodeCard from "../components/aboutMe/SourceCodeCard";

const AboutMePage = () => {
    return(
        <Box>
        <Container maxWidth="sm" >
            <ButtonMenuCard />
            <ProfileCard />
            <TechStackCard />
            <ProjectsCard />
            <SourceCodeCard />
        </Container>
        </Box>
    )
}

export default AboutMePage;