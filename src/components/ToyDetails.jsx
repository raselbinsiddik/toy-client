
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ToyDetails = () => {
   
    const view = useLoaderData();
    const { _id, name, price, seller, quantity, category, photo, rating, description, email } = view;
   
   
   
    return (
            <div className="mb-16">
                <div className="text-center mt-10 mb-10">
                    <h2 className="text-4xl font-bold text-red-800 mb-5">Making Love in every where with our products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nemo dicta obcaecati facere voluptatum pariatur saepe numquam quam quisquam dolorem aut ratione, praesentium odit? Inventore accusantium numquam voluptas et a?</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 ms-16  mb-5">
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
              

                </div>
            </div>
    );
};

export default ToyDetails;