'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useForm } from '@/contexts/FormContext';
import Swal from 'sweetalert2';

interface FormContainerProps {
    children: React.ReactNode;
    title: string;
    stepConfig: any;
    footer: {
        termsText: string;
        termsLink: string;
        termsLinkText: string;
        privacyLink: string;
        privacyLinkText: string;
        consentText: string;
    };
    onSubmit?: () => void;
}

export function FormContainer({ children, title, stepConfig, footer, onSubmit }: FormContainerProps) {
    const { currentStep, totalSteps, previousStep, nextStep, formData } = useForm();
    const isLastStep = currentStep === totalSteps - 1;

    const validateStep = (): boolean => {
        const config = stepConfig;

        // Skip validation for review step
        if (config.type === 'review') {
            return true;
        }

        // Validate based on step type
        switch (config.type) {
            case 'form':
                // Check all form fields
                for (const field of config.fields) {
                    if (field.required) {
                        const value = formData[field.field as keyof typeof formData];
                        if (!value || (typeof value === 'string' && value.trim() === '')) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Required Field',
                                text: `Please fill in your ${field.label || field.field}`,
                                confirmButtonColor: '#FF9E6D',
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return false;
                        }

                        // Email validation
                        if (field.type === 'email' && value) {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(value as string)) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Invalid Email',
                                    text: 'Please enter a valid email address',
                                    confirmButtonColor: '#FF9E6D',
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                });
                                return false;
                            }
                        }

                        // Phone validation (basic)
                        if (field.type === 'tel' && value) {
                            const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                            const cleanPhone = (value as string).replace(/\D/g, '');
                            if (cleanPhone.length < 10) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Invalid Phone',
                                    text: 'Please enter a valid phone number',
                                    confirmButtonColor: '#FF9E6D',
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                });
                                return false;
                            }
                        }
                    }
                }
                return true;

            case 'selection':
            case 'list-selection':
                const value = formData[config.field as keyof typeof formData];
                if (!value) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Selection Required',
                        text: 'Please make a selection to continue',
                        confirmButtonColor: '#FF9E6D',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    return false;
                }
                return true;

            case 'slider':
            case 'income':
                const sliderValue = formData[config.field as keyof typeof formData];
                // Allow default values to pass validation
                if (sliderValue === undefined || sliderValue === null) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Selection Required',
                        text: 'Please adjust the slider to continue',
                        confirmButtonColor: '#FF9E6D',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    return false;
                }
                return true;

            case 'date':
                const dateValue = formData[config.field as keyof typeof formData];
                if (!dateValue) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Date Required',
                        text: 'Please select a date',
                        confirmButtonColor: '#FF9E6D',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    return false;
                }
                return true;

            case 'multi-selection-single':
                const multiValue = formData[config.field as keyof typeof formData];
                if (!multiValue || (Array.isArray(multiValue) && multiValue.length === 0)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Selection Required',
                        text: 'Please make at least one selection',
                        confirmButtonColor: '#FF9E6D',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    return false;
                }
                return true;

            default:
                return true;
        }
    };

    const handleNext = () => {
        // Validate current step before proceeding
        if (!validateStep()) {
            return;
        }

        if (isLastStep && onSubmit) {
            onSubmit();
        } else {
            nextStep();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Progress Bar */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-brand-orange">
                            Step {currentStep + 1} of {totalSteps}
                        </span>
                        <span className="text-sm text-gray-500">
                            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
                        </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <div className="max-w-4xl mx-auto w-full px-6 py-12 flex-1">
                    {/* Title */}
                    <motion.div
                        key={`title-${currentStep}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-12 text-center"
                    >
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </motion.div>

                    {/* Step Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="mt-12 flex items-center justify-between">
                        <button
                            onClick={previousStep}
                            disabled={currentStep === 0}
                            className={`
                flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${currentStep === 0
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }
              `}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="
                flex items-center gap-2 px-8 py-3 rounded-lg font-medium
                bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan
                text-white shadow-lg hover:shadow-xl
                transition-all hover:scale-105
              "
                        >
                            {isLastStep ? 'Submit' : 'Next step'}
                            {!isLastStep && <ArrowRight className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-white border-t border-gray-200 py-6">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                            {footer.termsText}{' '}
                            <a href={footer.termsLink} className="text-brand-orange hover:underline">
                                {footer.termsLinkText}
                            </a>
                            {' & '}
                            <a href={footer.privacyLink} className="text-brand-orange hover:underline">
                                {footer.privacyLinkText}
                            </a>
                            {' '}
                            {footer.consentText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
