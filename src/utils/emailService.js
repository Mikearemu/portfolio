import emailjs from 'emailjs-com';

// Function to send email
export const sendEmail = (formData) => {
  return emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    formData,
    process.env.REACT_APP_USER_ID
  );
};
