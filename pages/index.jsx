import Head from "next/head";
import data from "./api/data";

import Header from "../components/Header";
// import Hero from "../components/Hero";
import ScrollText from "../components/ScollText";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PersonalProjects from "../components/PersonalProjects";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bob The Dev</title>
                <meta
                    name="description"
                    content="Personal Portfolio for Bob Kelly"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link rel="icon" href="/icons8-backend-development-32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&family=Judson:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>
                <Header />
                {/* <Hero /> */}
                <ScrollText />
                <Projects projects={data.projects} />
                <PersonalProjects projects={data.personalProjects} />
                <About />
                <Skills />
                <Footer />
            </main>
        </>
    );
}
