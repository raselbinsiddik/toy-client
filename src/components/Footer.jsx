import { MdToys } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="text-center text-xl font-bold bg-slate-900 p-5 mt-10">
            <div className="text-white">
                
                <h1>We are all reserved &copy;Copyright</h1>
                <h2>Please Contact with us</h2>
            </div>
            <div className="flex justify-center text-red-500 text-3xl">
                <MdToys className="mr-10"></MdToys>
                <FaYoutube></FaYoutube>
                <FaInstagram className="mr-2 ml-2"></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaFacebook className="mr-2 ml-2"></FaFacebook>
                <FaWhatsapp></FaWhatsapp>
            </div>
        </div>
    );
};

export default Footer;