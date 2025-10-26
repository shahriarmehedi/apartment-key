'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          ${selected ? 'bg-brand-orange/15 text-brand-orange' : 'bg-gray-100 text-gray-400'}
        `}>
                    {abbreviation}
                </div>
                <div className={`text-lg font-medium ${selected ? 'text-brand-orange' : 'text-gray-700'}`}>
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
                    ? 'border-brand-cyan bg-brand-cyan/5 text-brand-orange font-medium'
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
                <div className="inline-block px-6 py-2 bg-brand-orange/15 rounded-full">
                    <span className="text-2xl font-bold text-brand-orange">{formatValue(value)}</span>
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

export function DateInput({ label, error, className = '', value, onChange, ...props }: DateInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value as string) : null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleDateSelect = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
        const formattedDate = newDate.toISOString().split('T')[0];
        if (onChange) {
            onChange({ target: { value: formattedDate } } as any);
        }
        setIsOpen(false);
    };

    const formatDisplayDate = (date: Date | null) => {
        if (!date) return 'mm/dd/yyyy';
        return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    };

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="w-14 h-14" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const isSelected = selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth.getMonth() &&
            selectedDate.getFullYear() === currentMonth.getFullYear();

        days.push(
            <motion.button
                key={day}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDateSelect(day)}
                className={`
                    w-14 h-14 flex items-center justify-center rounded-xl text-lg font-medium
                    transition-colors
                    ${isSelected
                        ? 'bg-brand-cyan text-white'
                        : 'hover:bg-brand-cyan/10 text-gray-700'
                    }
                `}
            >
                {day}
            </motion.button>
        );
    }

    return (
        <div ref={containerRef} className="w-full max-w-2xl mx-auto relative">
            {label && (
                <label className="block text-base font-medium text-gray-700 mb-3">
                    {label}
                </label>
            )}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full px-8 py-6 text-xl rounded-xl border-2 border-gray-200
                    focus:border-brand-cyan focus:outline-none transition-colors text-left
                    ${error ? 'border-red-400' : ''}
                    ${className}
                `}
            >
                {formatDisplayDate(selectedDate)}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <button
                                type="button"
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h3 className="text-xl font-semibold">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-3">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="w-14 h-10 flex items-center justify-center text-sm font-semibold text-gray-600">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {days}
                        </div>

                        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedDate(null);
                                    if (onChange) {
                                        onChange({ target: { value: '' } } as any);
                                    }
                                }}
                                className="px-6 py-2 text-brand-cyan hover:bg-brand-cyan/10 rounded-lg transition-colors font-medium"
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDateSelect(new Date().getDate())}
                                className="px-6 py-2 text-brand-cyan hover:bg-brand-cyan/10 rounded-lg transition-colors font-medium"
                            >
                                Today
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
