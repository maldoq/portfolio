import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string;
    className?: string;
}) => {
    return (
        <a href={props.url} className={cn("w-full", props.className)} >
        <Card className="p-3 bg-accent/10 hover:bg-accent/20 transition-colors group flex items-center gap-4">
            <div className="relative w-10 h-10">
                <Image src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" width={10} height={10} />
                <Image src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" width={10} height={10} />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
        </a>
    )
};