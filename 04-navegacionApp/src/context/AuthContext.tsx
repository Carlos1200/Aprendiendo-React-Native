import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

//Definir Como luce mi información
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial
export const authInicialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

//crear el context
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInicialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
