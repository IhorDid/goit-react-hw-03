import { Formik, Form, Field } from "formik";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={() => {}}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="username" id={numberFieldId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
