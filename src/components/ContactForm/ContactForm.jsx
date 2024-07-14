import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
const ContactForm = ({ onAdd }) => {
    const registerSchema = Yup.object({
        name: Yup.string()
            .required("This field is required")
            .min(3, "Name must be more than 3 chars!")
            .max(50, "Name must be less than 50 chars!"),
        number: Yup.string()
            .required("This field is required")
            .min(3, "Number must be more than 3 chars!")
            .max(50, "Number must be less than 50 chars!")
    });    
    const initialValues = {
        name: "",
        number: ""
    };
    const handleSubmit = (data, actions) => {
        console.log(data);
        onAdd({
            id: nanoid(),
            name: data.name,
            number: data.number,
        });
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={registerSchema}
            >
            <Form className={s.wrapper}>
                <label className={s.label}>
                    <p className={s.title}>Name</p>
                    <Field name="name" className={s.field}></Field>
                    <ErrorMessage className="s.error" name="name" component="span" />
                </label>
                <label className={s.label}>
                    <p className={s.title}>Number</p>
                    <Field name="number" className={s.field}></Field>
                    <ErrorMessage className="s.error" name="number" component="span" />
                </label>
                <button type="submit" className={s.btn}>Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;