import {Box, Container} from "@mui/material";
import ButtonMenuCard from "../../commons/components/menu/ButtonMenuCard";
import ProfileCard from "../components/ProfileCard";
import TechStackCard from "../components/TechStackCard";
import ProjectsCard from "../components/ProjectsCard";
import SourceCodeCard from "../components/SourceCodeCard";
import FixedBottomNavigation from "../../commons/components/menu/FixedBottomNavigation";

const AboutMePage = () => {
    return(
        <Box>
        <Container maxWidth="sm" sx={{padding: 0}}>
            <ButtonMenuCard />
            <ProfileCard />
            <TechStackCard />
            <ProjectsCard />
            <SourceCodeCard />
            <FixedBottomNavigation/>
        </Container>
        </Box>
    )
}

export default AboutMePage;