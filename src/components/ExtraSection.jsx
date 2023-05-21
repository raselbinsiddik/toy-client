import car1 from '../assets/ban1.jpg';
import car2 from '../assets/car1.jpg';
import car3 from '../assets/fire1.jpg';

const ExtraSection = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Some Beautifull Kids Car In our Market</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iusto, voluptas placeat doloremque quasi, in, facilis pariatur quis inventore adipisci tenetur aliquid illum odit maxime! Vel fugit autem facere doloribus.</p>
            </div>
            <div>
                <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 ms-16'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                        <figure><img src={car1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Wooden Train</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                        <figure><img src={car2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kids Room</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">Like</button>
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
        </div>
    );
};

export default ExtraSection;