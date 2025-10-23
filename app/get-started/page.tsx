'use client';

import React from 'react';
import { FormProvider } from '@/contexts/FormContext';
import { FormContainer } from '@/components/form/FormContainer';
import {
    FormStep,
    SelectionStep,
    ListSelectionStep,
    SliderStep,
    DateStep,
    MultiSelectionSingleStep,
    ReviewStep,
} from '@/components/form/FormSteps';
import formConfig from '@/data/form-config.json';
import { useForm } from '@/contexts/FormContext';

function FormContent() {
    const { currentStep, formData } = useForm();
    const stepConfig = formConfig.steps[currentStep];

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // TODO: Add your form submission logic here
        alert('Thank you! Your information has been submitted. Check console for data.');
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
            case 'multi-selection-single':
                return <MultiSelectionSingleStep config={stepConfig} />;
            case 'review':
                return <ReviewStep />;
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
