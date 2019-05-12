import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';

class Modules extends Component {
    
    constructor(props) {
        super(props);
        this.state = {cards: [
            {
                heading: "Module 1",
                id: 1,
                subheading: "Test Module 1",
                titleClass: "card-header-success",
            },
            {
                heading: "Module 2",
                id: 2,
                subheading: "Test Module 2",
                titleClass: "card-header-danger",
            },
            {
                heading: "Module 3",
                id: 3,
                subheading: "Test Module 3",
                titleClass: "card-header-success",
            }
        ]};
    }
    componentDidMount() {
       
    }

    render () {

        // const { cards, token } = this.props;
        
        console.log('Modules', this.state.cards);
        // if(!token){
        //     return <Redirect to='/login' />
        // }

        document.body.classList.add("dashboard");
        
        return (
            <Card cards={this.state.cards}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards : state.dashboard.cards,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCards: () => dispatch(getCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modules);