
import { useEffect, useRef, useState } from "react";
import useTitle from "../hooks/useTitle";
import ToysRow from "./ToysRow";


const AllToys = () => {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    useTitle('allToys');
    const searchRef = useRef(null);
    const [cars, setCars] = useState([]);


    useEffect(() => {
        fetch(`https://the-toy-server1.vercel.app/addToys?search=${search}`)
            .then(res => res.json())
            .then(data => setCars(data));

    }, [search]);

    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value);
    }


    const handleShowAll = () => {
        setShow(true)
    }
    return (
        <div>
            
            <div className="overflow-x-auto">

                <div>
                    <h1 className="text-center text-4xl font-bold mt-10 mb-10"> All of your add toys in here</h1>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
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