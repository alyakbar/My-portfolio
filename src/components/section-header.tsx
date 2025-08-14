import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
}

export function SectionHeader({ title, description, className, ...props }: SectionHeaderProps) {
    return (
        <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)} {...props}>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h2>
            {description && (
                <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            )}
        </div>
    )
}
