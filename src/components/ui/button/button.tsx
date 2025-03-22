"use client";

import { useMemo } from "react";
import { cn } from "@/utils/cn";

import Slot from "@/components/ui/slot/slot";
import { buttonVariants } from "@/components/ui/button/button-variants";

const Button = ({
  className,
  variant = "default",
  size = "default",
  asChild,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const buttonClassName = useMemo(
    () => cn(buttonVariants({ variant, size, className })),
    [variant, size, className]
  );

  return <Comp data-slot="button" className={buttonClassName} {...props} />;
};

export default Button;
