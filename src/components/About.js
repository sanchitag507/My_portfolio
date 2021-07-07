import React from 'react';

// import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'

import Skillcard from './Skillcard';

import {motion} from 'framer-motion'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using MongoDB",
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in Codeforces, Codechef, Hackerrank and Leetcode"
    },
    {
        icon: computer,
        title: "Machine Learning/Deep Learning",
        about: "Worked with frameworkks like Keras, OpenCV etc."
    },
]


const About = () => {
    const about_variants={
        hidden: {
            opacity: 0
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
        <motion.div className="about"
        variants={about_variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Development skills</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;