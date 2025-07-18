import * as React from "react"
import { cn } from "../../utils/cn"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  children?: React.ReactNode
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => (
    <div className={cn("flex items-center gap-2 w-full overflow-hidden", className)} ref={ref} {...props}>
      <div className={cn(
        "shrink-0 bg-[#E5E5E5]",
        orientation === "horizontal" ? "h-px flex-1" : "h-full w-px"
      )} />
      {children && <span className="text-xs text-gray-400 font-medium px-2 whitespace-nowrap">{children}</span>}
      <div className={cn(
        "shrink-0 bg-[#E5E5E5]",
        orientation === "horizontal" ? "h-px flex-1" : "h-full w-px"
      )} />
    </div>
  )
)
Separator.displayName = "Separator"

export { Separator } 