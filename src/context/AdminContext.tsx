// AdminContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
    action: 'create' | 'edit' | 'delete' | '';
    setAction: (action: 'create' | 'edit' | '') => void;
    editIds: Record<'User' | 'Menu' | 'Category' | 'Menu Coffee' | 'Logger', number | null>;
    setEditId: (
        menu: 'User' | 'Menu' | 'Category' | 'Menu Coffee' | 'Logger',
        id: number | null,
    ) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [action, setAction] = useState<'create' | 'edit' | 'delete' | ''>('');
    const [editIds, setEditIds] = useState<
        Record<'User' | 'Menu' | 'Category' | 'Menu Coffee' | 'Logger', number | null>
    >({
        User: null,
        Menu: null,
        Category: null,
        'Menu Coffee': null,
        Logger: null,
    });

    const setEditId = (
        menu: 'User' | 'Menu' | 'Category' | 'Menu Coffee' | 'Logger',
        id: number | null,
    ) => {
        setEditIds((prev) => ({
            ...prev,
            [menu]: id,
        }));
    };

    return (
        <AdminContext.Provider value={{ action, setAction, editIds, setEditId }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdminContext must be used within an AdminProvider');
    }
    return context;
};
