
import { Container } from "@/components/ui/Container";

function Role({ company, title, logo, start, end, children }: { company: string; title: string; logo?: string; start: string; end: string; children?: React.ReactNode }) {
    return (
        <article className="flex max-w-2xl group relative flex-col items-start justify-between border-l border-zinc-200 dark:border-zinc-800 pl-6 pb-12 last:pb-0">
            <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] leading-snug">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-50/50 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10 block">
                    {title}
                </span>
                <span className="relative z-10 block text-lg font-medium text-[var(--accent-primary)] mt-1">
                    {company}
                </span>
            </h3>
            <p className="relative z-10 order-first flex items-center text-base text-[var(--foreground)]/60 pl-0.5 mb-2">
                {start} - {end}
            </p>
            {children && (
                <div className="relative z-10 mt-4 text-lg text-[var(--foreground)]/80 leading-relaxed font-normal">
                    {children}
                </div>
            )}
        </article>
    );
}

function Education({ school }: { school: { name: string; degree: string; start: string; end: string; notes?: string } }) {
    return (
        <article className="flex max-w-2xl group relative flex-col items-start justify-between border-l border-zinc-200 dark:border-zinc-800 pl-6 pb-12 last:pb-0">
            <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] leading-snug">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-50/50 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10 block">
                    {school.degree}
                </span>
                <span className="relative z-10 block text-lg font-medium text-[var(--accent-primary)] mt-1">
                    {school.name}
                </span>
            </h3>
            {school.notes && (
                <p className="relative z-10 mt-2 text-lg text-[var(--foreground)]/80 leading-relaxed font-normal">
                    {school.notes}
                </p>
            )}
        </article>
    )
}

export default function Resume() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                            <h2 className="flex text-sm font-semibold text-[var(--foreground)]">
                                Resumes
                            </h2>
                            <div className="mt-6 flex flex-col gap-4">
                                <a
                                    className="group flex items-center justify-between gap-4 py-2 px-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                                    href="/documents/sanchit-resume.pdf" download
                                >
                                    <span className="text-sm font-medium text-[var(--foreground)]/80 dark:text-zinc-100">Industry Resume (PDF)</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl mb-12">
                        Resume
                    </h1>

                    <section className="mt-10">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-10">Work Experience</h2>
                        <div className="space-y-6">
                            <Role
                                company="Google"
                                title="Customer Engineer (AI & Machine Learning)"
                                start="Aug 2025"
                                end="Present"
                            >
                                In my current role as a Customer Engineer for AI/ML at Google, I support clients all over Germany as well as the DACH regions to conceptualize, implement and integrate AI and ML solutions on the Google Cloud Platform.
                            </Role>
                            <Role
                                company="Microsoft"
                                title="Cloud Solution Architect"
                                start="Jan 2023"
                                end="Jul 2025"
                            >
                                At Microsoft, I helped German and European customers build impactful Data and AI solutions on the Azure cloud.
                            </Role>
                            <Role
                                company="Rubinstein & Schmiedel AG"
                                title="Senior Software Engineer"
                                start="Aug 2022"
                                end="Jan 2023"
                            >
                                Worked as a senior software and data engineer, helping build one of Europe&apos;s first fully AI-driven cryptocurrency funds. Involved in building and maintaining AI trading application and on-premises ML infrastructure.
                            </Role>
                            <Role
                                company="Rubinstein & Schmiedel AG"
                                title="Software Engineer"
                                start="Aug 2021"
                                end="Aug 2022"
                            >
                                Developed software and APIs, managed Kubernetes deployments, MLOps, and Infrastructure-as-Code.
                            </Role>
                            <Role
                                company="Data Reply GmbH"
                                title="Big Data Engineer"
                                start="Mar 2019"
                                end="Aug 2021"
                            >
                                Munich, Germany. Worked on cloud and distributed computing projects with automotive and aviation clients. Developed enterprise chatbot platform on Azure.
                            </Role>
                            <Role
                                company="AUDI AG"
                                title="Data Scientist"
                                start="Jan 2018"
                                end="Jan 2019"
                            >
                                Stuttgart Area, Germany. TechHub Data Driven Production team. Leveraged Big Data, IoT and AI for smart factories.
                            </Role>
                        </div>
                    </section>

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-10">Education</h2>
                        <div className="space-y-6">
                            <Education
                                school={{
                                    name: "RWTH Aachen University",
                                    degree: "MSc. in Software Systems Engineering",
                                    start: "",
                                    end: "",
                                    notes: "Aachen, Germany. GPA: 1.3 (German Scale)"
                                }}
                            />
                            <Education
                                school={{
                                    name: "Indian Institute of Information Technology, Allahabad",
                                    degree: "B.Tech (Honours) in Information Technology",
                                    start: "",
                                    end: "",
                                    notes: "GPA: 9.08/10.0"
                                }}
                            />
                            <Education
                                school={{
                                    name: "Delhi Public School, Patna, India",
                                    degree: "Higher Secondary Schooling",
                                    start: "",
                                    end: "",
                                    notes: "Grades: 93.6%"
                                }}
                            />
                        </div>
                    </section>

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-10">Skills</h2>
                        <div className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--foreground)]">Cloud & DevOps</h3>
                                    <p className="text-[var(--foreground)]/80 text-lg leading-relaxed mt-2">Azure, Google Cloud Platform (GCP), Kubernetes, Terraform, MLOps</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--foreground)]">Development</h3>
                                    <p className="text-[var(--foreground)]/80 text-lg leading-relaxed mt-2">Python, HTML/CSS, API Development, Distributed Systems</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--foreground)]">Data & AI</h3>
                                    <p className="text-[var(--foreground)]/80 text-lg leading-relaxed mt-2">Machine Learning, Big Data, Algorithmic Trading Systems</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--foreground)]">Languages</h3>
                                    <p className="text-[var(--foreground)]/80 text-lg leading-relaxed mt-2">English (Native), German (Professional)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}
