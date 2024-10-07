import React, { useState } from 'react';
import Footer from '../Footer';
import Swal from 'sweetalert2'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState('');

    // Handle input change and clear error on typing
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessages({ ...errorMessages, [e.target.name]: '' });
    };

    // Validate form before submission
    const validateForm = () => {
        let valid = true;
        const errors = { name: '', email: '', company: '', message: '' };

        if (!formData.name) {
            errors.name = 'This field is required. Please input your name.';
            valid = false;
        }
        if (!formData.email) {
            errors.email = 'This field is required. Please input your email.';
            valid = false;
        }
        if (!formData.company) {
            errors.company = 'This field is required. Please input your company.';
            valid = false;
        }
        if (!formData.message) {
            errors.message = 'This field is required. Please input your message.';
            valid = false;
        }

        setErrorMessages(errors);
        return valid;
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        const payload = {
            access_key: '1167a560-8141-4e2d-96b9-9c7ff2f9680c',  // Your Web3Forms access key
            ...formData
        };

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (data.success) {
                Swal.fire({
                    title: "Good job!",
                    text: "Your Message has been recieved !",
                    icon: "success"
                });

                setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send message. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })

            }
        } catch (err) {

            Swal.fire({
                title: "The Internet?",
                text: "Please check your internet connection.",
                icon: "question"
            });




        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="space-y-5 my-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                    Contact <span className="text-transparent bg-clip-text bg-orange-600">Mike</span>
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="">
                <div className="mb-4">
                    <label className="text-gray-800 block mb-2">Your Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-transparent border-b text-gray-800 border-gray-600 focus:border-orange-500 outline-none"
                        placeholder="Enter your name"
                    />
                    {errorMessages.name && <p className="text-red-500">{errorMessages.name}</p>}
                </div>

                <div className="mb-4">
                    <label className=" text-gray-800 block mb-2">Your Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-transparent  text-gray-800 border-b border-gray-600 focus:border-orange-500 outline-none"
                        placeholder="Enter your email"
                    />
                    {errorMessages.email && <p className="text-red-500">{errorMessages.email}</p>}
                </div>

                <div className="mb-4">
                    <label className=" text-gray-800 block mb-2">Your Company *</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-transparent border-b  text-gray-800 border-gray-600 focus:border-orange-500 outline-none"
                        placeholder="Enter your company"
                    />
                    {errorMessages.company && <p className="text-red-500">{errorMessages.company}</p>}
                </div>

                <div className="mb-4">
                    <label className=" text-gray-800 block mb-2">Your Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-transparent border-b  text-gray-800 border-gray-600 focus:border-orange-500 outline-none"
                        rows="4"
                        placeholder="Enter your message"
                    ></textarea>
                    {errorMessages.message && <p className="text-red-500">{errorMessages.message}</p>}
                </div>

                <button type="submit" className="px-20 py-3 bg-orange-600 hover:bg-orange-500 text-white">
                    Make it Fly
                </button>
            </form>

          

            <Footer />
        </div>
    );
};

export default ContactPage;