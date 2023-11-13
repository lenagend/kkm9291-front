import Avatar from "@mui/material/Avatar";

function getNumberBackgroundColor(number) {
    if (number >= 1 && number <= 10) {
        return '#fbc400';
    } else if (number >= 11 && number <= 20) {
        return '#69c8f2';
    } else if (number >= 21 && number <= 30) {
        return '#ff7272';
    } else if (number >= 31 && number <= 40) {
        return '#aaa';
    } else {
        return '#b0d840';
    }
}

export default function LottoNumber({number}){
    const backgroundColor = getNumberBackgroundColor(number);
    return (
        <Avatar className="winning-numbers"
            sx={{
                backgroundColor: backgroundColor,
                // 추가적인 스타일링
            }}
        >
            {number}
        </Avatar>
    );
}