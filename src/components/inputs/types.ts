export enum Mode {
  OUTLINED = "outlined",
  FLAT = "flat",
}

export enum KeyboadType {
  NUMBER_PAD = "number-pad",
  DEFAULT = "default",
  EMAIL_ADDRESS = "email-address",
  NUMERIC = "numeric",
}

export interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  errors?: any;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  iconLeft?: boolean;
  iconName?: string;
  iconLibrary?: JSX.Element;
  onFocus?: () => void;
  email?: boolean;
  password?: boolean;
  mode?: Mode;
  keyboard?: KeyboadType;
  multiline?: boolean;
}
