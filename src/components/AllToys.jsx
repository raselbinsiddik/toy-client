import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";


const AllToys = () => {
    const [show, setShow] = useState(false);
    const [cars, setCars] = useState([]);
    useTitle('allToys')

    useEffect(() => {
        setCars(useLoaderData);

    }, []);
    const handleSearch = (key) => {
        console.log(key)
    }
    const handleShowAll = () => {
        setShow(true)
    }
    return (
        <div>
            
            <div className="overflow-x-auto">

                <div>
                    <h1 className="text-center text-4xl font-bold mt-10 mb-10"> All of your add toys in here</h1>
                    <div className="w-96 mx-auto mb-10 flex">
                        <input className="w-96 p-3 border-2" type="search" name="name" id="" placeholder="search your toys" /><button onClick={handleSearch} className="btn btn-primary">click</button>
                    </div>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Sub Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {cars.slice(0, show ? 50 : 20).map((car, index) => <ToysRow key={car._id}
                            car={car}
                            index={index}>
                        </ToysRow>)}
                        {
                            !show && <button onClick={handleShowAll} className="btn btn-primary ml-32">see more</button>
                        }

                    </tbody>
                </table>
            </div>
       </div>
    );
};

export default AllToys;