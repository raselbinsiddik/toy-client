import Lottie from 'lottie-react'
import car1 from '../assets/103929-childrens-cars.json'
import car2 from '../assets/129806-baby-toy-train.json'


const Extra = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-bold mt-16 mb-16'>Cars Running Our Childrens Running</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-10 mb-16'>
                <Lottie className='w-full' animationData={car1} loop={true} />
                <Lottie className='w-full' animationData={car2} loop={true} />
            </div>
       </div>
    );
};

export default Extra;