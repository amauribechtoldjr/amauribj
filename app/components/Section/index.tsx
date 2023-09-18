import type { ComponentProps, FC } from "react";

interface SectionProps extends ComponentProps<"div"> {}

const Section: FC<SectionProps> = ({ children }) => {
  return <section className="mx-4 my-12">{children}</section>;
};

export default Section;
