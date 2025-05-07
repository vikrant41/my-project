
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import ContactInfo from "@/components/ContactInfo";
import ContactFormFields from "@/components/ContactFormFields";
import ContactFormSubmitButton from "@/components/ContactFormSubmitButton";
import { handleFormSubmit, validateContactForm } from "@/lib/formHandler";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast({
        title: "Form Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await handleFormSubmit(formData);
      setIsSuccess(true);
      toast({
        title: "Form Submitted Successfully!",
        description: "We'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: "", email: "", phone: "", dob: "", service: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        title: "Submission Error",
        description: error.message || "Could not submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800"
          >
            Get Your <span className="text-yellow-600">Destiny Report</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Fill out the form below to receive your personalized numerology consultation and unlock the secrets of your destiny.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              <ContactInfo />
              <div className="md:col-span-3 p-8">
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <ContactFormFields 
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                  <ContactFormSubmitButton isSubmitting={isSubmitting} isSuccess={isSuccess} />
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
