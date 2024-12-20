import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return (<span className={cn('bg-accent/30 font-mono border hover:bg-accent/50 transition-color border-accent text-primary px-1 py-0.5 rounded-sm',className)} {...props}/>)
}