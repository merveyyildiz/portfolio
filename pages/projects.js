import Link from 'next/link';
import React from 'react';
import ArrowLeftIcon from '../components/icons/ArrowLeft';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { getAllProjects } from "../functions/getAllProjects";

const Projects = ({ projects }) => {
  return (
    <Layout title={"Portfolio / Projects"} description={"my projects"}>
        <section className='h-full max-w-5xl pt-1 pb-8 px-4  mx-auto md:px-1'>
            {/** Projects */}
            <div className='grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 mb-5'>
                {
                    projects && projects.map((project) => (
                        <Project project={project} key={project.id}/>
                    ))
                }
            </div>
        </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
    const projects = await getAllProjects();
    return {
        props: {
            projects
        }
    }
};

export default Projects;