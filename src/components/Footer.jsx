
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="text-center text-xl font-bold bg-slate-900 p-3">
            <div className="text-white">
                <h1>We are all reserved &copy;Copyright</h1>
                <h2>Please Contact with us</h2>
            </div>
            <div className="flex justify-center text-red-500 text-3xl m-3">
                <FaYoutube></FaYoutube>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaFacebook></FaFacebook>
                <FaWhatsapp></FaWhatsapp>
            </div>
        </div>
    );
};

export default Footer;