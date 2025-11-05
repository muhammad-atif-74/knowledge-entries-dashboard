import React, { useState, useEffect } from 'react';

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (confirmed: boolean) => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "destructive" | "default";
}

const ConfirmDialog = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Are you sure?",
    description = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "destructive",
}: ConfirmDialogProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop - removed onClick handler */}
            <div className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity" />

            {/* Dialog */}
            <div className="relative bg-white dark:bg-gray-800 dark:bg-secondaryColorDarkLight dark:text-gray-50 rounded-lg shadow-xl w-full max-w-lg mx-4 p-6 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-50">
                        {description}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-900 dark:border-gray-900 dark:text-white dark:hover:bg-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(true);
                            onClose();
                        }}
                        className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${variant === "destructive"
                            ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                            : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                            }`}
                    >
                        {confirmText}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;