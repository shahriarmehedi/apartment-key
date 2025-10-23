'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@/contexts/FormContext';
import {
    SelectionCard,
    ListSelectionCard,
    Slider,
    DateInput,
    Input,
    Textarea,
    Select
} from './FormComponents';

interface StepProps {
    config: any;
}

export function FormStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();

    const getStringValue = (key: string): string => {
        const value = formData[key as keyof typeof formData];
        return typeof value === 'string' ? value : '';
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {config.fields.map((field: any) => {
                if (field.type === 'textarea') {
                    return (
                        <Textarea
                            key={field.field}
                            label={field.label}
                            placeholder={field.placeholder}
                            value={getStringValue(field.field)}
                            onChange={(e) => updateFormData(field.field, e.target.value)}
                            required={field.required}
                        />
                    );
                }

                if (field.type === 'select') {
                    return (
                        <Select
                            key={field.field}
                            label={field.label}
                            placeholder={field.placeholder}
                            options={field.options}
                            value={getStringValue(field.field)}
                            onChange={(e) => updateFormData(field.field, e.target.value)}
                            required={field.required}
                        />
                    );
                }

                return (
                    <Input
                        key={field.field}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        value={getStringValue(field.field)}
                        onChange={(e) => updateFormData(field.field, e.target.value)}
                        required={field.required}
                    />
                );
            })}
        </div>
    );
}

export function SelectionStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = formData[config.field as keyof typeof formData];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.options.map((option: any) => (
                <SelectionCard
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    abbreviation={option.abbreviation}
                    selected={fieldValue === option.value}
                    onClick={() => updateFormData(config.field, option.value)}
                />
            ))}
        </div>
    );
}

export function ListSelectionStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = formData[config.field as keyof typeof formData];

    return (
        <div className="max-w-md mx-auto space-y-4">
            {config.options.map((option: any) => (
                <ListSelectionCard
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    selected={fieldValue === option.value}
                    onClick={() => updateFormData(config.field, option.value)}
                />
            ))}
        </div>
    );
}

export function SliderStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = formData[config.field as keyof typeof formData] as number;
    const value = fieldValue !== undefined ? fieldValue : config.default;

    // Initialize with default value if not set
    React.useEffect(() => {
        if (fieldValue === undefined) {
            updateFormData(config.field, config.default);
        }
    }, []);

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <Slider
                value={value}
                min={config.min}
                max={config.max}
                step={config.step}
                format={config.format}
                onChange={(val) => updateFormData(config.field, val)}
            />
            {config.extraQuestion && (
                <div className="mt-8">
                    <Select
                        label={config.extraQuestion.label}
                        placeholder="Select one..."
                        options={config.extraQuestion.options}
                        value={formData[config.extraQuestion.field as keyof typeof formData] as string || ''}
                        onChange={(e) => updateFormData(config.extraQuestion.field, e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}

export function DateStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = formData[config.field as keyof typeof formData] as string;

    return (
        <div className="max-w-md mx-auto">
            <DateInput
                value={fieldValue || ''}
                onChange={(e) => updateFormData(config.field, e.target.value)}
                placeholder={config.placeholder}
            />
        </div>
    );
}

export function MultiSelectionSingleStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = (formData[config.field as keyof typeof formData] as string[]) || [];

    const handleToggle = (value: string) => {
        // If selecting "N/A", clear all others
        if (value === 'na') {
            updateFormData(config.field, ['na']);
            return;
        }

        // If selecting something else, remove "N/A" if it exists
        let updated = fieldValue.filter(v => v !== 'na');

        // Toggle the selected value
        if (updated.includes(value)) {
            updated = updated.filter(v => v !== value);
        } else {
            updated = [...updated, value];
        }

        updateFormData(config.field, updated);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
                {config.options.map((option: any) => (
                    <ListSelectionCard
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        selected={fieldValue.includes(option.value)}
                        onClick={() => handleToggle(option.value)}
                    />
                ))}
            </div>
        </div>
    );
}

export function ReviewStep() {
    const { formData } = useForm();

    const formatFieldName = (key: string): string => {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    };

    const formatValue = (value: any): string => {
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        if (typeof value === 'number') {
            return `$${value.toLocaleString()}`;
        }
        return value?.toString() || 'N/A';
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-6">
                <p className="text-gray-600 text-center mb-8">
                    Please review your information before submitting
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(formData).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-100 pb-4">
                            <div className="text-sm font-medium text-gray-500 mb-1">
                                {formatFieldName(key)}
                            </div>
                            <div className="text-lg text-gray-900">
                                {formatValue(value)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
