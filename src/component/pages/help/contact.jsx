import { Form, redirect, useActionData } from 'react-router-dom';
import '../cssForPages.css';

const ContactPage = () => {
  const data = useActionData();
  return (
    <div className='contact-page'>
      <h1>Contact Me</h1>
      <Form method='post' action='/help/contact'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' rows='5'></textarea>

        <button type='submit'>Send</button>
      </Form>
      <div>{data && data.error && <p>{data.error}</p>}</div>
    </div>
  );
};

export default ContactPage;

export const ContactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message')
  };
  console.log(submission.message.length);

  if (submission.message.length < 10) {
    return { error: 'message must be over 10 character long' };
  } else {
    return redirect('/');
  }
};
