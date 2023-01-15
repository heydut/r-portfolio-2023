import one from "../../assets/Categories1.png";
import two from "../../assets/Categories2.png";
import three from "../../assets/Categories3.png";
import four from "../../assets/Categories4.png";

const categories = [
  {
    id: 1,
    section: "aboutme",
    image: <img src={`${one}`} alt="tech" />,
    title: " About Me",
    description: "A little more about me.",
    color: "#101010",
  },
  {
    id: 2,
    section: "frontend",
    image: <img src={`${two}`} alt="tech" />,
    title: "Frontend Projects",
    description: "Some of my frontend projects.",
    color: "#101010",
  },
  {
    id: 3,
    section: "uidesign",
    image: <img src={`${three}`} alt="tech" />,
    title: "UI Design",
    description: "Selection of my designs made in Figma.",
    color: "#101010",
  },
  {
    id: 4,
    section: "contact",
    image: <img src={`${four}`} alt="tech" />,
    title: "Let's talk",
    description: "Information on where to find and contact me.",
    color: "#101010",
  },
];

export default categories;
