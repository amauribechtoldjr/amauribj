import type { ComponentProps, FC } from "react";

interface SectionTitleProps extends ComponentProps<"div"> {}

const SeciontTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-bold my-8 font-title tracking-widest">{children}</h2>
  );
};

export default SeciontTitle;
