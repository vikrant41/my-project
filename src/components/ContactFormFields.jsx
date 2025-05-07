
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const ContactFormFields = ({ formData, handleChange, errors }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormItem>
          <FormLabel htmlFor="name" className="text-yellow-800">Full Name</FormLabel>
          <FormControl>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={errors.name ? "border-red-500" : "border-yellow-200"}
            />
          </FormControl>
          {errors.name && <FormMessage>{errors.name}</FormMessage>}
        </FormItem>
        
        <FormItem>
          <FormLabel htmlFor="email" className="text-yellow-800">Email</FormLabel>
          <FormControl>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={errors.email ? "border-red-500" : "border-yellow-200"}
            />
          </FormControl>
          {errors.email && <FormMessage>{errors.email}</FormMessage>}
        </FormItem>
        
        <FormItem>
          <FormLabel htmlFor="phone" className="text-yellow-800">Phone Number</FormLabel>
          <FormControl>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9537351125"
              className={errors.phone ? "border-red-500" : "border-yellow-200"}
            />
          </FormControl>
          {errors.phone && <FormMessage>{errors.phone}</FormMessage>}
        </FormItem>
        
        <FormItem>
          <FormLabel htmlFor="dob" className="text-yellow-800">Date of Birth</FormLabel>
          <FormControl>
            <Input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="border-yellow-200"
            />
          </FormControl>
        </FormItem>
      </div>
      
      <FormItem>
        <FormLabel htmlFor="service" className="text-yellow-800">Service Required</FormLabel>
        <FormControl>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`flex h-10 w-full rounded-md border ${
              errors.service ? "border-red-500" : "border-yellow-200"
            } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <option value="">Select a service</option>
            <option value="mobile">Mobile Number Consultation</option>
            <option value="loshu">Loshu Grid Analysis</option>
            <option value="name">Name Fixing</option>
            <option value="personal">Personal Consultation</option>
            <option value="business">Business Consultation</option>
            <option value="vastu">Vastu Shastra</option>
            <option value="crystals">Crystals</option>
            <option value="tarot">Tarot Reading</option>
          </select>
        </FormControl>
        {errors.service && <FormMessage>{errors.service}</FormMessage>}
      </FormItem>
      
      <FormItem>
        <FormLabel htmlFor="message" className="text-yellow-800">Your Message</FormLabel>
        <FormControl>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about what you're looking for..."
            className="border-yellow-200 min-h-[120px]"
          />
        </FormControl>
      </FormItem>
    </>
  );
};

export default ContactFormFields;
