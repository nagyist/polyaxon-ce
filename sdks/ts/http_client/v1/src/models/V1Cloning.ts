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

import { exists, mapValues } from '../runtime';
import {
    V1CloningKind,
    V1CloningKindFromJSON,
    V1CloningKindFromJSONTyped,
    V1CloningKindToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Cloning
 */
export interface V1Cloning {
    /**
     * 
     * @type {string}
     * @memberof V1Cloning
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Cloning
     */
    name?: string;
    /**
     * 
     * @type {V1CloningKind}
     * @memberof V1Cloning
     */
    kind?: V1CloningKind;
}

export function V1CloningFromJSON(json: any): V1Cloning {
    return V1CloningFromJSONTyped(json, false);
}

export function V1CloningFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Cloning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : V1CloningKindFromJSON(json['kind']),
    };
}

export function V1CloningToJSON(value?: V1Cloning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'kind': V1CloningKindToJSON(value.kind),
    };
}


