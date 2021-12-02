import React from 'react'
import Item from '../Item/Item'
import Grid from '@mui/material/Grid'

const ItemList = ({ items }) => {
    {

        return (
            <Grid container spacing={2}>
                
                {items.map(item => {
                    return  <Grid item xs={4} key={item.id}> <Item item={item} key= {item.id}/> </Grid>
                            
                                            
                        
                })}
                               
            </Grid>
        )
    }
}

export default ItemList