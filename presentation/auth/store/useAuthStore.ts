import { create } from 'zustand';
import { User } from '@/core/auth/interface/user';
import { authCheckStatus, authLogin } from '@/core/auth/actions/auth-actions';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;

  changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  // Properties
  status: 'checking',
  token: undefined,
  user: undefined,

  // Actions
  changeStatus: (token?: string, user?: User) => {
    if (!token || !user) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      // TODO: llamar logout
      return false;
    }

    set({
      status: 'authenticated',
      token: token,
      user: user,
    });

    // TODO: guardar el token en el secure storage

    return true;
  },

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.token, resp?.user);
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    get().changeStatus(resp?.token, resp?.user);
  },

  logout: async () => {
    // TODO: clear token del secure storage

    set({ status: 'unauthenticated', token: undefined, user: undefined });
  },
}));
