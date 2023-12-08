import {Box, Container} from "@mui/material";
import WinningNumbersCard from "../../lotto/components/WinningNumbersCard";
import RecommendedNumbersCard from "../../lotto/components/RecommendedNumbersCard";
import ButtonMenuCard from "../components/menu/ButtonMenuCard";

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