import db from './APIFirebase'
import { collection, getDocs, doc,getDoc , query, where, addDoc } from 'firebase/firestore';
class OrdenesDAO {
    async saveOrder(order){
        const orderFirebase = collection(db, 'ordenes')
        const ordenFB = await addDoc(orderFirebase, order)
        return ordenFB.id;
    }
}

export   default new OrdenesDAO()