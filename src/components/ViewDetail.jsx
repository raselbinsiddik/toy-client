import { useLoaderData } from "react-router-dom";

const ViewDetail = () => {
    const category = useLoaderData();
    const { Picture, Price, Rating, Seller_email, Seller_name, Toy_Name, available_quantity, detail_description } = category;
    console.log(category);
    return (
        <div>
            <div className="text-center mt-5">
                <h2 className="text-4xl font-bold text-red-800 mb-5">Making Love in every where with our products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nemo dicta obcaecati facere voluptatum pariatur saepe numquam quam quisquam dolorem aut ratione, praesentium odit? Inventore accusantium numquam voluptas et a?</p>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ms-16  mb-5">
                <img className="rounded-xl mt-5" src={Picture} alt="" />
                <div className="text-xl font-bold mt-5 bg-red-50 rounded-xl p-5 mr-5">
                    <p className="text-2xl ">Toy name: {Toy_Name}</p>
                    <p className="mt-2 mb-2">Price: {Price}</p>
                    <p>Rating: {Rating}</p>
                    <p className="mt-2 mb-2">Available Quantity: {available_quantity}</p>
                    <p>Seller Name: {Seller_name}</p>
                    <p className="mt-2 mb-2">Seller Email: {Seller_email}</p>
                    <p>Detail description: {detail_description}</p>
                </div>

            </div>
       </div>
    );
};

export default ViewDetail;