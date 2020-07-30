import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                home page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch =>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


