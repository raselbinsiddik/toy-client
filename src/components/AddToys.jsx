

const AddToys = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse m-3 ">
            <form className="grid grid-cols-1 lg:grid-cols-2 font-bold">
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
                    <input type="text" name='seller name' placeholder="seller name" className="input input-bordered" />
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
                    <input type="text" name='detail' placeholder="detail" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add A toys</button>
                </div>
            </form>
        </div>
    );
};

export default AddToys;