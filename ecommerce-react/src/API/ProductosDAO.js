import db from './APIFirebase'
import { collection, getDocs, doc,getDoc , query, where } from 'firebase/firestore';
class ProductosDAO{
    async getProducts() {
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => {
            let producto  = doc.data();
            producto.id = doc.id;
            return producto
        });
        console.log("productosList",productosList)
        return productosList;
      }
    async getProductById(id) {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        let producto = {};
        if (docSnap.exists()) {
            console.log("producto",docSnap.data())
            producto  = docSnap.data();
            producto.id = docSnap.id;
        } 
        return producto;
    }
    async getProductByCategory(category) {
        const q = query(collection(db, 'productos'),
                    where("category","==",category));                
        const docSnap = await getDocs(q);
        const productosList = docSnap.docs.map(doc => {
            let producto  = doc.data();
            producto.id = doc.id;
            return producto
        });
        /*let producto = {};
        if (docSnap.exists()) {
            console.log("producto",docSnap.data())
            producto  = docSnap.data();
            producto.id = docSnap.id;
        } */
        return productosList;
    }
}

export default new ProductosDAO()