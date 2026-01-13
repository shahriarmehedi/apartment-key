/* eslint-disable react-hooks/exhaustive-deps */
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
    const columns = config.columns || 3;

    return (
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
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

export function DropdownStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = formData[config.field as keyof typeof formData];

    return (
        <div className="max-w-md mx-auto">
            <Select
                label=""
                placeholder={config.placeholder || 'Select an option...'}
                options={config.options.map((opt: any) => opt.label)}
                value={typeof fieldValue === 'string' ? fieldValue : ''}
                onChange={(e) => {
                    const selectedOption = config.options.find((opt: any) => opt.label === e.target.value);
                    updateFormData(config.field, selectedOption?.value || e.target.value);
                }}
                required={config.required}
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

export function MultiSelectionGroupedStep({ config }: StepProps) {
    const { formData, updateFormData } = useForm();
    const fieldValue = (formData[config.field as keyof typeof formData] as string[]) || [];
    const maxLimit = config.maxLimit || 999;

    const handleToggle = (value: string) => {
        let updated = [...fieldValue];

        if (updated.includes(value)) {
            updated = updated.filter(v => v !== value);
        } else {
            // Check if max limit reached
            if (updated.length >= maxLimit) {
                const Swal = require('sweetalert2');
                Swal.fire({
                    icon: 'warning',
                    title: 'Maximum Selection Reached',
                    text: `You can select a maximum of ${maxLimit} locations`,
                    confirmButtonColor: '#FF8C42',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                return;
            }
            updated = [...updated, value];
        }

        updateFormData(config.field, updated);
    };

    return (
        <div className="max-w-[1480px] mx-auto">
            {/* Info message about max selections */}
            {config.maxLimit && (
                <div className="mb-6 text-center">
                    <p className="text-sm text-gray-600">
                        You can select up to <span className="font-semibold text-brand-orange">{config.maxLimit} locations</span>
                        {fieldValue.length > 0 && (
                            <span className="ml-2 text-brand-cyan font-semibold">
                                ({fieldValue.length}/{config.maxLimit} selected)
                            </span>
                        )}
                    </p>
                </div>
            )}
            {/* Mobile: Stacked cards */}
            <div className="md:hidden space-y-6">
                {config.groups.map((group: any) => (
                    <motion.div
                        key={group.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl border-2 border-gray-200 p-6"
                    >
                        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">
                            {group.name}
                        </h3>
                        <div className="space-y-2">
                            {group.areas.map((area: any) => (
                                <motion.button
                                    key={area.id}
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleToggle(area.value)}
                                    className={`
                                        w-full text-left px-4 py-3 rounded-lg border-2 transition-all
                                        ${fieldValue.includes(area.value)
                                            ? 'bg-gradient-to-r from-brand-orange to-brand-cyan text-white border-transparent font-semibold'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-brand-cyan/50'
                                        }
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">{area.label}</span>
                                        {fieldValue.includes(area.value) && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: Compact multi-column layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6">
                    {config.groups.map((group: any) => (
                        <motion.div
                            key={group.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-brand-cyan/20">
                                {group.name}
                            </h3>
                            <div className="space-y-2">
                                {group.areas.map((area: any) => (
                                    <label
                                        key={area.id}
                                        className="flex items-start space-x-2 cursor-pointer group"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={fieldValue.includes(area.value)}
                                            onChange={() => handleToggle(area.value)}
                                            className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 text-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 cursor-pointer"
                                        />
                                        <span className={`text-sm leading-tight transition-colors ${fieldValue.includes(area.value)
                                            ? 'text-brand-coral font-semibold'
                                            : 'text-gray-700 group-hover:text-brand-cyan'
                                            }`}>
                                            {area.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ReviewStep({ allSteps }: { allSteps: any[] }) {
    const { formData } = useForm();

    const formatFieldName = (key: string): string => {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    };

    const formatValue = (key: string, value: any): string => {
        // Find the step config for this field
        const stepConfig = allSteps.find(step => step.field === key);

        if (Array.isArray(value)) {
            // Handle multi-selection-grouped (location)
            if (stepConfig?.type === 'multi-selection-grouped' && stepConfig.groups) {
                const labels: string[] = [];
                stepConfig.groups.forEach((group: any) => {
                    group.areas.forEach((area: any) => {
                        if (value.includes(area.value)) {
                            labels.push(area.label);
                        }
                    });
                });
                return labels.join(', ') || 'N/A';
            }
            // Handle other multi-selections
            if (stepConfig?.options) {
                const labels = value.map((val: string) => {
                    const option = stepConfig.options.find((opt: any) => opt.value === val);
                    return option?.label || val;
                });
                return labels.join(', ') || 'N/A';
            }
            return value.join(', ');
        }

        // Handle single selections
        if (stepConfig?.options) {
            const option = stepConfig.options.find((opt: any) => opt.value === value);
            if (option) return option.label;
        }

        // Handle numbers (budget, income)
        if (typeof value === 'number') {
            return `$${value.toLocaleString()}`;
        }

        // Handle dates
        if (key === 'moveInDate' && value) {
            return new Date(value).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
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
                                {formatValue(key, value)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
