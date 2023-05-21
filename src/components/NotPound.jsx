import notpound from '../assets/notpound.jpg'

const NotPound = () => {
    return (
        <div className="text-center">
            <img className='w-96 mx-auto mt-10 mb-10 rounded-xl' src={notpound} alt="" />
            <h1 className="text-4xl font-bold">
                Your information is not pound.
                Please try again another
           </h1>
        </div>
    );
};

export default NotPound;