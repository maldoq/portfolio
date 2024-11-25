import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Code, MessageCircle, Rss, StickyNote, Weight} from "lucide-react"
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
                        Work
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
                        Contact me
                    </p>
                    <ContactCard 
                        name="@melvynxdev" 
                        image="" 
                        mediumImage="" 
                        description="16000"
                    />
                    <ContactCard 
                        name="Melvin Malherbe" 
                        image="" 
                        mediumImage="" 
                        description="12000"
                    />
                </Card>
            </div>
        </Section>
    )
}


const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo: Code,
        title: 'CodeLines',
        description: 'A platform for developers to share their knowledge',
        url:"/",
    },
    {
        Logo: StickyNote,
        title: 'PowerNotes',
        description: 'A platform for developers to share their knowledge',
        url:"/",
    },
    {
        Logo: Rss,
        title: 'PowerPost',
        description: 'A platform for developers to share their knowledge',
        url:"/",
    },
    {
        Logo: MessageCircle,
        title: 'Chat2Code',
        description: 'A platform for developers to share their knowledge',
        url:"/",
    },
    {
        Logo: Weight,
        title: 'LinkedLeads',
        description: 'A platform for developers to share their knowledge',
        url:"/",
    }
]


const WORKS : WorkProps[] = [
    {
        image: "",
        title: "Codelynx",
        role: "Founder",
        date: "2023 - present",
        url:"/",
        freelance: true,
    },
    {
        image: "",
        title: "Yuzu",
        role: "Software Developer",
        date: "2022 - 2023",
        url:"/",
    }
]

