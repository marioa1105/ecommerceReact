import React from 'react'
import Item from '../Item/Item'
import Grid from '@mui/material/Grid'

const ItemList = ({ items }) => {
    {
        if (items.length == 0){
            return (
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <h1>No existen productos.</h1>
                    </Grid>                    
                </Grid>                
            )
        }
        else{
            return (
            
                <Grid container spacing={2}>
                    {console.log("items", items)}
                    {items.map(item => {
                        return  <Grid item xs={4} key={item.id}> <Item item={item} key= {item.id}/> </Grid>
                                
                                                
                            
                    })}
                                   
                </Grid>
            )
        }
        
    }
}

export default ItemList