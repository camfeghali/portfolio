/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";


class Accordion extends MunkeyReact.Component {

    constructor(props) {
        super(props);
        const openSections = {};
        this.state = { 
            openSections
        };

        this.onClick = this.onClick.bind(this)
    }

    onClick (label){
        const {
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
            openSections: {
            [label]: !isOpen
            }
        });
    };

    render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <div style="margin-top: 1.5em">
                {children.map(child => {
                    return (
                        <AccordionSection
                            isOpen={!!openSections[child.props.label]}
                            label={child.props.label}
                            onClick={onClick}
                        >
                            {child.props.content}
                        </AccordionSection>
                    )
                })}
            </div>
        );
    }
}

export default Accordion;

class AccordionSection extends MunkeyReact.Component {
    constructor(props) {
        super(props)
        this.state = {
            children: {},
            isOpen: false,
            label: "" || null,
            onClick: null,
            isHovered: false
        }
    }

    onClick () {
        this.props.onClick(this.props.label)
    }

    onHover () {
        this.setState({isHovered: true})
    }

    onBlur () {
        this.setState({isHovered: false})
    }

    render () {
        const {
            props: { isOpen, label },
            state
        } = this;

        const isHovered = state.isHovered ? "rgb(169,169,169)" : "rgb(119,136,153)"
        
        return (
            <div>
                <div onClick={() => {this.onClick()}} onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onBlur()} style={{color: isHovered, fontSize: '18px',cursor: 'pointer' }}>
                    {label}
                </div>
                {isOpen && (
                    <div>
                        {this.props.children}
                    </div>
                )}
                <hr className="accordion-underline"/>
            </div>
        )
    }
}


export function AccordionElement (props) {

    return(
        <div>
        </div>
    )
} 