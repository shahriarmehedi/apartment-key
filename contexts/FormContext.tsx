'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    bedrooms?: string;
    bathrooms?: string;
    maxBudget?: number;
    monthlyIncome?: number;
    additionalOccupants?: string;
    location?: string;
    moveInDate?: string;
    rentalHistory?: string[];
    pets?: string;
    referralSource?: string;
    additionalInfo?: string;
}

interface FormContextType {
    formData: FormData;
    currentStep: number;
    totalSteps: number;
    updateFormData: (field: string, value: any) => void;
    nextStep: () => void;
    previousStep: () => void;
    goToStep: (step: number) => void;
    resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children, totalSteps }: { children: ReactNode; totalSteps: number }) {
    const [formData, setFormData] = useState<FormData>({});
    const [currentStep, setCurrentStep] = useState(0);

    const updateFormData = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const goToStep = (step: number) => {
        if (step >= 0 && step < totalSteps) {
            setCurrentStep(step);
        }
    };

    const resetForm = () => {
        setFormData({});
        setCurrentStep(0);
    };

    return (
        <FormContext.Provider
            value={{
                formData,
                currentStep,
                totalSteps,
                updateFormData,
                nextStep,
                previousStep,
                goToStep,
                resetForm
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export function useForm() {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
}
