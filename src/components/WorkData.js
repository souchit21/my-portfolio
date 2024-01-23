import proj1 from '../images/password.jpg'
import proj2 from '../images/ecommerce-website.jpg';
import proj3 from '../images/swiftpath-image.webp';

const projectCardData = [
    {
        imgsrc: proj3,
        title: "SwiftPath",
        text: "Developed an interface to trace shortest path and visualize algorithms",
        view: "https://dreamy-macaron-540e91.netlify.app/",
        source: "https://github.com/souchit21/Shotest-Path-Finder",
        skills: ["ReactJS", "JavaScript", "Algorithms"],
    },
    {
        imgsrc: proj2,
        title: "E-Commerce Website",
        text:"Developed a full-stack e-commerce website clone to flipkart.",
        view: "https://659ac0884cfc799d6f7e8ac6--amazing-unicorn-65f3ed.netlify.app/",
        source:"https://github.com/souchit21/E-Commerce-Website",
        skills : ["Node.js", "MongoDB", "Redux"],
    },
    {
        imgsrc: proj1,
        title: "Password Generator",
        text: "Created a web application to suggest strong password containing letters, digits and symbols",
        view: "https://phenomenal-cocada-4fd2a7.netlify.app",
        source: "https://github.com/souchit21/Web-Applications/tree/main/PasswordGenerator",
        skills: ["JavaScript", "CSS", "HTML"]
    },
    
];

export default projectCardData;