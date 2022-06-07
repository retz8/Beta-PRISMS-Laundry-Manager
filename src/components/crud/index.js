import React from 'react';
import StartFirebase from '../firebaseConfig.index';
import { ref, set, get, update, remove, child } from "firebase/database";

class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: '',
            machines: []
        }
    }
    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
        this.getUserData();


    }
    getUserData = () => {
        const db = this.state.db;
        
    }

    render() {
        return (
            <>

            </>
        )
    }
}