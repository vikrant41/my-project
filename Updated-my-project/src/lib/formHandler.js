
import React from 'react';

export const validateContactForm = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.phone.trim()) errors.phone = "Phone number is required";
  if (!formData.service) errors.service = "Please select a service";
  return errors;
};

export const handleFormSubmit = async (formData) => {
  console.log("Form data to be submitted:", formData);

  const mailtoLink = `mailto:glamvybe@gmail.com?subject=New Destiny Report Request&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate of Birth: ${formData.dob}\nService: ${formData.service}\nMessage: ${formData.message}`
  )}`;

  try {
    window.location.href = mailtoLink;
  } catch (error) {
    console.error("Failed to open mailto link:", error);
    throw new Error("Could not open email client. Please try copying the email address.");
  }
  
  return new Promise(resolve => setTimeout(resolve, 1000));
};
