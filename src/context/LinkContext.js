import { createContext, useState } from "react";
import { ReactComponent as LogoGitHub } from "../assets/images/icon-github.svg";
import { ReactComponent as LogoYouTube } from "../assets/images/icon-youtube.svg";
import { ReactComponent as LogoLinkedIn } from "../assets/images/icon-linkedin.svg";
import { ReactComponent as LogoFacebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as LogoFrontendMentor } from "../assets/images/icon-frontend-mentor.svg";
import { ReactComponent as LogoTwitch } from "../assets/images/icon-twitch.svg";
import { ReactComponent as LogoStackOverFlow } from "../assets/images/icon-stack-overflow.svg";
import { ReactComponent as LogoDevTo } from "../assets/images/icon-devto.svg";
import { ReactComponent as LogoCodeWars } from "../assets/images/icon-codewars.svg";
import { ReactComponent as LogoCodePen } from "../assets/images/icon-codepen.svg";
import { ReactComponent as LogoFreeCodeCamp } from "../assets/images/icon-freecodecamp.svg";
import { ReactComponent as LogoTwitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as LogoEmail } from "../assets/images/icon-email.svg";
import { ReactComponent as LogoGitLab } from "../assets/images/icon-gitlab.svg";
import { useEffect } from "react";

const LinkContext = createContext({})

const listArray = [
    {id: 1, title: "GitHub", icon: <LogoGitHub />, color: "rgba(26, 26, 26, 1)", link: "https://github.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 2, title: "YouTube", icon: <LogoYouTube />, color: "rgba(238, 57, 57, 1)", link: "https://www.youtube.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:user\/|c\/)?|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 3, title: "LinkedIn", icon: <LogoLinkedIn />, color: "rgba(45, 104, 255, 1)", link: "https://linkedin.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|pub|company)\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 4, title: "Facebook", icon: <LogoFacebook />, color: "rgba(253, 189, 72, 0.8)", link: "https://www.facebook.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:profile\.php\?id=|people\/)?([a-zA-Z0-9._-]+)(?:\/.*)?$/}, 
    {id: 5, title: "Frontend Mentor", icon: <LogoFrontendMentor />, color: "rgba(22, 117, 169, 0.9)", link: "https://www.frontendmentor.io/", regEx: /^https:\/\/www.frontendmentor.io\/profile\/.+$/}, 
    {id: 6, title: "Twitch", icon: <LogoTwitch />, color: "rgba(201, 96, 164, 0.6)", link: "https://www.twitch.tv/", regEx: /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 7, title: "Stack Overflow", icon: <LogoStackOverFlow />, color: "rgba(46, 167, 51, 0.9)", link: "https://stackoverflow.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?stackoverflow\.com\/users\/([0-9]+)(?:\/.*)?$/}, 
    {id: 8, title: "Dev.to", icon: <LogoDevTo />, color: "rgba(51, 51, 51, 1)", link: "https://dev.to/", regEx: /^(?:https?:\/\/)?(?:www\.)?dev\.to\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 9, title: "CodeWars", icon: <LogoCodeWars />, color: "rgba(138, 26, 80, 1)", link: "https://www.codewars.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?codewars\.com\/users\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 10, title: "CodePen", icon: <LogoCodePen />, color: "rgba(238, 47, 117, 0.6)", link: "https://codepen.io/", regEx: /^(?:https?:\/\/)?(?:www\.)?codepen\.io\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 11, title: "freeCodeCamp", icon: <LogoFreeCodeCamp />, color: "rgba(48, 34, 103, 1)", link: "https://www.freecodecamp.org/", regEx: /^(?:https?:\/\/)?(?:www\.)?freecodecamp\.org\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 12, title: "Twitter", icon: <LogoTwitter />, color: "rgba(47, 132, 229, 0.8)", link: "https://twitter.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)(?:\/.*)?$/}, 
    {id: 13, title: "Email", icon: <LogoEmail />, color: "rgba(155, 100, 214, 1)", link: "https://www.gmail.com", regEx: /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
    {id: 14, title: "GitLab", icon: <LogoGitLab />, color: "rgba(114, 85, 82, 0.7)", link: "https://about.gitlab.com/", regEx:  /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
];

const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;

export const LinkProvider = ({children}) => {
   
    const [buttonPressed, setButtonPressed] = useState(false);
    const [links, setLinks] = useState([]);
    const [shareUrl, setShareUrl] = useState("https://github.com/");
    const [sharedClicked, setSharedClicked] = useState(false);

    useEffect(() => {
        const storedLinks = localStorage.getItem("links");
        if(storedLinks) {
          setLinks(JSON.parse(storedLinks))
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
      }, [links]);
  
    const updateList = (id, input, platform) => {
        const isDuplicate = links.some(link => link.id === id)
        if(isDuplicate) {
            const updatedList = [...links];
            updatedList.splice(id -1, 1, {id, input, platform})
            setLinks(updatedList);
        } else {
            setLinks((prev) => [...prev, {id, input, platform}])
        }
    };
  
    const handleClick = () => {
        setButtonPressed(true);
    };

    const updateLinkPlatform = (id, platform) => {
        const newLinks = links.map(link => {
            if(id === link.id) {
                return { ...link, platform}
            }
            return link;
        })
        setLinks(newLinks)
    };

    const contextValue = {
        buttonPressed: buttonPressed,
        linkRegex: linkRegex,
        links: links,
        shareUrl: shareUrl,
        sharedClicked: sharedClicked,
        listArray: listArray,
        handleClick: handleClick,
        updateList: updateList,
        updateLinkPlatform: updateLinkPlatform,
        setLinks: setLinks,
        setButtonPressed: setButtonPressed,
        setShareUrl: setShareUrl,
        setSharedClicked: setSharedClicked,
    }

    return (
        <LinkContext.Provider value={contextValue}> 
            {children}
        </LinkContext.Provider>
    )
}

export default LinkContext