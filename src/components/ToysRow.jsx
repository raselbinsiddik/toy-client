import { Link } from "react-router-dom";


const ToysRow = ({ car, index }) => {
    const {_id, name, price, seller,quantity,category } = car;
   
    return (
        <tr className="text-xl font-bold">
            <td>{index}</td>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{category}</td>
            <td><Link to={`/toy/${_id}`}><button className="btn btn-primary">View details</button></Link></td>
            
        </tr>
    );
};

export default ToysRow;