import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = ({name})=>{
    return(
        <div>
            <p>{name}</p>
            <ItemCount stock = {10}/> 
        </div>
    )
}

export default ItemListContainer