import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MenuItem, Select, Button, Container, Box, Typography, InputLabel, FormControl } from '@mui/material';

const PurchaseForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        year: '',
        invoice: '',
        amount: '',
        description: '',
        card: '',
        responsible: '',
        category: [],
        installments: 1,
    });

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth(); // 0 - Janeiro, 11 - Dezembro
        const nextMonth = (currentMonth + 1) % 12;  // Para pegar o próximo mês

        // Definir o valor de 'invoice' para o próximo mês (em inglês abreviado)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const nextMonthName = months[nextMonth];

        setFormData({
            invoice: nextMonthName,  // Fatura para o próximo mês
            year: currentYear,       // Ano atual
            value: '',
            description: '',
            card: '',
            responsible: '',
            category: [],
            totalInstallments: '',
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTagsChange = (event, newValue) => {
        setFormData({ ...formData, category: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
        setFormData({
            year:'',
            invoice: '',
            amount: '',
            description: '',
            card: '',
            responsible: '',
            category: [],
            installments: 1,
        });
    };


return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: 'white',
                width: '100%',
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Add Purchase
            </Typography>

            <FormControl fullWidth margin="normal" variant="filled">
                <InputLabel>Ano</InputLabel>
                <Select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="" disabled>Ano</MenuItem>
                    <MenuItem value={new Date().getFullYear()}>{new Date().getFullYear()}</MenuItem>
                    <MenuItem value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</MenuItem>
                </Select>
            </FormControl>


            <FormControl fullWidth margin="normal" variant="filled">
                <InputLabel>Fatura</InputLabel>
                <Select
                    name="invoice"
                    value={formData.invoice}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="" disabled>Fatura</MenuItem>
                    <MenuItem value="Jan">Janeiro</MenuItem>
                    <MenuItem value="Feb">Fevereiro</MenuItem>
                    <MenuItem value="Mar">Março</MenuItem>
                    <MenuItem value="Apr">Abril</MenuItem>
                    <MenuItem value="May">Maio</MenuItem>
                    <MenuItem value="Jun">Junho</MenuItem>
                    <MenuItem value="Jul">Julho</MenuItem>
                    <MenuItem value="Aug">Agosto</MenuItem>
                    <MenuItem value="Sep">Setembro</MenuItem>
                    <MenuItem value="Oct">Outubro</MenuItem>
                    <MenuItem value="Nov">Novembro</MenuItem>
                    <MenuItem value="Dec">Dezembro</MenuItem>                    
                </Select>
            </FormControl>

            <TextField
                label="Amount (BRL)"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="filled"
            />

            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="filled"
            />

            <FormControl fullWidth margin="normal" variant="filled">
                <InputLabel>Cartão utilizado</InputLabel>
                <Select
                    name="card"
                    value={formData.card}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="" disabled>Cartão utilizado</MenuItem>
                    <MenuItem value="BB">Ourocard BB (Matheus)</MenuItem>
                    <MenuItem value="Itau_Uniclass">Itaú Uniclass (Matheus)</MenuItem>
                    <MenuItem value="Itau_Gold">Itaú Gold (Matheus)</MenuItem>
                    <MenuItem value="C&A">C&A Pay (Matheus)</MenuItem>
                    <MenuItem value="Renner">Renner (Matheus)</MenuItem>
                    <MenuItem value="Nubank_Matheus">Nubank (Matheus)</MenuItem>
                    <MenuItem value="Nubank_Mariana">Nubank (Mariana)</MenuItem>
                    <MenuItem value="Itau_Mariana">Itaú Card (Mariana)</MenuItem>
                    <MenuItem value="Inter_Matheus">Inter (Matheus)</MenuItem>
                    <MenuItem value="Inter_Mariana">Inter (Mariana)</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" variant="filled">
                <InputLabel>Responsável pela compra</InputLabel>
                <Select
                    name="responsible"
                    value={formData.responsible}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="" disabled>Responsável pela compra</MenuItem>
                    <MenuItem value="Andrea">Andréa</MenuItem>
                    <MenuItem value="Breno">Breno</MenuItem>
                    <MenuItem value="Gloria">Dª Glória</MenuItem>
                    <MenuItem value="Luis">Luis</MenuItem>
                    <MenuItem value="Livia">Lívia</MenuItem>
                    <MenuItem value="Luiza">Luiza</MenuItem>
                    <MenuItem value="Mariana">Mariana</MenuItem>
                    <MenuItem value="Matheus">Matheus</MenuItem>
                    <MenuItem value="Radix">Radix</MenuItem>
                    <MenuItem value="Tamara">Tamara</MenuItem>
                    <MenuItem value="Outros">Outros</MenuItem>
                </Select>
            </FormControl>

            <Autocomplete
                multiple
                freeSolo
                options={[]}
                value={formData.category}
                onChange={handleTagsChange}
                renderInput={(params) => (
                    <TextField {...params} variant="filled" label="Category" placeholder="Add a tag" margin="normal" fullWidth />
                )}
            />

            <TextField
                label="Total Installments"
                name="installments"
                type="number"
                value={formData.installments}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
                variant="filled"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Add Purchase
            </Button>
        </Box>
    </Container>
    );
};

export default PurchaseForm;
