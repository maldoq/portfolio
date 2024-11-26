import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"

export const Contact = () => {
    return (
    <Section className="flex flex-col w-full items-start gap-4">
        <Badge variant={"outline"}>Contactez moi</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Je serai ravi de travailler avec vous.
        </h2>
        <div className="flex max-md:flex-col gap-4">
        <ContactCard
            className="flex-1" 
            name="Adjémian Malik" 
            image="" 
            mediumImage="" 
            description="Je suis toujours disponible sur linkedin"
        />
        <ContactCard
            className="flex-1" 
            url="mailto:dominiquemalik20@gmail.com"
            name="dominiquemalik20@gmail.com" 
            image="" 
            mediumImage="data:image/jpeg;base64,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" 
            description="Envoyer moi un email pour toute requête"
        />
        </div>
    </Section>
    )
}