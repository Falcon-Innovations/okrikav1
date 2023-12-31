export interface User {
  _id: string;
  email: string;
  name: string;
  phone: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}

export interface AuthContextProps {
  user: User | null;
  token: string | null;
  isAuthenticating: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    phone: string
  ) => Promise<void>;
  logout: () => void;
}
