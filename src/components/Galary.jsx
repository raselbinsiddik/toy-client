import ban1 from '../assets/ban1.jpg'
import ban2 from '../assets/ban2.jpg'
import ban3 from '../assets/ban3.jpg'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'

const Galary = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <h1 className='text-4xl font-bold mb-4'>Our Toys for Kids</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio sit voluptate cum eum dicta earum sequi doloremque, praesentium alias voluptatem ipsum est delectus. Voluptatibus laborum nam qui adipisci cum?</p>
            </div>
            <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 mt-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src={ban1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wooden Train</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src={ban2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids Room</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src={ban3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids car</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src={car1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids car</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img className='w-full h-72' src={car2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids car</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src={car3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids car</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Like</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galary;