import React from 'react';
import PermissionsStore from "../store/PermissionsStore";
import {ComponentBase} from "resub";

interface AppState {
    permissions: string[]
}

export default class PermissionsComponent extends ComponentBase<any, AppState> {

    getPermissions = async () => {
        PermissionsStore.updatePermissions("Item")
    }

    render() {
        return <React.Fragment>
            {this.state.permissions.length ? <h4>Not Empty</h4> : <h4>Empty</h4>}
            <button onClick={this.getPermissions}>Add Item</button>
        </React.Fragment>;
    }

    protected _buildState() {
        return {
            permissions: PermissionsStore.getPermissions(),
        }
    }
}