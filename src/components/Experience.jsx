/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            (experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              />
            )))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1D1836", color: "#FFF" }}
      contentArrowStyle={{ borderRidhgt: "7px solid #232631"}}
      iconStyle={{ background: experience.iconBg}}
      date={experience.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px]">
          {experience.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {
            experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))
          }
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

export default SectionWrapper(Experience, "work");
