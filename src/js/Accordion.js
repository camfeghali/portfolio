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
            onClick: null
        }
    }

    onClick () {
        this.props.onClick(this.props.label)
    }

    render () {
        const {
            props: { isOpen, label },
        } = this;

        return (
            <div>
                <div onClick={() => {this.onClick()}} style={{fontSize: '18px',cursor: 'pointer', color: 'rgb(105,105,105)' }}>
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