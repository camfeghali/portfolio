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
        padding: '1em 0 0 0'
    }
    return(
        <div style={style}>
            <h2>Professional Projects</h2>
            <hr className="heading-underline"/>
        </div>
    )
}