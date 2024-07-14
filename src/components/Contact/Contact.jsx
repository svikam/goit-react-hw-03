import s from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
    return (
        <div className={s.wrapper}>
            <div>
                <p>
                    <FaUser className={s.icon} />{name}
                </p>
                <p>
                    <FaPhoneAlt className={s.icon}/>{number}
                </p>
            </div>
            <button className={s.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default Contact;