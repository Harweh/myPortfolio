/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2, MapPinIcon } from 'lucide-react';

// Define form data shape (same as backend!)
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    }

// Define possible form states
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

    export default function Contact() {
    // Form data state - tracks what user types
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Tracks the current status of form submission
    const [status, setStatus] = useState<FormStatus>('idle');

    // Stores any error message from server or client validation
    const [errorMessage, setErrorMessage] = useState('');

    // Stores client-side validation errors for each field
    const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({});

    // Updates form data as user types (works for ALL fields)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for that field when user starts typing
        if (fieldErrors[name as keyof FormData]) {
        setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Client-side validation (runs BEFORE sending to server)
    const validateForm = (): boolean => {
        const errors: Partial<FormData> = {};

        if (!formData.name.trim()) {
        errors.name = 'Name is required';
        } else if (formData.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters';
        }

        if (!formData.email.trim()) {
        errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
        errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
        } else if (formData.message.trim().length > 1000) {
        errors.message = 'Message must be less than 1000 characters';
        }

        setFieldErrors(errors);
        // Returns true only if NO errors
        return Object.keys(errors).length === 0;
    };

    // Handles form submission
    const handleSubmit = async (e: FormEvent) => {
        // Prevent page from refreshing (default form behavior)
        e.preventDefault();

        // Run client-side validation first
        if (!validateForm()) return;

        // Set status to loading (shows spinner)
        setStatus('loading');
        setErrorMessage('');

        try {
        // Send POST request to our API route
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Parse the response JSON
        const data = await response.json();

        if (response.ok && data.success) {
            // SUCCESS! Show success state
            setStatus('success');
            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            // SERVER ERROR or VALIDATION ERROR from backend
            setStatus('error');
            setErrorMessage(data.error || 'Something went wrong');
        }
        } catch (error) {
        // NETWORK ERROR (no internet, server down, etc.)
        setStatus('error');
        setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    // Reset form back to initial state
    const handleReset = () => {
        setStatus('idle');
        setErrorMessage('');
        setFieldErrors({});
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    // SUCCESS SCREEN - shown after successful submission
    if (status === 'success') {
        return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-6 p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
            {/* Success Icon */}
            <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-400" size={40} />
                </div>
            </div>
            <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
            <p className="text-gray-400">
                Thank you for reaching out! Ill get back to you within 24 hours.
            </p>
            {/* Back to Form Button */}
            <button
                onClick={handleReset}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
            >
                Send Another Message
            </button>
            </div>
        </div>
        );
    }

    // MAIN CONTACT PAGE
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-grey-900">

            <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 lg:px-2 pt-20 md:pt-25 lg:pt-100">

                    {/* Page Header */}
                <div className="text-center mt-6 md:mt-18 lg:mt-15  space-y-2 md:space-y-6 lg:space-y-6">
                    <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold text-white">
                        Contact Me 
                            {/* <span className=" bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 bg-clip-text text-transparent">Touch</span> */}
                    </h1>
                    <p className="pb-6 text-sm md:text-xl lg:text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Let's create something amazing together!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* LEFT SIDE - Contact Info */}

                    <div className="space-y-2 md:space-y-6 lg:space-y-6  px-6 md:px-8 lg:px-0 ">
                                {/* Info Cards */}
                                <div className="space-y-2 md:space-y-6 lg:space-y-6">
                                {/* Email Card */}
                                <div className="p-2 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                    <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-500 to-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Mail className="text-green-500 md:size-20 lg:size-24" size={15} />
                                        </div>
                                    <div>
                                        <h3 className="text-white text-sm md:text-base lg:text-base font-semibold">Email</h3>
                                        <p className="text-gray-400 text-sm md:text-base lg:text-base">E.awetobi@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                                {/* Phone Card */}
                                <div className="p-2 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                    <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from--500 to--500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="text-green-500 md:size-20 lg:size-24" size={15} />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm md:text-base lg:text-base font-semibold">Phone</h3>
                                        <p className="text-gray-400 text-sm md:text-base lg:text-base">+234 (810) 560-2133</p>
                                    </div>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="p-4 sm:p-3 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                    <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from--500 to--500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MapPin className="text-green-500 md:size-20 lg:size-24" size={15} />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm md:text-base lg:text-base font-semibold">Location</h3>
                                        <p className="text-gray-400 text-sm md:text-base lg:text-base">Lagos, Nigeria</p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                {/* Available Badge */}
                                <div className="p-4 md:p-6 lg:p-6 bg-gray-500/10 border-t border-white/10 border-green-500 rounded-2xl md:rounded-3xl">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-green-400 text-sm md:text-base lg:text-base font-semibold ">Available for freelance work</p>
                                </div>
                                </div>
                        </div>

                        {/* RIGHT SIDE - Contact Form */}
                        <div className="p-7 lg:p-1 bg-white/ border-0 border-white/10 rounded-xl">
                            {/* Error Banner */}
                            {status === 'error' && (
                            <div className="mb-10 p-4 bg-red-500/ border-2 border-white/10 border-red-500/ rounded-xl flex items-center gap-3">
                                <XCircle className="text-red-400 flex-shrink-0" size={22} />
                                <p className="text-red-400">{errorMessage}</p>
                            </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 md:mb-2 lg:mb-2">
                                Your Name
                                </label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className={`w-full px-4 py-3 bg-white/5 border ${
                                    fieldErrors.name ? 'border-red-500' : 'border-white/10'
                                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors`}
                                />
                                {/* Field Error Message */}
                                {fieldErrors.name && (
                                <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2mb-1 md:mb-2 lg:mb-2">
                                Email Address
                                </label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`w-full px-4 py-3 bg-white/5 border ${
                                    fieldErrors.email ? 'border-red-500' : 'border-white/10'
                                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors`}
                                />
                                {fieldErrors.email && (
                                <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 md:mb-2 lg:mb-2">
                                Subject
                                </label>
                                <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Inquiry"
                                className={`w-full px-4 py-3 bg-white/5 border ${
                                    fieldErrors.subject ? 'border-red-500' : 'border-white/10'
                                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors`}
                                />
                                {fieldErrors.subject && (
                                <p className="mt-1 text-sm text-red-400">{fieldErrors.subject}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <div className="flex justify-between mb-1 md:mb-2 lg:mb-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                {/* Character Counter */}
                                <span className={`text-sm ${formData.message.length > 1000 ? 'text-amber-700' : 'text-gray-500'}`}>
                                    {formData.message.length}/1000
                                </span>
                                </div>
                                <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={5}
                                className={`w-full px-4 py-3 bg-white/5 border ${
                                    fieldErrors.message ? 'border-red-500' : 'border-white/10'
                                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none`}
                                />
                                {fieldErrors.message && (
                                <p className="mt-1 text-sm text-red-400">{fieldErrors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px8 py-3 bg-gradient-to-r from-green-600 via-black to-green-700/90  text-white font-semibold rounded-xl overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 transition-all"
                            >
                                <span className="relative z-50 flex items-center justify-center gap-2">
                                {status === 'loading' ? (
                                    <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                    </>
                                ) : (
                                    <>
                                    <Send size={16} />
                                    Send Message
                                    </>
                                )}
                                </span>
                            </button>
                            </form>
                        </div>
                </div>
            </div>

        </div>

    ); 
    }