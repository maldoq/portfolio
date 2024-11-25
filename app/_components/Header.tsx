import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    maldoqaums
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                <a
                href="https://github.com/maldoq/maldoq"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                target="_blank"
                rel="noopener noreferrer"
                >
                <GithubIcon size={12} className="text-foreground" />
                </a>
                <a
                href="https://x.com/maldoqaums"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                target="_blank"
                rel="noopener noreferrer"
                >
                <XIcon size={12} className="text-foreground" />
                </a>
                <a
                href="https://www.linkedin.com/in/adj%C3%A9mian-uriel-marie-malik-9247a7178/"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                target="_blank"
                rel="noopener noreferrer"
                >
                <LinkedinIcon size={12} className="text-foreground" />
                </a>
                </ul>
            </Section>
        </header>
    )
}