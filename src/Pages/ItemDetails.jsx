import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemDetails() {
  const getItems = (id) => {
    return axios.get("http://localhost:3000/product/"+id);
  };

  const [data, setData] = useState([]);
  const { id } = useParams();

  var [count, setCount] = useState(1);

  useEffect(() => {
    getItems(id).then((res) => {
      setData(res.data);
    })
  }, [id]);

  const handleCart = ({ count, price, id }) => {
    postData(id)

    const payload = {
      id: id,
      count: count,
      price: price,
      finalPrice: count * price,
    };

    const config = {
      url: "http://localhost:3000/orders",
      method: "POST",
      data: payload
    }
    return axios(config);
  };

  const postData = (id) => {
    const config = {
      url: `http://localhost:3000/orders/${id}`,
      method: "DELETE",
    };
    return axios(config);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleDelete = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Item Details PAge</h1>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          border: "1px solid #F6425B",
          padding: "2rem",
          borderRadius: "10px",
          width: "600px",
        }}
      >
        <div>
          <img src={data.image_url} alt="" />
        </div>
        <div>
          <p>Product name: {data.product_name}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price} ₹</p>
        </div>
        <div style={{ display: "flex", gap: "5rem", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: ".5rem" }}>
                <button onClick={handleDelete}>-</button>
                <p
                style={{
                    border: "1px solid black",
                    padding: 10,
                    background: "black",
                    color: "white",
                }}
                >
                {count}
                </p>
                <button onClick={handleAdd}>+</button>
          </div>
          <div>
          <button onClick={() => handleCart({...data,count})}>Add to cart</button>
          </div>
        </div>
        {id !== "1" && <Link to={`/items/${Number(id) - 1}`}>Prev</Link>}
            <Link to={`/items/${Number(id) + 1}`} style={{margin: 20}}>Next</Link>
      </div>
      
    </div>
  );
}
