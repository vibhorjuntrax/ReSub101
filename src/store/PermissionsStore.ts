import {autoSubscribe, AutoSubscribeStore, StoreBase} from "resub";

@AutoSubscribeStore
class PermissionsStore extends StoreBase {

    private _permissions: string[] = [];

    public updatePermissions(permissions: string) {
        this._permissions = this._permissions.concat(permissions);
        this.trigger();
    }


    @autoSubscribe
    public getPermissions() {
        return this._permissions;
    }

}

export default new PermissionsStore();