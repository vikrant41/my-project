
import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Grid3X3, 
  User, 
  Users, 
  Building, 
  FileText,
  Gem,
  Layers
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Mobile Number Consultation",
    description: "Discover the hidden energies in your mobile number and how they influence your daily life and relationships.",
    icon: <Phone className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-50",
  },
  {
    title: "Loshu Grid Analysis",
    description: "Uncover the balance of energies in your life through this ancient Chinese numerological system.",
    icon: <Grid3X3 className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    title: "Name Fixing",
    description: "Optimize the vibration of your name to attract positive energies and opportunities into your life.",
    icon: <User className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-50",
  },
  {
    title: "Personal Consultation",
    description: "Get personalized insights into your life path, challenges, and opportunities through numerology.",
    icon: <FileText className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    title: "Business Consultation",
    description: "Align your business with favorable numerological energies to enhance success and prosperity.",
    icon: <Building className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-50",
  },
  {
    title: "Company Name Fixing",
    description: "Create a powerful numerological foundation for your partnership company with our expert name fixing service.",
    icon: <Users className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    title: "Crystals Reading",
    description: "Harness the power of crystals to balance your energies, heal, and manifest your desires.",
    icon: <Gem className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-50",
  },
  {
    title: "Tarot Reading",
    description: "Gain clarity and guidance on your life's questions through insightful tarot card readings.",
    icon: <Layers className="h-10 w-10 text-yellow-600" />,
    color: "bg-yellow-100",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800"
          >
            Our <span className="text-yellow-600">Services</span>
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
            Explore our comprehensive range of numerology and Vastu services designed to bring harmony, success, and fulfillment to your life.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className={`service-card h-full border-yellow-200 overflow-hidden ${service.color}`}>
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-yellow-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100 w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
