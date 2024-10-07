import React, { useState } from 'react';
import PlanCard from '../PlanCard';
import PlanForm from '../PlanForm';
import { sendEmail } from '../../utils/emailService';

const Quote = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Enterprise',
      desc: 'Perfect for growing businesses requiring a comprehensive web presence and brand identity.',
      price: 350,
      isMostPop: true,
      features: [
        'Custom Website Design',
        'Brand Strategy Consultation',
        'Responsive Mobile Design',
        'SEO Optimization',
        'Ongoing Maintenance & Support',
        'Unlimited Revisions',
        'Advanced Security Features',
      ],
    },
    {
      name: 'Startup',
      desc: 'Ideal for startups and individuals looking for a professional digital presence.',
      price: 150,
      isMostPop: false,
      features: [
        'Custom Website Design',
        'Basic Brand Identity',
        'Responsive Mobile Design',
        'SEO Optimization',
        'Initial Maintenance',
        'Limited Revisions',
      ],
    },
  ];

  // Handle form submission
  const handleFormSubmit = (formData) => {
    sendEmail({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      selectedPlan: selectedPlan.name,
      price: selectedPlan.price,
    }).then(() => {
      alert('Email sent successfully!');
    }).catch((error) => {
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <section className="py-14">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h3 className="text-orange-600 font-semibold">Hiring Me</h3>
        <h2 className="text-4xl  text-gray-800  font-extrabold mx-auto md:text-5xl">
          Let's Talk About
          <span className=" text-orange-600 "> your Project.</span>
        </h2>

        {!selectedPlan ? (
          <div className="relative ">
            <div className="mt-5 justify-center sm:flex gap-5">
              {plans.map((plan, idx) => (
                <PlanCard key={idx} plan={plan} handleSelectPlan={setSelectedPlan} />
              ))}
            </div>
          </div>
        ) : (
          <PlanForm selectedPlan={selectedPlan} onSubmit={handleFormSubmit} />
        )}
      </div>
    </section>
  );
};

export default Quote;
