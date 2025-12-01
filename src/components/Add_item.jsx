import React, { useState } from "react";
import Login_bg from "/public/login.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Add_item() {
  // const [item, setItem] = useState("")
  // const [qty, setQty] = useState("")
  // const [price, setPrice] = useState("")

   const [rows, setRows] = useState(
    Array.from({ length: 6 }, () => ({
      item: "",
      qty: "",
      price: ""
    }))
  );

   const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleSubmit = async(e)=>{
    const res = await axios.post("https://inventory-backend-m3nc.onrender.com/api/add_item",{
     // item,qty,price
     rows
    })
    alert("item added")
     // clear fields
    setRows(rows.map(() => ({ item: "", qty: "", price: "" })));
  }
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${Login_bg})`,
        }}
      >
        {/* Title */}
        <h1 className="text-white text-3xl font-bold mt-10 mb-10 drop-shadow-lg">
          Inventory Management
       </h1>
       <div className="">
<Link to="/billing" className="text-white">Go back</Link>
 <button onClick={handleSubmit} 
 className="px-4 py-2 ml-[50rem] bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Add
                  </button>
                  </div>
        {/* Table Container */}
        <div className="backdrop-blur-xl bg-white/10 bg-opacity-80 p-6 rounded-xl shadow-xl w-[90%] max-w-4xl overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">
                  Item Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">
                  Quantity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              {/* {[1, 2, 3, 4, 5, 6].map((row) => ( */}
              {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-left border-b">
                  <input type="text"
                  value={row.item} 
                  onChange={(e)=>handleChange(index, "item", e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"></input>
                </td>
                <td className="px-6 py-4 text-left border-b">
                  <input type="text" 
                  value={row.qty}
                  onChange={(e)=>handleChange(index, "qty", e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"></input>
                </td>
                <td className="px-6 py-4 text-left border-b">
                  <input type="text" 
                  value={row.price}
                  onChange={(e)=>handleChange(index, "price", e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"></input></td>
                {/* <td className="px-6 py-4 border-b"> */}
                  
                {/* </td> */}
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Add_item;
