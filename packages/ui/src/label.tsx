import type { LabelHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "./utils";

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none text-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-100",
          className,
        )}
        {...props}
      />
    );
  },
);

Label.displayName = "Label";
