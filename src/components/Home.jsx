
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'
import useTitle from '../hooks/useTitle';
import Extra from './Extra';
import ExtraSection from './ExtraSection';
import Galary from './Galary';
import SubTabs from './SubTabs';


const Home = () => {
    useTitle('home')
    return (
        <div>
            <div className="carousel w-full h-[600px] mt-4 mb-5 rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} className="w-full " />
                    <div className="absolute roounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-1/2'>
                            <h1 className="text-white font-bold text-7xl">Our Chlidren our life</h1>
                            <p className="text-white">childrns happies in every life.childrens is our. And our products is made for your children.</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car2} className="w-full rounded-xl" />
                    <div className="absolute roounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-1/2'>
                            <h1 className="text-white font-bold text-7xl">Our Chlidren our life</h1>
                            <p className="text-white">childrns happies in every life.childrens is our. And our products is made for your children.</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car3} className="w-full rounded-xl" />
                    <div className="absolute roounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-1/2'>
                            <h1 className="text-white font-bold text-7xl">Our Chlidren our life</h1>
                            <p className="text-white">childrns happies in every life.childrens is our. And our products is made for your children.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={car4} className="w-full rounded-xl" />
                    <div className="absolute roounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-1/2'>
                            <h1 className="text-white font-bold text-7xl">Our Chlidren our life</h1>
                            <p className="text-white">childrns happies in every life.childrens is our. And our products is made for your children.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Galary></Galary>
            <SubTabs></SubTabs>
            <Extra></Extra>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;