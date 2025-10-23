'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SelectionCardProps {
    id: string;
    label: string;
    abbreviation?: string;
    selected: boolean;
    onClick: () => void;
}

export function SelectionCard({ id, label, abbreviation, selected, onClick }: SelectionCardProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`
        relative p-8 rounded-2xl border-2 transition-all duration-300
        ${selected
                    ? 'border-brand-cyan bg-brand-cyan/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }
      `}
        >
            <div className="flex flex-col items-center gap-4">
                <div className={`
          w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold
          ${selected ? 'bg-brand-coral/10 text-brand-coral' : 'bg-gray-100 text-gray-400'}
        `}>
                    {abbreviation}
                </div>
                <div className={`text-lg font-medium ${selected ? 'text-brand-coral' : 'text-gray-700'}`}>
                    {label}
                </div>
            </div>
        </motion.button>
    );
}

interface ListSelectionCardProps {
    id: string;
    label: string;
    selected: boolean;
    onClick: () => void;
}

export function ListSelectionCard({ id, label, selected, onClick }: ListSelectionCardProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onClick}
            className={`
        w-full p-6 rounded-xl border-2 transition-all duration-300 text-center
        ${selected
                    ? 'border-brand-cyan bg-brand-cyan/5 text-brand-coral font-medium'
                    : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                }
      `}
        >
            {label}
        </motion.button>
    );
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="sr-only"
                />
                <div className={`
          w-6 h-6 rounded border-2 transition-all duration-200
          ${checked
                        ? 'bg-brand-cyan border-brand-cyan'
                        : 'bg-white border-gray-300 group-hover:border-gray-400'
                    }
        `}>
                    {checked && (
                        <svg className="w-full h-full text-white p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
            </div>
            <span className="text-gray-700">{label}</span>
        </label>
    );
}

interface SliderProps {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
    format?: 'currency' | 'number';
}

export function Slider({ value, min, max, step, onChange, format = 'number' }: SliderProps) {
    const formatValue = (val: number) => {
        if (format === 'currency') {
            return `$${val.toLocaleString()}`;
        }
        return val.toString();
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="mb-8 text-center">
                <div className="inline-block px-6 py-2 bg-brand-coral/10 rounded-full">
                    <span className="text-2xl font-bold text-brand-coral">{formatValue(value)}</span>
                </div>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                    background: `linear-gradient(to right, rgb(67 56 202) 0%, rgb(67 56 202) ${((value - min) / (max - min)) * 100}%, rgb(229 231 235) ${((value - min) / (max - min)) * 100}%, rgb(229 231 235) 100%)`
                }}
            />
        </div>
    );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <input
                {...props}
                className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200
          focus:border-brand-cyan focus:outline-none transition-colors
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <textarea
                {...props}
                className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200
          focus:border-brand-cyan focus:outline-none transition-colors
          resize-none
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
                rows={4}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: string[];
    placeholder?: string;
}

export function Select({ label, error, options, placeholder = 'Select one...', className = '', ...props }: SelectProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <select
                {...props}
                className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200
          focus:border-brand-cyan focus:outline-none transition-colors
          bg-white cursor-pointer
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function DateInput({ label, error, className = '', ...props }: DateInputProps) {
    return (
        <div className="w-full max-w-md mx-auto">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="date"
                {...props}
                className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200
          focus:border-brand-cyan focus:outline-none transition-colors
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
