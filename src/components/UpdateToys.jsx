import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const UpdateToys = () => {
    const { user } = useContext(AuthContext);
    const update = useLoaderData();

    const {_id, name, price, photo, quantity, description, category, rating } = update;
    console.log(update);


    const handleUpdateToys = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const seller = form.seller.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const email = user?.email;
        const description = form.description.value;
        const category = form.category.value;

        const updateToys = { name, seller, price, photo, email, quantity, description, category, rating }

        console.log(updateToys);

        fetch(`http://localhost:5000/addToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 ) {
                    Swal.fire({
                        title: 'success',
                        text: 'user update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse m-3 ">
            <form onSubmit={handleUpdateToys}>
                <div className="grid grid-cols-1 lg:grid-cols-2 font-bold">
                    <div className="form-control w-96 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller' placeholder="seller name" className="input input-bordered" defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">avilable quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="qunatity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} placeholder="detail description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="Sub category" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="photo" className="input input-bordered"  />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update toys" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;