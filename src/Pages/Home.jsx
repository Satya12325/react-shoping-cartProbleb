import axios from 'axios';
import {useEffect, useState} from 'react';
import Cards from '../Components/Cards';


export default function Home(){

    const [data, setData] = useState([]);
    const getItems = () => {
        return axios.get('http://localhost:3000/product');
    }

    useEffect(() =>{
        getItems()
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return(
        <div>
            <h1>Home Page</h1>
            <div>
                {
                    data.map((item) => {
                        return <Cards
                        key={item.id}
                        id={item.id}
                        name={item.product_name}
                        image={item.image_url}
                        price={item.price}
                        />
                    })
                }
            </div>
        </div>
    )


}