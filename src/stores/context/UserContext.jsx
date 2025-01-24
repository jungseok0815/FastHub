import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to restore user from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 로그인 함수
  const login = (userData) => {
    setUser(userData);
    // 필요한 경우 로컬 스토리지에 저장
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

    // 로딩 중일 때는 아무것도 렌더링하지 않음
    if (loading) {
      return null; // 또는 로딩 스피너 컴포넌트
    }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};