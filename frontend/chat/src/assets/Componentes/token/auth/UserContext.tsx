import React, { createContext, useState, ReactNode, useContext, useMemo } from 'react';

interface UserContextType {
  selectedUserId: number | null;
  setSelectedUserId: (id: number | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const value = useMemo(() => ({ selectedUserId, setSelectedUserId }), [selectedUserId]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
