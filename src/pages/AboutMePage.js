import {Box, Container} from "@mui/material";
import ButtonMenuCard from "../components/ButtonMenuCard";
import ProfileCard from "../components/aboutMe/ProfileCard";
import TechStackCard from "../components/aboutMe/TechStackCard";

const AboutMePage = () => {
    return(
        <Box>
        <Container maxWidth="sm">
            <ButtonMenuCard />
            <ProfileCard />
            <TechStackCard />
        </Container>
        </Box>
    )
}

export default AboutMePage;