import {CircularProgress} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";

export default function LoadingCard(){
    return (
        <Card sx={{ maxWidth: 'auto', mt: 2 }}>
            <CircularProgress />
        </Card>
    );
}