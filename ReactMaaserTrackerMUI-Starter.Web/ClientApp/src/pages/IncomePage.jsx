import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Checkbox, Container, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import AddIncomePage from './AddIncomePage';

const IncomePage = () => {

    const [groupBySource, setGroupBySource] = useState(false);
    const [incomes, setIncomes] = useState([]);
   



    useEffect(() => {
        const loadConfirmed = async () => {
            const { data } = await axios.get('/api/Maaser/getIncomes');
            setIncomes(data);
        };
        loadConfirmed();
    }, []);

    const groupedIncomes = () => {
        const result = [];
        for (let income of incomes) {
            const currentName = income.source.name;
            const exists = result.find(p => p.source === currentName);
            if (!exists) {
                result.push({ source: currentName, incomes: [income] })
            } else {
                exists.incomes.push(income);
            }
        }
        return result;
    }
      

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Typography variant="h2" gutterBottom component="div">
                Income History
            </Typography>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={groupBySource}
                        onChange={(event) => setGroupBySource(event.target.checked)}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Group by source"
            />

            {!groupBySource ? (
                <TableContainer component={Paper} sx={{ maxWidth: '80%', width: '80%' }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: '18px' }}>Source</TableCell>
                                <TableCell align="right" sx={{ fontSize: '18px' }}>Amount</TableCell>
                                <TableCell align="right" sx={{ fontSize: '18px' }}>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {incomes.map((income) => (
                                <TableRow key={income.id}>
                                    <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                                        {income.source.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontSize: '18px' }}>${income.amount}</TableCell>
                                    <TableCell align="right" sx={{ fontSize: '18px' }}>{dayjs(income.date).format('YYYY-MM-DD')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                groupedIncomes().map(({ source, incomes }) => (
                    <div key={source} sx={{ width: '80%', maxWidth: '80%' }}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ mt: 5 }}>
                            {source}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: '18px' }}>Source</TableCell>
                                        <TableCell align="right" sx={{ fontSize: '18px' }}>Amount</TableCell>
                                        <TableCell align="right" sx={{ fontSize: '18px' }}>Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {incomes.map((income) => (
                                        <TableRow key={income.id}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                                                {income.source.name}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: '18px' }}>${income.amount}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: '18px' }}>{dayjs(income.date).format('YYYY-MM-DD')}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                ))
            )}
        </Container>
    );
}

export default IncomePage;
