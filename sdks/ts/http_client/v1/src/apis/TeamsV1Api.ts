// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListTeamMembersResponse,
    V1ListTeamMembersResponseFromJSON,
    V1ListTeamMembersResponseToJSON,
    V1ListTeamsResponse,
    V1ListTeamsResponseFromJSON,
    V1ListTeamsResponseToJSON,
    V1Team,
    V1TeamFromJSON,
    V1TeamToJSON,
    V1TeamMember,
    V1TeamMemberFromJSON,
    V1TeamMemberToJSON,
} from '../models';

export interface CreateTeamRequest {
    owner: string;
    body: V1Team;
}

export interface CreateTeamMemberRequest {
    owner: string;
    team: string;
    body: V1TeamMember;
}

export interface DeleteTeamRequest {
    owner: string;
    team: string;
}

export interface DeleteTeamMemberRequest {
    owner: string;
    team: string;
    user: string;
}

export interface GetTeamRequest {
    owner: string;
    team: string;
}

export interface GetTeamMemberRequest {
    owner: string;
    team: string;
    user: string;
}

export interface ListTeamMembersRequest {
    owner: string;
    team: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListTeamNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListTeamsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchTeamRequest {
    owner: string;
    teamName: string;
    body: V1Team;
}

export interface PatchTeamMemberRequest {
    owner: string;
    team: string;
    memberUser: string;
    body: V1TeamMember;
}

export interface UpdateTeamRequest {
    owner: string;
    teamName: string;
    body: V1Team;
}

export interface UpdateTeamMemberRequest {
    owner: string;
    team: string;
    memberUser: string;
    body: V1TeamMember;
}

/**
 * 
 */
export class TeamsV1Api extends runtime.BaseAPI {

    /**
     * Create team
     */
    async createTeamRaw(requestParameters: CreateTeamRequest): Promise<runtime.ApiResponse<V1Team>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createTeam.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createTeam.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamFromJSON(jsonValue));
    }

    /**
     * Create team
     */
    async createTeam(requestParameters: CreateTeamRequest): Promise<V1Team> {
        const response = await this.createTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create team member
     */
    async createTeamMemberRaw(requestParameters: CreateTeamMemberRequest): Promise<runtime.ApiResponse<V1TeamMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createTeamMember.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling createTeamMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createTeamMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamMemberFromJSON(jsonValue));
    }

    /**
     * Create team member
     */
    async createTeamMember(requestParameters: CreateTeamMemberRequest): Promise<V1TeamMember> {
        const response = await this.createTeamMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete team
     */
    async deleteTeamRaw(requestParameters: DeleteTeamRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteTeam.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling deleteTeam.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete team
     */
    async deleteTeam(requestParameters: DeleteTeamRequest): Promise<void> {
        await this.deleteTeamRaw(requestParameters);
    }

    /**
     * Delete team member details
     */
    async deleteTeamMemberRaw(requestParameters: DeleteTeamMemberRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteTeamMember.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling deleteTeamMember.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteTeamMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members/{user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete team member details
     */
    async deleteTeamMember(requestParameters: DeleteTeamMemberRequest): Promise<void> {
        await this.deleteTeamMemberRaw(requestParameters);
    }

    /**
     * Get team
     */
    async getTeamRaw(requestParameters: GetTeamRequest): Promise<runtime.ApiResponse<V1Team>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getTeam.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling getTeam.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamFromJSON(jsonValue));
    }

    /**
     * Get team
     */
    async getTeam(requestParameters: GetTeamRequest): Promise<V1Team> {
        const response = await this.getTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get team member details
     */
    async getTeamMemberRaw(requestParameters: GetTeamMemberRequest): Promise<runtime.ApiResponse<V1TeamMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getTeamMember.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling getTeamMember.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getTeamMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members/{user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamMemberFromJSON(jsonValue));
    }

    /**
     * Get team member details
     */
    async getTeamMember(requestParameters: GetTeamMemberRequest): Promise<V1TeamMember> {
        const response = await this.getTeamMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get team members
     */
    async listTeamMembersRaw(requestParameters: ListTeamMembersRequest): Promise<runtime.ApiResponse<V1ListTeamMembersResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listTeamMembers.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling listTeamMembers.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListTeamMembersResponseFromJSON(jsonValue));
    }

    /**
     * Get team members
     */
    async listTeamMembers(requestParameters: ListTeamMembersRequest): Promise<V1ListTeamMembersResponse> {
        const response = await this.listTeamMembersRaw(requestParameters);
        return await response.value();
    }

    /**
     * List teams names
     */
    async listTeamNamesRaw(requestParameters: ListTeamNamesRequest): Promise<runtime.ApiResponse<V1ListTeamsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listTeamNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListTeamsResponseFromJSON(jsonValue));
    }

    /**
     * List teams names
     */
    async listTeamNames(requestParameters: ListTeamNamesRequest): Promise<V1ListTeamsResponse> {
        const response = await this.listTeamNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List teams
     */
    async listTeamsRaw(requestParameters: ListTeamsRequest): Promise<runtime.ApiResponse<V1ListTeamsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listTeams.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListTeamsResponseFromJSON(jsonValue));
    }

    /**
     * List teams
     */
    async listTeams(requestParameters: ListTeamsRequest): Promise<V1ListTeamsResponse> {
        const response = await this.listTeamsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch team
     */
    async patchTeamRaw(requestParameters: PatchTeamRequest): Promise<runtime.ApiResponse<V1Team>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchTeam.');
        }

        if (requestParameters.teamName === null || requestParameters.teamName === undefined) {
            throw new runtime.RequiredError('teamName','Required parameter requestParameters.teamName was null or undefined when calling patchTeam.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchTeam.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team.name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team.name"}}`, encodeURIComponent(String(requestParameters.teamName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamFromJSON(jsonValue));
    }

    /**
     * Patch team
     */
    async patchTeam(requestParameters: PatchTeamRequest): Promise<V1Team> {
        const response = await this.patchTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch team member
     */
    async patchTeamMemberRaw(requestParameters: PatchTeamMemberRequest): Promise<runtime.ApiResponse<V1TeamMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchTeamMember.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling patchTeamMember.');
        }

        if (requestParameters.memberUser === null || requestParameters.memberUser === undefined) {
            throw new runtime.RequiredError('memberUser','Required parameter requestParameters.memberUser was null or undefined when calling patchTeamMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchTeamMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members/{member.user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))).replace(`{${"member.user"}}`, encodeURIComponent(String(requestParameters.memberUser))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamMemberFromJSON(jsonValue));
    }

    /**
     * Patch team member
     */
    async patchTeamMember(requestParameters: PatchTeamMemberRequest): Promise<V1TeamMember> {
        const response = await this.patchTeamMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update team
     */
    async updateTeamRaw(requestParameters: UpdateTeamRequest): Promise<runtime.ApiResponse<V1Team>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateTeam.');
        }

        if (requestParameters.teamName === null || requestParameters.teamName === undefined) {
            throw new runtime.RequiredError('teamName','Required parameter requestParameters.teamName was null or undefined when calling updateTeam.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateTeam.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team.name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team.name"}}`, encodeURIComponent(String(requestParameters.teamName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamFromJSON(jsonValue));
    }

    /**
     * Update team
     */
    async updateTeam(requestParameters: UpdateTeamRequest): Promise<V1Team> {
        const response = await this.updateTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update team member
     */
    async updateTeamMemberRaw(requestParameters: UpdateTeamMemberRequest): Promise<runtime.ApiResponse<V1TeamMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateTeamMember.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling updateTeamMember.');
        }

        if (requestParameters.memberUser === null || requestParameters.memberUser === undefined) {
            throw new runtime.RequiredError('memberUser','Required parameter requestParameters.memberUser was null or undefined when calling updateTeamMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateTeamMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/teams/{team}/members/{member.user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters.team))).replace(`{${"member.user"}}`, encodeURIComponent(String(requestParameters.memberUser))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1TeamMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TeamMemberFromJSON(jsonValue));
    }

    /**
     * Update team member
     */
    async updateTeamMember(requestParameters: UpdateTeamMemberRequest): Promise<V1TeamMember> {
        const response = await this.updateTeamMemberRaw(requestParameters);
        return await response.value();
    }

}
