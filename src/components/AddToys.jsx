

const AddToys = () => {

    const handleAddAToys = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const seller = form.seller.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const description = form.description.value;
        const category = form.category.value;

        const addToys = { name, seller, price, photo, email, quantity, description, category,rating }

        console.log(addToys);

        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse m-3 ">
            <form onSubmit={handleAddAToys}>
                <div className="grid grid-cols-1 lg:grid-cols-2 font-bold">
                    <div className="form-control w-96 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller' placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">avilable quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="qunatity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name='description' placeholder="detail description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub category</span>
                        </label>
                        <input type="text" name='category' placeholder="Sub category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                    </div>
               </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add a toys" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;