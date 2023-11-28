import {Box, Container} from "@mui/material";
import WinningNumbersCard from "../components/WinningNumbersCard";
import RecommendedNumbersCard from "../components/RecommendedNumbersCard";
import ButtonMenuCard from "../components/ButtonMenuCard";

const HomePage = () => {
    return(
        <Box>
        <Container maxWidth="sm">
            <ButtonMenuCard />
            <WinningNumbersCard />
            <RecommendedNumbersCard />
        </Container>
        </Box>
    )
}

export default HomePage;