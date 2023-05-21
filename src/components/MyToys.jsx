import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MytoysRow from "./MytoysRow";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `https://the-toy-server1.vercel.app/addToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);
    
    return (
        <div>
            <div className="text-center mt-10 mb-10 font-bold">
                <h2 className="text-4xl text-orange-600 mb-3">Your add  toys in here</h2>
                <p>Your toys length: {toys.length}</p>
           </div>
            {
                toys.map(toy => <MytoysRow
                    key={toy._id}
                    toy={toy}
                    toys={toys}
                    setToys={setToys}
                ></MytoysRow>)
            }
        </div>
    );
};

export default MyToys;