import {Box, Container} from "@mui/material";
import WinningNumbersCard from "../components/WinningNumbersCard";
import RecommendedNumbersCard from "../components/RecommendedNumbersCard";
import ButtonMenuCard from "../../commons/components/menu/ButtonMenuCard";
import FixedBottomNavigation from "../../commons/components/menu/FixedBottomNavigation";

const LottoPage = () => {
    return(
        <Box>
        <Container maxWidth="sm">
            <ButtonMenuCard />
            <WinningNumbersCard />
            <RecommendedNumbersCard />
            <FixedBottomNavigation/>
        </Container>
        </Box>
    )
}

export default LottoPage;