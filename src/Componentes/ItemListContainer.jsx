import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Preductos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const preductosRef = collection(db, "preductos");
      const q = categoria ? query(preductosRef, where("categoria", "==", categoria)) : preductosRef;

      getDocs(q)
        .then((resp) => {

          console.log (resp.docs)
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }

            
            })
          )
        })
     
        
    }, [categoria])
    
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer