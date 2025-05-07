
import React from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const ContactFormSubmitButton = ({ isSubmitting, isSuccess }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-6 h-auto text-lg"
      disabled={isSubmitting || isSuccess}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          Processing...
        </span>
      ) : isSuccess ? (
        <span className="flex items-center justify-center">
          <CheckCircle className="mr-2 h-5 w-5" />
          Submitted Successfully!
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <Send className="mr-2 h-5 w-5" />
          Submit Request
        </span>
      )}
    </Button>
  );
};

export default ContactFormSubmitButton;
