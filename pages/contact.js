import React from "react";
import LocationIcon from "../components/icons/LocationIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import EmailIcon from "../components/icons/EmailIcon";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import { fadeInRight, fadeInLeft } from "react-animations";

const FadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInRightAnimationDiv = styled.div`
  animation: 2s ${FadeInRightAnimation};
`;

const FadeInLeftAnimation = keyframes`${fadeInLeft}`;

const FadeInLeftAnimationDiv = styled.div`
  animation: 2s ${FadeInLeftAnimation};
`;

const Contact = () => {
    return (
        <Layout title={"Portfolio / Contact"} description={"contact"}>
            <div className="flex justify-center items-center flex-col gap-3 mt-28 w-full">
                <FadeInRightAnimationDiv className="w-full md:w-1/2 lg:w-1/3 select-none flex flex-row items-center shadow-sm rounded-md border border-slate-300 dark:border-slate-700 py-2 px-4">
                    <LocationIcon className={"w-8 h-5 fill-current"} />
                    <span className="bg-transparent py-2 pl-9 focus:outline-none outline-none sm:text-sm">Darıca/ Kocaeli Turkiye</span>
                </FadeInRightAnimationDiv>

                <FadeInLeftAnimationDiv className="w-full md:w-1/2 lg:w-1/3 select-none flex flex-row items-center shadow-sm rounded-md border border-slate-300 dark:border-slate-700 py-2 px-4">
                    <PhoneIcon className={"w-8 h-5 fill-current"} />
                    <span className="bg-transparent py-2 pl-9 focus:outline-none outline-none sm:text-sm"  value="" disabled>+90 0535 848 57 99</span>
                </FadeInLeftAnimationDiv>
                
                <FadeInRightAnimationDiv className="w-full md:w-1/2 lg:w-1/3 flex flex-row items-center shadow-sm rounded-md border border-slate-300 dark:border-slate-700 py-2 px-4">
                    <EmailIcon className={"w-8 h-5 fill-current"} />
                    <a href="mailto:merveyildizzz41@gmail.com" className="bg-transparent py-2 pl-9 w-full focus:outline-none outline-none sm:text-sm">merveyildizzz41@gmail.com</a>
                </FadeInRightAnimationDiv>
            </div>
        </Layout>
    )
}

export default Contact;