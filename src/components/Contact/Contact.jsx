import s from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({name, number}) => {
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
            <button className={s.btn}>Delete</button>
        </div>
    )
}

export default Contact;