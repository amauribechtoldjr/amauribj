import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps, FC } from "react";
import { cn } from "~/utils/styles";

const sectionVariants = cva("mx-4", {
  variants: {
    variant: {
      default: "",
      outline: "border-2 border-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SectionProps
  extends ComponentProps<"div">,
    VariantProps<typeof sectionVariants> {}

const Section: FC<SectionProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      {children}
    </section>
  );
};

export default Section;
