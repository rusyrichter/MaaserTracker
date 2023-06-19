import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState} from 'react';
import axios from 'axios';

const AddMaaserPage =() => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [recipient, setRecipient] = useState();
    const [amount, setAmount] = useState('');

    const onSubmitClick = async () => {
        await axios.post("/api/Maaser/addMaaser", { Date: selectedDate, recipient, amount })
        setRecipient(null);
        setAmount('');
    }
    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80vh' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Add Maaser
            </Typography>
            <TextField onChange={(e, recipient) => setRecipient(e.target.value)} value={recipient} label="Recipient" variant="outlined" fullWidth margin="normal" />
            <TextField onChange={(e, amount) => setAmount(e.target.value)} value={amount} label="Amount" variant="outlined" fullWidth margin="normal" />
            <TextField
                label="Date"
                type="date"
                value={dayjs(selectedDate).format('YYYY-MM-DD')}
                onChange={e => setSelectedDate(e.target.value)}
                renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" />}
            />
            <Button onClick={onSubmitClick} variant="contained" color="primary">Add Maaser</Button>
        </Container>
    );
}

export default AddMaaserPage;
