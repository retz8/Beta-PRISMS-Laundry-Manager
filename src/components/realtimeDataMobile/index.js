import StartFirebase from '../firebaseConfig/index';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import "./css/mobilestyles.css"

//image path = '../img/green_dryer.jpg'
const db = StartFirebase();

export class RealtimeDataMobile extends React.Component {
    constructor() {
        super();
        this.state = {
            machines: []
        }
    }
    
    componentDidMount() {
        const dbRef = ref(db, "machines");

        onValue(dbRef, (snapshot) => {
            let allMachines = [];
            snapshot.forEach(snap => {
                allMachines.push(snap.val());
            });
            this.setState({ machines: allMachines });
        });
    }

    render() {
        return (
            <div className="Machines">
                {this.state.machines.map((machine, index) => {
                    let cName = "mmachine"  + index.toString();
                    return (
                        machine.type === "dryer" ? (
                            machine.status === "clear" ? (
                                <div>
                                    <img className = {cName} alt = "green dryer"  src={require("../img/green_dryer.jpg")}  />
                                </div>
                            ) : (
                                machine.status === "working" ? (
                                    <div>
                                        <img className={cName} alt = "orange dryer"  src={require("../img/orange_dryer.jpg")} />
                                    </div>
                                ) : (
                                    machine.status === "done" ? (
                                        <div>
                                            <img className={cName} alt = "purple dryer" src={require("../img/purple_dryer.jpg")} /> 
                                        </div>
                                    ): (
                                        machine.status === "pause" ? (
                                            <div>
                                                <img className={cName} alt = "orange dryer" src={require("../img/orange_dryer.jpg")} /> 
                                            </div>
                                        ): (
                                            <div>
                                                <img className={cName} alt = "empty dryer" src={require("../img/empty_dryer.png")} /> 
                                            </div>
                                        )
                                    )
                                    
                                )
                            )
                        ) : (
                            machine.status === "clear" ? (
                                <div>
                                    <img className={cName} alt = "green washer"  src={require("../img/green_washer.jpg")} />
                                </div>
                            ) : (
                                machine.status === "working" ? (
                                    <div>
                                        <img className={cName} alt = "orange washer"   src={require("../img/orange_washer.jpg")} />
                                    </div>
                                ) : (
                                    machine.status === "done" ? (
                                        <div>
                                            <img className={cName} alt = "purple washer" src={require("../img/purple_washer.jpg")} /> 
                                        </div>
                                    ): (
                                        machine.status === "pause" ? (
                                            <div>
                                                <img className={cName} alt = "orange washer" src={require("../img/orange_washer.jpg")} /> 
                                            </div>
                                        ): (
                                            <div>
                                                <img className={cName} alt = "empty washer" src={require("../img/empty_washer.png")} /> 
                                            </div>
                                        )
                                    )
                                    
                                )
                            )
                        )
                    )
                })}
            </div>
        )
    }
}