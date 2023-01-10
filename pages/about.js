import React from "react";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import { zoomIn, swing } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInP = styled.p`
  animation: 3s ${zoomInAnimation};
`;

const About = (data) => {
  return (
    <Layout title={"Portfolio / About"} description={"about"}>
      <section className="h-full max-w-5xl pt-1 pb-8 px-4  mx-auto md:px-1">
        {/** About */}
        <div className="mt-12 mb-8">
          <p className="font-istok">
            Hello. I`m Merve Yıldız. I graduated from Karabuk University
            Computer Engineering. Currently I work as a frontend developer at
            Demirören Medya.
          </p>
        </div>

        {/* Experience*/}
        <div className="text-3xl text-center my-10 font-rockNRoll">
          Experience
        </div>

        {data && data?.data.experience && data.data.experience.length > 0 && (
          <div className="flex">
            {/** border-left */}
            <div className="w-3 bg-gradient-to-b from-pink-500 via-indigo-400 to-purple-700" />
            <div>
              {data.data.experience.map((experience) => (
                <div
                  key={experience.id}
                  className="py-8 pl-12   border-b border-b-slate-300 dark:border-b-slate-700 dark:bg-gray-dark "
                >
                  <p className="font-semibold text-2xl pb-2">
                    {experience.position}
                  </p>
                  <span className="text-slate-600 dark:text-slate-300 text-md mt-2">
                    {experience.company} / {experience.date}
                  </span>
                  <ZoomInP className="font-istok dark:text-slate-300  mt-2">
                    {experience.description}
                  </ZoomInP>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* education*/}
        <div className="text-3xl text-center my-10 font-rockNRoll">
          Education
        </div>

        {data &&
          data?.data.education &&
          data.data.education.length > 0 &&
          data.data.education.map((school) => (
            <div
              className="grid grid-cols-3 gap-x-20 my-8  pb-2 "
              key={school.id}
            >
              <div className="col-span-3 md:col-span-1">
                <p className="font-semibold">{school.date}</p>
              </div>

              <ZoomInP className="font-istok col-span-3 md:col-span-2 mt-2 md:mt-0">
                {school.schoolName}
              </ZoomInP>
              <div
                style={{ height: "2px" }}
                className="col-span-3 mt-8  bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700"
              ></div>
            </div>
          ))}

        {/* Skills */}
        <div className="text-3xl text-center my-10 font-rockNRoll">
          Skills
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-20 gap-y-10">
          {data &&
            data?.data.skills &&
            data.data.skills.length > 0 &&
            data.data.skills.map((skill) => (
              <li className="flex justify-start items-center" key={skill.id}>
                <span className="w-2 h-2 rounded-full bg-pink-700 inline-block mr-4"></span>
                {skill.skill}
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${NEXT_PUBLIC_URL}/api/about`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default About;
