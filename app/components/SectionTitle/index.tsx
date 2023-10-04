import type { ComponentProps, FC } from "react";

interface SectionTitleProps extends ComponentProps<"div"> {}

const SeciontTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-bold my-8 font-title tracking-widest text-2xl lg:hidden">
      {children}
    </h2>
  );
};

export default SeciontTitle;
