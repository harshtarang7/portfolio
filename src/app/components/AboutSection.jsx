"use client"
import React, { useEffect, useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import TabButtons from './TabButtons';


const Tab_Data=[
    {
        title:"Skills",
        id:"skills",
        Content:(
            <ul className='list-disc ms-5'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>Responsive Design</li>
                <li>TailwindCSS</li>
                <li>Front-end: (React.js,Next.js)</li>
                <li>Back-end : (Node.js,NestJS)</li>
                <li>Database : (MongoDB,MYSQL)</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        Content:(
            <ul className='list-disc ms-5'>
                <li>Master in Computer Applications</li>
                <li>Bachelor in Computer Applications</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        Content:(
            <ul className='list-disc ms-5'>
                <li>Introduction to python</li>
                <li>JavaScript full Course</li>
                <li>HTML & CSS full Course</li>
                <li>MERN STACK </li>
            </ul>
        )
    },
]

export default function AboutSection() {

    const contentRef = useRef(null);

    let[tabOpen, settabOpen]=useState("skills");
    let[isPending, startTransition]=useTransition();

    const handletabChange=(id)=>{
        startTransition(()=>{
            settabOpen(id);
            
        });
    };

    const scrollToContent = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id='about'>
            <div className="text-white">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
                    <div>
                        <Image src={require("../../../public/about.jpg")} width={500} height={400} alt='about'/>
                    </div>

                    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                        <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                        <p className='text-base lg:text-lg '>
                            I am Front-end web developer with a passion for creating interactive and responsive web applications.
                            I have experience working with HTML, CSS, JavaScript, React, Next.js and as of now i am learning about backend
                            in which I have a bit knowledge of Node.js, express, mongodb. I am a quick learner and I am always looking to
                            expand my knowledge and improve my skills.
                        </p>
                        <div className='flex flex-row mt-8 '>
                            <TabButtons selectTab={()=>handletabChange("skills")} active={tabOpen==="skills"}>Skills</TabButtons>
                            <TabButtons selectTab={()=>handletabChange("education")} active={tabOpen==="education"}>Education</TabButtons>
                            <TabButtons selectTab={()=>handletabChange("certifications")} active={tabOpen==="certifications"}>Certifications</TabButtons>

                        </div>
                        <div className='mt-8' ref={contentRef}>
                            {Tab_Data.find((t)=>t.id ===tabOpen).Content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}