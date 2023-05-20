

const MytoysRow = ({ toy }) => {
    const {category, photo, name, seller, price, quantity, email, rating, description } = toy;
    console.log(toy);
    return (
        <div className="mb-16">
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

export default MytoysRow;