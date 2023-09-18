import type { ComponentProps, FC } from "react";

interface SectionProps extends ComponentProps<"div"> {}

const Section: FC<SectionProps> = ({ children }) => {
  return <section className="mx-4 my-8">{children}</section>;
};

export default Section;
