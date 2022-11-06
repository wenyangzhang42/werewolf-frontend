import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import AbilityButton from "./AbilityButton";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    height: '100%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GameGrid() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container alignItems='center' justifyContent='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <AbilityButton/>
                    {/*<Button>Sample button</Button>*/}
                    {/*<Item>1</Item>*/}
                </Grid>

                <Grid item xs={2}>
                    <Item>2</Item>
                </Grid>
            </Grid>
            <Grid container alignItems='center' justifyContent='center' rowSpacing={1} alignContent={'right'} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <AbilityButton/>
                    {/*<Button>Sample button</Button>*/}
                    {/*<Item>1</Item>*/}
                </Grid>
                <Grid item xs={2}>
                    <Item>2</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
