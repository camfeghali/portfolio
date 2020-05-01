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
            <div style={{ border: '2px solid #008f68' }}>
                {children.map(child => {
                    console.log("child is: ", child)
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

        console.log("Inside render of AccordionSection")
        console.log("this.props.children are: ", this.props.children)

        return (
            <div
                style={{
                background: isOpen ? '#fae042' : '#6db65b',
                border: '1px solid #008f68',
                padding: '5px 10px',
                }}
            >
            <div onClick={() => {this.onClick()}} style={{ cursor: 'pointer' }}>
                {label}
                <div style={{ float: 'right' }}>
                    {!isOpen && <span>&#9650;</span>}
                    {isOpen && <span>&#9660;</span>}
                </div>
            </div>
                {isOpen && (
                    <div
                    style={{
                        background: '#6db65b',
                        border: '2px solid #008f68',
                        marginTop: 10,
                        padding: '10px 20px',
                    }}
                    >
                        {this.props.children}
                    </div>
                )}
            </div>
        )
    }
}


export function AccordionElement (props) {

    return(
        // <div label={props.label}>
        //     {props.content}
        // </div>
        <div>
            <h1>
                Hello
            </h1>
        </div>
    )
} 