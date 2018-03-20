import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/actions/hello'

class Hello extends React.Component {

    constructor(props){
        super(props)
        this.props.sayHello('Joshua')
    }

    render(){
        return (
            <div id="hello">
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        sayHello: Actions.sayHello
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Hello)