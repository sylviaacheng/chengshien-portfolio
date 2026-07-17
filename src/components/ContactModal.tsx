import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        // Reset states and close
        setIsSuccess(false);
        setName('');
        setEmail('');
        setMessage('');
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with a heavy black outline style or transparent gray */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/45 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-lg bg-white border-3 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-10 p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
                Get in <span className="neo-highlight-pink text-white">Touch</span>
              </h3>
              <button 
                onClick={onClose}
                className="p-2 border-2 border-black rounded-lg bg-white hover:bg-neo-pink hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div 
                  key="contact-info"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 py-4"
                >
                  <p className="text-sm font-medium text-gray-700">
                    有任何项目需求或合作意向，请随时通过以下方式联系我：
                  </p>

                  <div className="bg-[#FAFAF9] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">电话</span>
                      <a href="tel:13434121070" className="text-xl font-bold font-mono text-black hover:text-neo-pink transition-colors">
                        134 3412 1070
                      </a>
                    </div>
                    
                    <div className="h-0.5 w-full bg-black/10 rounded-full" />
                    
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">邮箱</span>
                      <a href="mailto:chengshiende@163.com" className="text-xl font-bold font-mono text-black hover:text-neo-blue transition-colors">
                        chengshiende@163.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-neo-green border-2 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold font-display uppercase">Message Received!</h4>
                  <p className="text-sm font-medium text-gray-700 max-w-xs">
                    Thank you, <strong className="text-black">{name}</strong>. Your transmission was successfully beamed over. I'll get back to you in a heartbeat!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
