import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';


const OverviewPage = () => {

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalMaaser, setTotalMaaser] = useState(0);
    const [maaserObligation, setMaaserObligation] = useState(0);


    useEffect(() => {
        const onLoadConfimed = async () => {
            const { data } = await axios.get('/api/Maaser/getTotalIncomeandMaaser');
            setTotalIncome(data.totalIncome);
            setTotalMaaser(data.totalMaaser);
            const maaserObligated = totalIncome * .10;
            const totalMaaserGiven = totalMaaser;
            setMaaserObligation(maaserObligated - totalMaaserGiven)

        }
        onLoadConfimed();

    }, [])


    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                textAlign: 'center'
            }}
        >
            <Paper elevation={3} sx={{ padding: '120px', borderRadius: '15px' }}>
                <Typography variant="h2" gutterBottom>
                    Overview
                </Typography>
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        Total Income: ${totalIncome}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Total Maaser: ${totalMaaser}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Maaser Obligated: ${totalIncome * .10}
                    </Typography>
                    <Typography variant="h5" gutterBottom>

                        Remaining Maaser obligation:   ${maaserObligation > 0 ? maaserObligation : '0'}

                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default OverviewPage;
