import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
    return (
        <section className={cn("container mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 md:py-28", className)} {...props}>
            {children}
        </section>
    );
}
