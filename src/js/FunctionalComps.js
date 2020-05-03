/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

export function SocialLinks () {
    return(
        <div>
            <p>
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
    const style = {color: 'rgb(40, 38, 38)'}
    return(
        <div>
            <p style={style}>JavaScript | ReactJS | Ruby on Rails | Python | Django</p>
        </div>
    )
}

export function Heading (props) {
    const style = {
        margin: '1.5em 0 0 0',
        color: 'rgb(208,147,83)'
    }
    return(
        <div style={style}>
            <h2>{props.title}</h2>
            <hr className="heading-underline"/>
        </div>
    )
}

export function BlogPost (props) {
    const style = {
        margin: '1.5em 0 0 0',
        color: 'rgb(208,147,83)'
    }
    return(
        <div style="margin: 1.5em 1em 1em 1em">
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
            <h2>Made with &nbsp; <span style="color: red"> &hearts; </span></h2> 
        </div>
    )
}