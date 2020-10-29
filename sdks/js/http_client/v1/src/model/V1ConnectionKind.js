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
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1ConnectionKind.
* @enum {}
* @readonly
*/
export default class V1ConnectionKind {
    
        /**
         * value: "host_path"
         * @const
         */
        "host_path" = "host_path";

    
        /**
         * value: "volume_claim"
         * @const
         */
        "volume_claim" = "volume_claim";

    
        /**
         * value: "gcs"
         * @const
         */
        "gcs" = "gcs";

    
        /**
         * value: "s3"
         * @const
         */
        "s3" = "s3";

    
        /**
         * value: "wasb"
         * @const
         */
        "wasb" = "wasb";

    
        /**
         * value: "registry"
         * @const
         */
        "registry" = "registry";

    
        /**
         * value: "git"
         * @const
         */
        "git" = "git";

    
        /**
         * value: "aws"
         * @const
         */
        "aws" = "aws";

    
        /**
         * value: "gcp"
         * @const
         */
        "gcp" = "gcp";

    
        /**
         * value: "azure"
         * @const
         */
        "azure" = "azure";

    
        /**
         * value: "mysql"
         * @const
         */
        "mysql" = "mysql";

    
        /**
         * value: "postgres"
         * @const
         */
        "postgres" = "postgres";

    
        /**
         * value: "oracle"
         * @const
         */
        "oracle" = "oracle";

    
        /**
         * value: "vertica"
         * @const
         */
        "vertica" = "vertica";

    
        /**
         * value: "sqlite"
         * @const
         */
        "sqlite" = "sqlite";

    
        /**
         * value: "mssql"
         * @const
         */
        "mssql" = "mssql";

    
        /**
         * value: "redis"
         * @const
         */
        "redis" = "redis";

    
        /**
         * value: "presto"
         * @const
         */
        "presto" = "presto";

    
        /**
         * value: "mongo"
         * @const
         */
        "mongo" = "mongo";

    
        /**
         * value: "cassandra"
         * @const
         */
        "cassandra" = "cassandra";

    
        /**
         * value: "ftp"
         * @const
         */
        "ftp" = "ftp";

    
        /**
         * value: "grpc"
         * @const
         */
        "grpc" = "grpc";

    
        /**
         * value: "hdfs"
         * @const
         */
        "hdfs" = "hdfs";

    
        /**
         * value: "http"
         * @const
         */
        "http" = "http";

    
        /**
         * value: "pig_cli"
         * @const
         */
        "pig_cli" = "pig_cli";

    
        /**
         * value: "hive_cli"
         * @const
         */
        "hive_cli" = "hive_cli";

    
        /**
         * value: "hive_metastore"
         * @const
         */
        "hive_metastore" = "hive_metastore";

    
        /**
         * value: "hive_server2"
         * @const
         */
        "hive_server2" = "hive_server2";

    
        /**
         * value: "jdbc"
         * @const
         */
        "jdbc" = "jdbc";

    
        /**
         * value: "jenkins"
         * @const
         */
        "jenkins" = "jenkins";

    
        /**
         * value: "samba"
         * @const
         */
        "samba" = "samba";

    
        /**
         * value: "snowflake"
         * @const
         */
        "snowflake" = "snowflake";

    
        /**
         * value: "ssh"
         * @const
         */
        "ssh" = "ssh";

    
        /**
         * value: "cloudant"
         * @const
         */
        "cloudant" = "cloudant";

    
        /**
         * value: "databricks"
         * @const
         */
        "databricks" = "databricks";

    
        /**
         * value: "segment"
         * @const
         */
        "segment" = "segment";

    
        /**
         * value: "slack"
         * @const
         */
        "slack" = "slack";

    
        /**
         * value: "discord"
         * @const
         */
        "discord" = "discord";

    
        /**
         * value: "mattermost"
         * @const
         */
        "mattermost" = "mattermost";

    
        /**
         * value: "pagerduty"
         * @const
         */
        "pagerduty" = "pagerduty";

    
        /**
         * value: "hipchat"
         * @const
         */
        "hipchat" = "hipchat";

    
        /**
         * value: "webhook"
         * @const
         */
        "webhook" = "webhook";

    
        /**
         * value: "custom"
         * @const
         */
        "custom" = "custom";

    

    /**
    * Returns a <code>V1ConnectionKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ConnectionKind} The enum <code>V1ConnectionKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

