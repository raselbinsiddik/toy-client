
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import fire1 from '../assets/fire1.jpg'
import fire2 from '../assets/fire2.jpg'
import racing1 from '../assets/racing1.jpg'
import racing2 from '../assets/racing2.jpg'
import police1 from '../assets/police1.jpg'
import police2 from '../assets/police2.jpg'


const SubTabs = () => {
    
    return (
       
        <div className='mt-5 text-center text-2xl font-bold mb-5'>
            <Tabs>
                <TabList>
                    <Tab>Sports car</Tab>
                    <Tab> Mini fire truck</Tab>
                    <Tab>Mini police car</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Mini fire truck</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={racing1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.4</p>
                                <p>Price: $5.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={racing2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.5</p>
                                <p>Price: $3.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Mini police car</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={fire1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.4</p>
                                <p>Price: $5.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={fire2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.5</p>
                                <p>Price: $3.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Sports car</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={police1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.4</p>
                                <p>Price: $5.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={police2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: Racing Car Red</h2>
                                <p>Rating: 4.5</p>
                                <p>Price: $3.9</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs> 
           </div>
    );
};

export default SubTabs;