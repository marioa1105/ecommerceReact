import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button'
import { ButtonGroup, Typography } from '@mui/material';
import './ItemCount.css'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        count < stock && setCount(count + 1)
    }
    const onRemove = () => {
        count > 0 && setCount(count - 1)
    }
    return (
        <Box  sx={{display:'flex', alignItems: 'center'}}        
        >            
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <IconButton color="primary" onClick={onRemove}>
                    <RemoveOutlinedIcon />
                </IconButton>

                <Typography className="count-control" > {count} </Typography>

                <IconButton color="primary" onClick={onAdd}>
                    <AddOutlinedIcon />
                </IconButton>
            </ButtonGroup>
            <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                Agregar
            </Button>   
        </Box>

    );
}

export default ItemCount;