
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, UserCheck, TrendingUp, Smile, Award, MessageCircle, ThumbsUp, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "The business consultation from GlamVybe completely transformed my company's energy. Our profits increased by 95% after implementing the suggested changes!",
    rating: 5,
    icon: <TrendingUp className="h-6 w-6 text-white" />
  },
  {
    name: "Rahul Mehta",
    role: "IT Professional",
    content: "I was skeptical at first, but after getting my mobile number analyzed, I noticed a significant improvement in my communication and relationships.",
    rating: 5,
    icon: <UserCheck className="h-6 w-6 text-white" />
  },
  {
    name: "Ananya Patel",
    role: "Entrepreneur",
    content: "The name fixing service for my partnership company was a game-changer. We've seen remarkable growth and harmony among partners since the consultation.",
    rating: 4,
    icon: <Award className="h-6 w-6 text-white" />
  },
  {
    name: "Vikram Singh",
    role: "Architect",
    content: "Vastu Shastra consultation for my new home brought an incredible sense of peace and positivity. My family feels happier and more connected.",
    rating: 5,
    icon: <Smile className="h-6 w-6 text-white" />
  },
  {
    name: "Sneha Reddy",
    role: "Student",
    content: "The Loshu Grid analysis was eye-opening! It helped me understand my strengths and weaknesses, guiding me towards a better career path.",
    rating: 5,
    icon: <MessageCircle className="h-6 w-6 text-white" />
  },
  {
    name: "Arjun Desai",
    role: "Artist",
    content: "Personal consultation helped me overcome creative blocks. The insights were profound and practical. Highly recommend GlamVybe!",
    rating: 4,
    icon: <ThumbsUp className="h-6 w-6 text-white" />
  },
  {
    name: "Kavita Iyer",
    role: "Homemaker",
    content: "The crystal recommendations have made a noticeable difference in my home's energy. I feel more balanced and calm throughout the day.",
    rating: 5,
    icon: <Heart className="h-6 w-6 text-white" />
  },
  {
    name: "Manish Gupta",
    role: "Shop Owner",
    content: "Business name numerology and Vastu for my shop boosted customer footfall significantly. GlamVybe's advice is pure gold!",
    rating: 5,
    icon: <TrendingUp className="h-6 w-6 text-white" />
  },
  {
    name: "Deepika Rao",
    role: "Writer",
    content: "Tarot reading provided much-needed clarity during a confusing phase in my life. The guidance was spot-on and empowering.",
    rating: 4,
    icon: <UserCheck className="h-6 w-6 text-white" />
  },
  {
    name: "Rohan Verma",
    role: "Marketing Manager",
    content: "Name fixing for my personal brand enhanced my professional image. I've received more opportunities since then. Thank you, GlamVybe!",
    rating: 5,
    icon: <Award className="h-6 w-6 text-white" />
  }
];

const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + newDirection;
      if (nextPage < 0) {
        return totalPages - 1;
      }
      if (nextPage >= totalPages) {
        return 0;
      }
      return nextPage;
    });
  };
  
  const setPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  }

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800"
          >
            Client <span className="text-yellow-600">Testimonials</span>
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
            Hear what our clients have to say about their transformative experiences with GlamVybe's numerology and Vastu services.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden relative h-[500px] md:h-[450px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={startIndex + index}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-yellow-200 flex flex-col h-full"
                  >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full p-3 shadow-md z-10">
                      {testimonial.icon || <Star className="h-6 w-6 text-white" />}
                    </div>
                    
                    <div className="flex justify-center mb-4 pt-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-center italic flex-grow text-sm md:text-base leading-relaxed">"{testimonial.content}"</p>
                    
                    <div className="flex flex-col items-center mt-auto">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2 border-2 border-yellow-200">
                        <span className="text-yellow-800 font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-yellow-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20 bg-white/80 hover:bg-yellow-100 border-yellow-400 text-yellow-600 rounded-full shadow-md"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20 bg-white/80 hover:bg-yellow-100 border-yellow-400 text-yellow-600 rounded-full shadow-md"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
        
        {totalPages > 1 && (
           <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'bg-yellow-500 scale-125' : 'bg-yellow-200 hover:bg-yellow-300'
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
