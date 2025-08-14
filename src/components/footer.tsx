import { Code2 } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
                <div className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-muted-foreground" />
                    <span className="font-headline text-lg font-bold">Aly.Tech</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {currentYear} Alyakbar Ahmed Sheikh. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
