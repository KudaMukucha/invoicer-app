import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function FormTable({updateTableData}) {
    const  [tableData,setTableData] = useState([
        {
        itemDescription:"",
        qty:"",
        unitPrice:"",
        tax:"",
        amount:"",
    },
]);



function addRow(){
    setTableData([...tableData, {
        itemDescription:"",
        qty:"",
        unitPrice:"",
        tax:"",
        amount:"",
    }])
}

function removeRow(index){
    const updatedData = [...tableData];
    updatedData.splice(index,1)
    setTableData(updatedData)
}

function handleInputChange(index,e){
    const {name,value} = e.target;
    const updatedData = [...tableData];
    updatedData[index][name]=value;
    if (name === 'qty' || name === 'unitPrice') {
        const qty = parseFloat(updatedData[index].qty);
        const price = parseFloat(updatedData[index].unitPrice);
        if (!isNaN(qty) && !isNaN(price)) {
          updatedData[index].amount = (qty * price).toFixed(2);
        } else {
          updatedData[index].amount = '';
        }
      }  
    setTableData(updatedData)
    updateTableData(updatedData)
    // console.log(updatedData)
}

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Item Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                    TAX
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                tableData.map((row,index)=>{
                    return(
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type="text" name='itemDescription' value={row.itemDescription} className='border-0 h-5 w-3/4 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400 bg-transparent' placeholder="Item Description" onChange={(e)=>handleInputChange(index,e)}/>
                {/* <textarea id="message" rows="2" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description..."></textarea> */}

                </th>
                <td className="px-6 py-4">
                <input type="number" name='qty' value={row.qty} className='border-0 h-5 w-12 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400 bg-transparent' placeholder="2" onChange={(e)=>handleInputChange(index,e)}/>
                </td>
                <td className="px-6 py-4">
                <input type="number" name='unitPrice' value={row.unitPrice} className='border-0 h-5 w-20 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400 bg-transparent' placeholder="10" onChange={(e)=>handleInputChange(index,e)}/>
                </td>
                <td className="px-6 py-4">
                <input type="number" name='tax' value={row.tax} className='border-0 h-5 w-12 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400 bg-transparent' placeholder="6" onChange={(e)=>handleInputChange(index,e)}/>
                </td>
                <td className="px-6 py-4">
                <input type="number" name='amount' value={row.amount} className='border-0 h-5 w-20 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400 bg-transparent' placeholder="2000" onChange={(e)=>handleInputChange(index,e)}/>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={()=> removeRow(index)} type="button">
                    <AiOutlineCloseCircle className="text-red-600 text-base"/>
                  </button>
                </td>
            </tr>
                    )
                })
            }
            
           <button onClick={addRow} type="button" className="flex items-center my-3 space-x-1 text-violet-700 ml-3">
            <AiOutlinePlusCircle className="text-base"/>
            <span>Add line Item</span>
           </button>
        </tbody>
    </table>
</div>

  )
}
