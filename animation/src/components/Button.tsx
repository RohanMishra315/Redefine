import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

function Button(props: {
  id: string | undefined;
  title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
  leftIcon?: ReactNode; // Include leftIcon in the props
  containerClass?: string; // Include containerClass in the props
}) {
  const { id, title, leftIcon, containerClass } = props;

  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && <span className="icon-container font-general text-xs uppercase">{leftIcon}</span>}
      {title}
    </button>
  );
}

export default Button;
