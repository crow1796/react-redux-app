import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/actions/hello'

class Hello extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="hello">
                { this.props.name }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.name
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setName: Actions.setName
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Hello)