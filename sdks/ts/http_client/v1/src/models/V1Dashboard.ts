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
 * The version of the OpenAPI document: 1.0.82
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1Dashboard
 */
export interface V1Dashboard {
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Dashboard
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1Dashboard
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Dashboard
     */
    deleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Dashboard
     */
    run_view?: boolean;
    /**
     * 
     * @type {object}
     * @memberof V1Dashboard
     */
    spec?: object;
    /**
     * 
     * @type {Date}
     * @memberof V1Dashboard
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Dashboard
     */
    updated_at?: Date;
}

export function V1DashboardFromJSON(json: any): V1Dashboard {
    return V1DashboardFromJSONTyped(json, false);
}

export function V1DashboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Dashboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'run_view': !exists(json, 'run_view') ? undefined : json['run_view'],
        'spec': !exists(json, 'spec') ? undefined : json['spec'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1DashboardToJSON(value?: V1Dashboard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'disabled': value.disabled,
        'deleted': value.deleted,
        'run_view': value.run_view,
        'spec': value.spec,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


