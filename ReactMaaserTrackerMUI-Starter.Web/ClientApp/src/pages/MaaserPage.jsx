import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';



const MaaserPage = () => {
    const [maaserPayments, sestMaaserPayments] = useState([]);

    useEffect(() => {
        const loadConfirmed = async () => {
            const { data } = await axios.get('/api/Maaser/getMaaser');
            sestMaaserPayments(data);         
        }
        loadConfirmed();
    }, [])

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <Typography variant="h2" gutterBottom component="div">
        Maaser Payments History
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '80%', width: '80%' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px' }}>Recipient</TableCell>
              <TableCell align="right" sx={{ fontSize: '18px' }}>Amount</TableCell>
              <TableCell align="right" sx={{ fontSize: '18px' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maaserPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                  {payment.recipient}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: '18px' }}>${payment.amount}</TableCell>
                <TableCell align="right" sx={{ fontSize: '18px' }}>{payment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MaaserPage;
