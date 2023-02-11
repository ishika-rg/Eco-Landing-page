import { React, useEffect } from "react";
import "./About.css";

import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

// const Box = ({ num }) => {
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);
// };


// const stagger = {
//   animate: {
//     transition: {
//       delayChildren: 2,
//       staggerChildren: 2,
//     },
//   },
// };
// const header = {
//   initial: {
//     y: -60,
//     opacity: 0,
//     transition: {
//       duration: 5,
//       ease: "easeInOut",
//     },
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 6,
//       ease: "easeInOut",
//     },
//   },
// };


const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <div className={inView ? "about about_zoom" : "about"} ref = {ref}>
      <h1> ABOUT ECO</h1>
      <div className="h_line"></div>
      <div className="about_info">
        Our application increases engagement of your employees and reduces your
        carbon footprint. All this... while having fun.
      </div>
    </div>
  );
};

export default About;
