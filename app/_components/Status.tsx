import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Database, Euro, Rss} from "lucide-react"
import { SideProject, SideProjectProps } from "./SideProject"
import { ContactCard } from "./ContactCard"
import { Work, WorkProps } from "./Work"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Side, fun projects.
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project,index) => (
                            <SideProject 
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                                />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="w-full flex-[2] flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Languages appris
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work,index) => (
                            <Work 
                                key={index}
                                {... work}
                                />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Langue parlé
                    </p>
                    <ContactCard 
                        name="Français" 
                        image="" 
                        mediumImage="" 
                        description="native"
                    />
                    <ContactCard 
                        name="English" 
                        image="" 
                        mediumImage="" 
                        description="level A2"
                    />
                </Card>
            </div>
        </Section>
    )
}


const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo: Euro,
        title: 'ProxyGestFin - en cours',
        description: 'Une application de gestion des factures',
        url:"/",
    },
    {
        Logo: Database,
        title: 'Gestion de stock',
        description: 'Une application de gestion de stock',
        url:"/",
    },
    {
        Logo: Rss,
        title: 'Philosshop',
        description: 'Un site web de vente d\'habit',
        url:"/",
    },
]


const WORKS : WorkProps[] = [
    {
        image: "",
        title: "Python",
        role: "",
        date: "2018 - present",
        url:"/",
        freelance: true,
    },
    {
        image: "",
        title: "Dart",
        role: "",
        date: "2021 - present",
        url:"/",
    },
    {
        image: "",
        title: "Html/Css",
        role: "",
        date: "2019 - present",
        url:"/",
        freelance: true,
    },
    {
        image: "",
        title: "Javascript",
        role: "",
        date: "2021 - present",
        url:"/",
    },
    {
        image: "",
        title: "Java",
        role: "",
        date: "2022 - present",
        url:"/",
    },
    {
        image: "",
        title: "Csharp",
        role: "",
        date: "2019 - 2023",
        url:"/",
    }
]

