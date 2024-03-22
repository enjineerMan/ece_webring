import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "col-span-6 flex h-10 w-full bg-zinc-900 px-4 py-2 font-mono text-xs text-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-200/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }