import {Box, Container, Grid} from "@mui/material";
import ButtonAppBar from "../components/ButtonAppBar";
import WinningNumbersCard from "../components/WinningNumbersCard";

const HomePage = () => {
    return(
        <Box>
        <Container maxWidth="sm">
            <WinningNumbersCard />
        </Container>
        </Box>
    )
}

export default HomePage;