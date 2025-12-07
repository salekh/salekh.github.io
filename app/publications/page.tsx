import { Container } from "@/components/ui/Container";
import { Publication, PublicationCard } from "@/components/publications/PublicationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Publications - Sanchit Alekh',
    description: 'Research papers and publications by Sanchit Alekh.',
};

const publications: Publication[] = [
    {
        title: "An integrated ontology-based approach for patent classification in medical engineering",
        authors: "S Geisler, C Quix, R Hai, S Alekh",
        year: "2017",
        publication: "Springer",
        synopsis: "Medical engineering (ME) is an interdisciplinary domain with short innovation cycles. Usually, researchers from several fields cooperate in ME research projects. To support the ...",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-69751-2_5"
    },
    {
        title: "Ontology Matching for Patent Classification",
        authors: "C Quix, S Geisler, R Hai, S Alekh",
        year: "2017",
        publication: "OM-2017: Proceedings of the Twelfth International Workshop on Ontology Matching",
        synopsis: "Interdisciplinary research and development projects in medical engineering benefit from well selected collaboration partners. The process of finding such partners from often unfamiliar fields is diffcult ...",
        link: "https://hal.science/hal-01674668/document#page=45"
    },
    {
        title: "Human Aspects and Perception of Privacy in Relation to Personalization",
        authors: "S Alekh",
        year: "2018",
        publication: "arXiv",
        synopsis: "The concept of privacy is inherently intertwined with human attitudes and behaviours, as most computer systems are primarily designed for human use. Especially in the case of ...",
        link: "https://arxiv.org/abs/1805.08280"
    },
    {
        title: "Combining keystroke dynamics and face recognition for user verification",
        authors: "A Jagetia, D Sharma, S Alekh",
        year: "2015",
        publication: "IEEE Xplore",
        synopsis: "The massive explosion and ubiquity of computing devices and the outreach of the web have been the most defining events of the century so far. As more and more people gain access...",
        link: "https://ieeexplore.ieee.org/abstract/document/7371386"
    },
    {
        title: "Ontology-based classification and analysis of non-emergency smart-city events",
        authors: "M Rani, S Alekh, A Bhardwaj, A Gupta",
        year: "2016",
        publication: "IEEE Xplore",
        synopsis: "Several challenges are faced by citizens of urban centers while dealing with day-to-day events, and the absence of a centralized reporting mechanism makes event-reporting and ...",
        link: "https://ieeexplore.ieee.org/abstract/document/7514633"
    },
    {
        title: "EU general data protection regulation: A gentle introduction",
        authors: "S Alekh",
        year: "2018",
        publication: "arXiv",
        synopsis: "The GDPR, or the Datenschutz Grundverordnung (DSGVO) in German, is an EU Law which addresses the subject of safeguarding privacy of personal data of the citizens of the EU and ...",
        link: "https://arxiv.org/abs/1806.03253"
    },
    {
        title: "Automatic Raga recognition in Hindustani classical music",
        authors: "S Alekh",
        year: "2017",
        publication: "arXiv",
        synopsis: "Raga is the central melodic concept in Hindustani Classical Music. It has a complex structure, often characterized by pathos. In this paper, we describe a technique for Automatic Raga ...",
        link: "https://arxiv.org/abs/1708.02322"
    }
];

export default function Publications() {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Research & Publications
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    A selection of my academic work in AI, Privacy, and Smart Systems.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="grid grid-cols-1 gap-8">
                    {publications.map((pub, index) => (
                        <PublicationCard key={index} pub={pub} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
