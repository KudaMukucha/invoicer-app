export default function PreviewTable({tableData}) {
  const totalSum =  tableData?.reduce((currentItem,nextItem)=>{
    // console.log()
    return +currentItem.amount + +nextItem.amount
  })
  console.log(totalSum);
  return (
    <div className="relative overflow-x-auto">
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
          tableData?.map((row,i)=>{
            const {itemDescription,qty,unitPrice,tax,amount} = row
            return(
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
               {itemDescription}
              </th>
              <td className="px-6 py-4">{qty}</td>
              <td className="px-6 py-4">${unitPrice}</td>
              <td className="px-6 py-4">{tax}</td>
              <td className="px-6 py-4">${amount}</td>
            </tr>
            )
          })
         }
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
           
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 font-bold uppercase text-slate-800">Total Amount:</td>
            <td className="px-6 py-4 font-bold">${totalSum}</td>

          </tr>
        
        </tbody>
      </table>
    </div>
  );
}
