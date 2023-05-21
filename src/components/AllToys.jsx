import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import { useState } from "react";


const AllToys = () => {
    const cars = useLoaderData();
    const [show, setShow] = useState(false);
    const handleShowAll = () => {
        setShow(true)
    }
    return (
        <div className="overflow-x-auto">
            <div className="text-center text-4xl font-bold mt-10 mb-10">
                All of your add toys in here
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Sub Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                        {cars.slice(0, show ? 50:20).map(car => <ToysRow key={car._id}
                        car={car}>
                        </ToysRow>)}
                    {
                        !show && <button onClick={handleShowAll} className="btn btn-primary ml-32">see more</button> 
                   }
                       
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;