import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

export type ButtonProps = PressableProps & { label: ReactNode };
export function Button(props: ButtonProps) {
  return (
    <Pressable
      {...props}
      className={`
        py-2 px-4 uppercase relative
        hover:before:w-full hover:before:h-full 
        hover:before:absolute hover:before:z-10 
        hover:before:bg-slate-300/20
        hover:before:top-0 hover:before:left-0
        rounded
    ${props.className ?? ""}`}
    >
      {props.label}
    </Pressable>
  );
}
