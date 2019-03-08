import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Create extends Component {
    constructor(){
        super();
        extendObservable(this, {
            goodFriends: []
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                
            </div>
        )
    }
}
export default Create;