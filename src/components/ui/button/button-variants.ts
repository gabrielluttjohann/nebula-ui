import { cva } from "class-variance-authority";

// Base button styles
const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95";

// Style variants for the button
const buttonVariantsClasses = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/85 focus-visible:ring-primary/60",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/85 focus-visible:ring-destructive/60",
  outline:
    "border border-input bg-background hover:bg-accent/20 hover:text-accent-foreground focus-visible:ring-accent/50",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary/50",
  ghost:
    "hover:bg-accent/15 hover:text-accent-foreground focus-visible:ring-accent/50",
  link: "text-primary underline-offset-4 hover:underline",
};

// Size variants for the button
const buttonSizesClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8 text-lg",
  xl: "h-12 rounded-lg px-10 text-xl",
  icon: "h-10 w-10",
};

// Configure cva for buttons
const buttonVariants = cva(buttonBaseClasses, {
  variants: {
    variant: buttonVariantsClasses,
    size: buttonSizesClasses,
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { buttonVariants };
