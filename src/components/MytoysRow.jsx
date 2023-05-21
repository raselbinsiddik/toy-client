
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MytoysRow = ({ toy,toys, setToys }) => {
    
    const {_id, category, photo, name, seller, price, quantity, email, rating, description } = toy;
   
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b7a11-toy-marketplace-server-side-raselbinsiddik.vercel.app/addToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const reamining = toys.filter(t => t._id !== _id);
                            setToys(reamining)
                        }

                    })

            }
        })

    }

    return (
        <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 ms-16  mb-5 mr-10">
                <img className="rounded-xl mt-5" src={photo} alt="" />
                <div className="text-xl font-bold mt-5 bg-red-50 rounded-xl p-5 mr-5">
                    <p className="text-2xl ">Toy name: {name}</p>
                    <p className="mt-2 mb-2">Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p className="mt-2 mb-2">Available Quantity: {quantity}</p>
                    <p>Seller Name: {seller}</p>
                    <p className="mt-2 mb-2">Seller Email: {email}</p>
                    <p>Detail description: {description}</p>

                    <p>Sub category: {category}</p>

                   
                </div>
                <button onClick={()=> handleDelete(_id)} className="btn btn-primary mt-2 mr-2">Delete Your Add item</button>
                <button className="btn btn-primary mt-2 mr-2"><Link to={`/update/${_id}`}>Update Your add Item</Link></button>
            </div>
        </div>
    );
};

export default MytoysRow;