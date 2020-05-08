/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

export function SocialLinks () {
    return(
        <div>
            <p className="social-media-links">
                <a href="https://github.com/camfeghali?tab=repositories">
                    Github &nbsp;
                </a>
                /
                <a href="https://www.linkedin.com/in/camille-feghali-466143aa/">
                    &nbsp; LinkedIn &nbsp;
                </a>
                /

                <a href="https://medium.com/@camfeg">
                    &nbsp; Blog &nbsp;
                </a>
                /
                <a>
                    &nbsp; camfeg@gmail.com &nbsp;
                </a>
            </p>
        </div>
    )
}

export function FavoriteTech () {
    return(
        <div>
            <p className="favorite-tech"> JavaScript | ReactJS | Ruby on Rails | Python | Django</p>
        </div>
    )
}

export function Heading (props) {
    const style = {
        margin: '3em 0 0 0',
        color: 'rgb(208,147,83)'
    }
    return(
        <div style={style}>
            <h2 id={props.id}>{props.title}</h2>
            <hr className="heading-underline"/>
        </div>
    )
}

export function BlogPost (props) {
    return(
        <div style="margin: 2.5em 1em 1em 1em">
        <div>
            <a href={props.link}>{props.title}</a>
        </div>
        <hr className="accordion-underline"/>
    </div>
    )
}

export function Footer () {
    return (
        <div className="footer">
            <h2>Made with &nbsp; <span style="color: red"> &hearts; </span> &nbsp; by me</h2> 
        </div>
    )
}

export function NavBar () {
    return (
        <ul className="navbar">
            <li className="nav-link"><a className="nav-link-content" href="#about">About</a></li>
            <li className="nav-link"><a className="nav-link-content" href="#professional-projects">Professional Projects</a></li>
            <li className="nav-link"><a className="nav-link-content" href="#personal-projects">Personal Projects</a></li>
            <li className="nav-link"><a className="nav-link-content" href="#blog">Blog</a></li>
        </ul>
    )
}