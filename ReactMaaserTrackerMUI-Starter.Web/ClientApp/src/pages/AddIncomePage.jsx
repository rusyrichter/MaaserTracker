import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Autocomplete, Typography } from '@mui/material';
import dayjs from 'dayjs';
import axios from 'axios';

const AddIncomePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [sources, setSources] = useState([]);
    const [amount, setAmount] = useState();
    const [source, setSource] = useState()


    useEffect(() => {
        const onLoadConfirmed = async () => {
            const { data } = await axios.get('/api/Maaser/getSources');
            setSources(data);
            console.log(data);
        }
        onLoadConfirmed();
    }, [])

    const onSubmitClick = async () => {
        await axios.post('/api/Maaser/addIncome', { selectedDate, amount, Source: source.label })
        setAmount('');
        setSource(null);
    }
    const selectedSources = sources.map(s => ({
        ...s,
        label: s.name
    }));

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80vh' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Add Income
            </Typography>
            <Autocomplete
                value={source}
                onChange={(e, newSource) => setSource(newSource)}
                options={selectedSources}
                getOptionLabel={(option) => option.label}
                fullWidth
                margin="normal"
                renderInput={(params) => <TextField {...params} label="Source" variant="outlined"/>}
            />
            <TextField
                onChange={(e, amount) => setAmount(e.target.value)}
                value={amount}
                label="Amount"
                variant="outlined"
                type="number"
                InputProps={{ inputProps: { min: 0, step: 0.01 } }}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Date"
                type="date"
                value={dayjs(selectedDate).format('YYYY-MM-DD')}
                onChange={e => setSelectedDate(e.target.value)}
                renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" readOnly=""/>}
            />
            <Button onClick={onSubmitClick} variant="contained" color="primary">Add Income</Button>
        </Container>
    );
}
export default AddIncomePage;