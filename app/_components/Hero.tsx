import { Section } from "./Section"
import {Code} from "./Code"
import Image from "next/image"


export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] flex w-full flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl">
                    MALIK Adjémian Uriel-Marie Dominique
                </h2>
                <h3 className="text-3xl font-caption">Aspirant développeur Fullstack</h3>
                <p className="text-base">
                Étudiant en Génie Logiciel à <a
                    href="https://iit.ci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Code className="inline-flex items-center gap-1">
                        <Image src="https://iit.ci/images/logo-small.jpg#joomlaImage://local-images/logo-small.jpg?width=223&height=80" width={25} height={10} alt="IIT" /> Institut Ivoirien de Technologie
                    </Code>
                    </a>, et domicilié à <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Code className="inline-flex items-center gap-1">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" width={25} height={15} alt="Côte d'Ivoire" /> Abidjan
                    </Code>
                    </a>, 
                je suis animé par une passion profonde pour les <Code className="inline-flex items-center gap-1">sciences physiques et chimiques</Code>, 
                ainsi que pour la richesse de <Code className="inline-flex items-center gap-1">la culture et de l&apos;histoire</Code>. 
                Doté de solides compétences en <Code className="inline-flex items-center gap-1">reproduction de pages HTML</Code> et en <Code className="inline-flex items-center gap-1">conception d&apos;affiches professionnelles</Code>, 
                je m&apos;efforce de marier créativité et précision dans mes réalisations. 
                Mon ambition est d&apos;explorer des horizons innovants en intelligence artificielle et en robotique, 
                avec l&apos;objectif de devenir un Ingénieur IA capable de relever les défis technologiques de demain.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <Image src="https://cdn-icons-png.flaticon.com/128/5216/5216408.png" alt="malik's picture" className="w-full h-auto max-w-xs max-md:w-56" width={128} height={128} />
            </div>
        </Section>
    )
}