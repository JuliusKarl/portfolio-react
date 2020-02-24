import React, {Component} from 'react'

class CollapsedMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <div className="collapsedMenu">
                <a href="#aboutLink" onClick={this.props.hamburgerChange}><h1>about</h1></a>
                <a href="#projectsLink" onClick={this.props.hamburgerChange}><h1>projects</h1></a>
                <a href="#contactLink" onClick={this.props.hamburgerChange}><h1>contact</h1></a>
            </div>
        )
    }
}

export default CollapsedMenu