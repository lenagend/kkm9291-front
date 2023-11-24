import {Box, Container} from "@mui/material";
import WinningNumbersCard from "../components/WinningNumbersCard";
import RecommendedLottoCard from "../components/RecommendedLottoCard";
import ButtonMenuCard from "../components/ButtonMenuCard";

const LottoPage = () => {
    return(
        <Box>
        <Container maxWidth="sm">
            <ButtonMenuCard />
            <WinningNumbersCard />
            <RecommendedLottoCard />
        </Container>
        </Box>
    )
}

export default LottoPage;