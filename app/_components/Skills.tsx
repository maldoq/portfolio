import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactLogo } from "./icons/ReactLogo"
import { Code } from "./Code"
import { OpenAILogo } from "./icons/OpenAILogo"
import { DjangoLogo } from "./icons/DjangoLogo"
import { FlutterLogo } from "./icons/FlutterLogo"
import { FigmaLogo } from "./icons/FigmaLogo"
import { PhotoshopLogo } from "./icons/PhotoshopLogo"

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Compétences</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            J&apos;aime travailler avec
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <DjangoLogo size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Django</h3>
                <p className="text-sm text-muted-foreground">Mon framework principal pour le backend est <Code>Django</Code>. J&apos;utilise parfois <Code>Flask</Code> comme framework backend.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <FlutterLogo size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Flutter/Dart</h3>
                <p className="text-sm text-muted-foreground">Côté <u>frontend</u>, j&apos;arrive à faire une application <Code>Flutter</Code></p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <FigmaLogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">Figma</h3>
                <p className="text-sm text-muted-foreground">Je fais aussi des designs d&apos;application avec <Code>Figma</Code></p>
            </div>
        </div>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <ReactLogo size={42} className="animate-spin" style={{ animationDuration:"10s"}}/>
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">J&apos;utilise aussi <Code>React</Code> pour le framework frontend, et aussi <Code>Next.Js</Code></p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <PhotoshopLogo size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Graphisme</h3>
                <p className="text-sm text-muted-foreground">Je fais aussi du graphisme ce qui inclus les logos et les affiches avec des outils comme <Code>Photoshop</Code> et <Code>Canvas</Code></p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <OpenAILogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">AI Integration</h3>
                <p className="text-sm text-muted-foreground">Je suis un expert pour utiliser l&apos;IA dans des projets et surtout <Code>ChatGPT</Code> et rendre ainsi une application plus dynamique.</p>
            </div>
        </div>
        <div className="flex max-md:flex-col gap-4">
            
        </div>
        <div className="flex max-md:flex-col gap-4">
            
        </div>
    </Section>
    )
}