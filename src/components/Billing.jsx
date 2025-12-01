import { useState } from "react";
import Login_bg from "/public/login.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Billing() {
  // create 6 separate row objects
  const [rows, setRows] = useState(
    Array.from({ length: 6 }, () => ({
      item: "",
      qty: "",
      price: "",
      total: ""
    }))
  );
  const [subtotal, setSubtotal] = useState(0);

const sum = 0
  const handleChange = (index, field, value) => {
    const updated = [...rows];
    console.log(updated,"1")
    updated[index] = { ...updated[index], [field]: value };
    console.log(updated[index],"2")
    // auto calculate total
    const qty = Number(updated[index].qty);
    console.log(qty,"3")
    const price = Number(updated[index].price);
    console.log(price,"4")
    updated[index].total = qty && price ? qty * price : 0;
    console.log(updated[index].total,"5")
   // console.log(sum+=updated[index].total,"total check")
    setRows(updated);
    const totalSum = updated.reduce((acc, item) => acc + (Number(item.total) || 0), 0);
  setSubtotal(totalSum);
  console.log(totalSum,"totalsum")
  };

  const handleSubmit = async(e)=>{
    const res = await axios.post("https://inventory-backend-m3nc.onrender.com/api/billing_item",{
      rows
    })
    alert("Billed successfully")
    setRows(rows.map(() => ({ item: "", qty: "", price: "" })));
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: `url(${Login_bg})` }}
    >
      <h1 className="text-white text-3xl font-bold mt-10 mb-10 drop-shadow-lg">
        Inventory Management
      </h1>

      <Link to="/add_item" className="text-white mb-5 underline">
        View Product
      </Link>

      <div className="backdrop-blur-xl bg-white/10 p-6 rounded-xl shadow-xl w-[90%] max-w-4xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 border-b">Item</th>
              <th className="px-6 py-4 border-b">Qty</th>
              <th className="px-6 py-4 border-b">Price</th>
              <th className="px-6 py-4 border-b">Total</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) =>
                      handleChange(index, "item", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
                  />
                </td>

                <td className="px-6 py-4 border-b">
                  <input
                    type="number"
                    value={row.qty}
                    onChange={(e) =>
                      handleChange(index, "qty", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
                  />
                </td>

                <td className="px-6 py-4 border-b">
                  <input
                    type="number"
                    value={row.price}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
                  />
                </td>

                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    value={row.total}
                    readOnly
                    className="w-full px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      <div className="w-full flex justify-between items-center mt-4 px-10">
  
   <button 
    onClick={handleSubmit}
    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
  >
    Billing
  </button>
  
  {/* LEFT SIDE */}
  <div className="flex items-center gap-4">
    <h1 className="font-bold text-white">SubTotal</h1>
    <input
      type="text"
      value={subtotal}
      readOnly
      className="w-30 px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
    />
  </div>

  {/* RIGHT SIDE */}

</div>

      </div>
    </div>
  );
}

export default Billing;
