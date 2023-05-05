/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Conversations } from "./api/resources/conversations/client/Client";
import { Links } from "./api/resources/links/client/Client";
import { RevUsers } from "./api/resources/revUsers/client/Client";
import { Customization } from "./api/resources/customization/client/Client";
import { SysUsers } from "./api/resources/sysUsers/client/Client";

export declare namespace DevRevBetaClient {
    interface Options {
        environment?: environments.DevRevBetaEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class DevRevBetaClient {
    constructor(protected readonly options: DevRevBetaClient.Options) {}

    protected _conversations: Conversations | undefined;

    public get conversations(): Conversations {
        return (this._conversations ??= new Conversations(this.options));
    }

    protected _links: Links | undefined;

    public get links(): Links {
        return (this._links ??= new Links(this.options));
    }

    protected _revUsers: RevUsers | undefined;

    public get revUsers(): RevUsers {
        return (this._revUsers ??= new RevUsers(this.options));
    }

    protected _customization: Customization | undefined;

    public get customization(): Customization {
        return (this._customization ??= new Customization(this.options));
    }

    protected _sysUsers: SysUsers | undefined;

    public get sysUsers(): SysUsers {
        return (this._sysUsers ??= new SysUsers(this.options));
    }
}
