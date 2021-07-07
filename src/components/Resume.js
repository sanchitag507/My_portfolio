import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

import {motion} from 'framer-motion'

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '70'
    },
    {
        icon: react,
        name: 'C++/C',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML/CSS/Bootstrap/Jquery',
        level: '70'
    },
    {
        icon: react,
        name: 'react',
        level: '40'
    },
    {
        icon: react,
        name: 'Node/Express',
        level: '60'
    },
]

const tools = [
    {
        icon: react,
        name: 'MATLAB',
        level: '60'
    }
]


const Resume = () => {
    const resume_variants={
        hidden: {
            opacity:0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"
        variants={resume_variants}
        initial="hidden"
        animate="visible"
        exit="exit">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Indian Institute of Technology,Dhanbad
                        </h5>
                        <p className="resume-card__name">
                            B.tech Electronics and Communication Engineering(2019-2023)
                        </p>
                        <p className="resume-card__details">Current CGPA: 8.75</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            D.A.V Public School, Koylanagar, Dhanbad
                        </h5>
                        <p className="resume-card__name">
                        Higher Secondary (2017-2019), CBSE
                        </p>
                        <p className="resume-card__details">Percentage: 94%</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            D.A.V Public School, Koylanagar, Dhanbad
                        </h5>
                        <p className="resume-card__name">
                        Matriculation (-2017), CBSE
                        </p>
                        <p className="resume-card__details">CGPA: 10</p>
                    </div>
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Sports Programming
                    </h4>
                    <div className="resume-card__body">
                        <p className="resume-extracurriculars">Codechef: Rating-1836(4 star)</p>
                        <p className="resume-extracurriculars">Codeforces: Rating-1496</p>
                        <p className="resume-extracurriculars">Leetcode: Rating: 1678</p>
                    </div>
                    <h4 className="resume-card__heading">
                        Achievements and Extracurriculars
                    </h4>
                    <div className="resume-card__body">
                        <p className="resume-extracurriculars">"Got a rank 2322 among 12200 participants in Google Kickstart Round 1C"</p>
                        <p className="resume-extracurriculars">Got a rank 996 in Codeforces Round #728 (DIV 2)</p>
                        <p className="resume-extracurriculars">Member of organising team for event Aarambh(Kartavya)</p>
                        <p className="resume-extracurriculars">Represented jharkhand in chess</p>
                        <p className="resume-extracurriculars">Organized Art Galleries and Art Workshops as a member of ArtFreaks Club</p>
                        <p className="resume-extracurriculars">Volunteer at FFI, Kartavya</p>
                        <p className="resume-extracurriculars">Member of Chess Club and got gold medal in IIT ISM Fresher's Chess tournament.</p>
                    </div>
                    {/* <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Digital Marketing 
                        </h5>
                        <p className="resume-card__name">
                            Internshala
                        </p>
                        <p className="resume-card__details">Digital Marketing using social media</p>
                    </div> */}
                    
                </div>
            </div>

            {/* <div className="row">
                <div className="col-lg-6 resume-languages">
                    
                </div>
                <div className="col-lg-6 resume-languages">
                    
                </div>
            </div> */}
        </motion.div>
    );
};

export default Resume;