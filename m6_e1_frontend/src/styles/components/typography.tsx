import { ReactNode } from "react";

interface iBaseTextProps {
  children: ReactNode;
  className?: string;
  tag: string;
  htmlFor?: string;
}

export const BaseText = ({ children, className, tag }: iBaseTextProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "small" && <small className={className}>{children}</small>}
      {tag === "label" && <label className={className}>{children}</label>}
    </>
  );
};
