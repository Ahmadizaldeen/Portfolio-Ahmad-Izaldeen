
import {FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava,
        FaPython, FaNodeJs, FaPhp, FaGitAlt, FaWordpress,
        FaAws, FaBrain, FaUsers,} from "react-icons/fa";
import "./TechIcons.css";

// Icons - Bereich top: 35% bis 90% platziert.
// Animationsdauer zwischen 5s und 10s für mehr Variation.
const icons = [
  // Frontend
  { icon: FaReact, label: "React",      top: 38, left: 2,  animationDuration: 2.2 },
  { icon: FaJs,    label: "JavaScript", top: 45, left: 35, animationDuration: 10, },
  { icon: FaHtml5, label: "HTML5",      top: 70, left: 22, animationDuration: 9.2 },
  { icon: FaCss3Alt, label: "CSS3",     top: 60, left: 12, animationDuration: 5.8 },
  // Backend
  { icon: FaJava,   label: "Java",    top: 50, left: 65, animationDuration: 7.5 },
  { icon: FaPython, label: "Python",  top: 55, left: 80, animationDuration: 6.7, },
  { icon: FaNodeJs, label: "Node.js", top: 80, left: 70, animationDuration: 9.7,},
  { icon: FaPhp,    label: "PHP",     top: 85, left: 6, animationDuration: 5.3 },
  // Tools
  { icon: FaGitAlt, label: "Git", top: 75, left: 40, animationDuration: 7.2 },
  { icon: FaWordpress,  label: "WordPress", top: 88, left: 55, animationDuration: 10, },
  // Cloud
  { icon: FaAws, label: "AWS", top: 65, left: 55, animationDuration: 8.8 },
  // KI
  { icon: FaBrain, label: "AI", top: 40, left: 50, animationDuration: 5.6 },
  // Scrum
  { icon: FaUsers, label: "Agile - Scrum", top: 85, left: 85, animationDuration: 8.9 },
];
// Die Icons schweben im Bereich unterhalb des Textes (top: 35% bis 90%)
const TechIcons = () => (
    <div className="tech-icons-layer">
      {icons.map(({ icon: Icon, label, top, left, animationDuration }, i) => (
        <div key={label} className="tech-icon"
          style={{"--top"              : `${top}%`,
                  "--left"             : `${left}%`,
                  "--animationDuration": `${animationDuration}s`,
          }}
          tabIndex={0} // Accessibility: Icons sind fokussierbar
       >
        <Icon className="tech-icon__icon" aria-label={label} />
        <span className="tech-icon__tooltip">{label}</span>
      </div>
    ))}
  </div>
);

export default TechIcons;
