'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FormProvider } from '@/contexts/FormContext';
import { FormContainer } from '@/components/form/FormContainer';
import {
    FormStep,
    SelectionStep,
    ListSelectionStep,
    SliderStep,
    DateStep,
    DropdownStep,
    MultiSelectionSingleStep,
    MultiSelectionGroupedStep,
    ReviewStep,
} from '@/components/form/FormSteps';
import formConfig from '@/data/form-config.json';
import { useForm } from '@/contexts/FormContext';

function FormContent() {
    const router = useRouter();
    const { currentStep, formData } = useForm();
    const stepConfig = formConfig.steps[currentStep];

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
            alert('Thank you! Your information has been submitted. We will contact you soon!');

            // Redirect to homepage
            router.push('/');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');
        }
    };

    const renderStep = () => {
        switch (stepConfig.type) {
            case 'form':
                return <FormStep config={stepConfig} />;
            case 'selection':
                return <SelectionStep config={stepConfig} />;
            case 'list-selection':
                return <ListSelectionStep config={stepConfig} />;
            case 'slider':
                return <SliderStep config={stepConfig} />;
            case 'income':
                return <SliderStep config={stepConfig} />;
            case 'date':
                return <DateStep config={stepConfig} />;
            case 'dropdown':
                return <DropdownStep config={stepConfig} />;
            case 'multi-selection-single':
                return <MultiSelectionSingleStep config={stepConfig} />;
            case 'multi-selection-grouped':
                return <MultiSelectionGroupedStep config={stepConfig} />;
            case 'review':
                return <ReviewStep allSteps={formConfig.steps} />;
            default:
                return null;
        }
    };

    return (
        <FormContainer
            title={stepConfig.title}
            stepConfig={stepConfig}
            footer={formConfig.footer}
            onSubmit={handleSubmit}
        >
            {renderStep()}
        </FormContainer>
    );
}

export default function GetStartedPage() {
    return (
        <FormProvider totalSteps={formConfig.steps.length}>
            <FormContent />
        </FormProvider>
    );
}
