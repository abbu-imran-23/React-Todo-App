import React, { useState } from "react";

const App = () => {

    const [item,setItem] = useState("");
    const [listData,setListData] = useState([]);

    const HandleOnChangeInput = (e) => {
        setItem(e.target.value);
    }

    //  Sdding item to the list
    const HandleAddButton = () => {
        setListData((listData) => {
            const updatedList = [...listData,item];
            setItem("");
            return updatedList;
        });
    }

    //  Removing the particular item from the list
    const HandleRemoveItem  = (idx) => {
        const updatedListData = listData.filter((elements,id) => {
            return idx != id;
        })
        setListData(updatedListData);
    }

    //  Removing all the elements from the list
    const HandleRemoveAll = () => {
        setListData([]);
    }

    return (
        <>
          <div className="w-100vw h-[100vh] bg-black flex justify-center">

             <div className="w-[1000px] max-h-[100vh] bg-slate-700 rounded mx-auto flex flex-col
             gap-6 items-center sm:mt-10 ">

               <h1 className="text-white text-3xl mt-6 font-bold">TODO LIST</h1>

               <div>
                <input type="text" placeholder="Add item" className="p-2 w-[300px] sm:w-[480px] md:w-[600px] outline-none rounded"
                value={item} onChange={HandleOnChangeInput} />

                <button className="p-2 w-[60px] font-bold bg-blue-500 rounded"
                onClick={HandleAddButton} >Add</button>
               </div>

               <h1 className="text-white text-3xl font-semibold">Here is your list</h1>

                {/* Showing all the list items */}
               {
                listData != [] && listData.map((listItem,idx) => (
                    <div className="flex">
                      <h1 className="p-1 text-xl font-semibold w-[290px] sm:[380px] md:[430px] pl-3 items-center text-white bg-slate-600 rounded">{listItem}</h1>
                      <button key={idx} className="p-2 w-fit font-bold bg-blue-500 rounded"
                      onClick={() => HandleRemoveItem(idx)}>Remove</button>
                    </div>
                ))
               }

               <button className="p-2 w-fit font-bold bg-blue-500 rounded"
               onClick={HandleRemoveAll}>Remove All</button>

             </div>
          </div>
        </>
    )
}

export default App
