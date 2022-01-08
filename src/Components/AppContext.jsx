import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';


export const AppContext = React.createContext();

export default function AppContextProvider({children}){
    const [item,setItem]= useState([]);
    const [total,setTotal]= useState([]);
    const[number,setNumber]= useState([]);
    const getItems = () => {
        return axios.get('http://localhost:3000/orders')
    }

    const handleItems = async () => {
        try{
            getItems()
            .then((res) => {
                setItem(res.data);
                var value=0;
                var num =0;
                item.map((n) =>{
                    
                    value+=n.finalPrice
                    num += n.count
                })
                
                setTotal(value);
                setNumber(num)
            })
        }
        catch {
             
        }
    }

    useEffect(() =>{
        handleItems();
    },[item]);

    return(
        <AppContext.Provider value={[item,total,number]}>
            {children}
        </AppContext.Provider>
    )
}