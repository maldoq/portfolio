import { Section } from "./Section"
import {Code} from "./Code"


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
                        <img src="https://iit.ci/images/logo-small.jpg#joomlaImage://local-images/logo-small.jpg?width=223&height=80" style={{width: 20, height: "auto"}} alt="IIT" /> Institut Ivoirien de Technologie
                    </Code>
                    </a>, et domicilié à <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Code className="inline-flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" style={{width: 16, height: "auto"}} alt="Côte d'Ivoire" /> Abidjan
                    </Code>
                    </a>, 
                je suis animé par une passion profonde pour les <Code className="inline-flex items-center gap-1">sciences physiques et chimiques</Code>, 
                ainsi que pour la richesse de <Code className="inline-flex items-center gap-1">la culture et de l'histoire</Code>. 
                Doté de solides compétences en <Code className="inline-flex items-center gap-1">reproduction de pages HTML</Code> et en <Code className="inline-flex items-center gap-1">conception d’affiches professionnelles</Code>, 
                je m'efforce de marier créativité et précision dans mes réalisations. 
                Mon ambition est d'explorer des horizons innovants en intelligence artificielle et en robotique, 
                avec l’objectif de devenir un Ingénieur IA capable de relever les défis technologiques de demain.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img src="https://cdn-icons-png.flaticon.com/128/5216/5216408.png" alt="malik's picture" className="w-full h-auto max-w-xs max-md:w-56" />
            </div>
        </Section>
    )
}