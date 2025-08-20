import { TextInput, TextInputProps } from "react-native";

export type InputProps = TextInputProps;
export function Input(props: InputProps) {
  return (
    <TextInput
      {...props}
      className={`
    px-4 py-2 border border-1 border-slate-400
    hover:border-slate-800
    focus:outline-none
    rounded focus:border-slate-800
    ${props.className ?? ""}`}
    />
  );
}
