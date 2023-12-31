
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const SubTabs = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://the-toy-server1.vercel.app/toyCategory')
            .then(res => res.json())
            .then(data => setCars(data));
    },[])
    
    return (
       
        <div className='mt-5 text-center text-xl font-bold mb-5 '>
            <div className='text-center mt-10 mb-10'>
                <h1 className='text-4xl font-bold mb-5 text-yellow-500'> Kids Cars Category</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos consequatur aliquam voluptas sed officia asperiores tenetur quibusdam corporis a. Dicta aliquam ipsum cupiditate quibusdam accusamus doloribus itaque eum dolore?</p>

            </div>
            <Tabs>
                <TabList>
                    <Tab>Sports car</Tab>
                    <Tab> Mini fire truck</Tab>
                    <Tab>Mini police car</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Sports car</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto'>
                        {
                            cars.filter(d => d.category =='sports').map(car => <p key={car._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                                    <figure className="px-10 pt-10">
                                        <img src={car.Picture} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Name: {car.Toy_Name}</h2>
                                        <p>Rating: {car.Rating}</p>
                                        <p>Price: {car.Price}</p>
                                        <div className="card-actions">
                                            <Link to={`/detail/${car._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </p>)
                        }
                        
                       
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Mini fire truck</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto'>
                        {
                            cars.filter(d => d.category == 'fire truck').map(car => <p key={car._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                                    <figure className="px-10 pt-10">
                                        <img src={car.Picture} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Name: {car.Toy_Name }</h2>
                                        <p>Rating: {car.Rating}</p>
                                        <p>Price: {car.Price}</p>
                                        <div className="card-actions">
                                            <Link to={`/detail/${car._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </p>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Mini police car</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto'>
                        {
                            cars.filter(d => d.category == 'plice').map(car => <p key={car._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                                    <figure className="px-10 pt-10">
                                        <img src={car.Picture} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Name: {car.Toy_Name}</h2>
                                        <p>Rating: {car.Rating}</p>
                                        <p>Price: {car.Price}</p>
                                        <div className="card-actions">
                                            <Link to={`/detail/${car._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </p>)
                        }

                    </div>
                </TabPanel>
            </Tabs> 
           </div>
    );
};

export default SubTabs;