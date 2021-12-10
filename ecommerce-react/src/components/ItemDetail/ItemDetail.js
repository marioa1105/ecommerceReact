import Grid from '@mui/material/Grid'
const ItemDetail = ({item}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img src={`../../assets/${item.pictureUrl}`} alt={item.title}/>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                    <h1>{item.title}</h1>
                    Precio: {item.price}
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default ItemDetail