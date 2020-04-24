#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.0.82
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1Dag(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'kind': 'str',
        'operations': 'list[V1Operation]',
        'components': 'list[V1Component]',
        'concurrency': 'int',
        'early_stopping': 'list[object]',
        'environment': 'V1Environment',
        'connections': 'list[str]',
        'volumes': 'list[V1Volume]'
    }

    attribute_map = {
        'kind': 'kind',
        'operations': 'operations',
        'components': 'components',
        'concurrency': 'concurrency',
        'early_stopping': 'early_stopping',
        'environment': 'environment',
        'connections': 'connections',
        'volumes': 'volumes'
    }

    def __init__(self, kind='dag', operations=None, components=None, concurrency=None, early_stopping=None, environment=None, connections=None, volumes=None, local_vars_configuration=None):  # noqa: E501
        """V1Dag - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._kind = None
        self._operations = None
        self._components = None
        self._concurrency = None
        self._early_stopping = None
        self._environment = None
        self._connections = None
        self._volumes = None
        self.discriminator = None

        if kind is not None:
            self.kind = kind
        if operations is not None:
            self.operations = operations
        if components is not None:
            self.components = components
        if concurrency is not None:
            self.concurrency = concurrency
        if early_stopping is not None:
            self.early_stopping = early_stopping
        if environment is not None:
            self.environment = environment
        if connections is not None:
            self.connections = connections
        if volumes is not None:
            self.volumes = volumes

    @property
    def kind(self):
        """Gets the kind of this V1Dag.  # noqa: E501


        :return: The kind of this V1Dag.  # noqa: E501
        :rtype: str
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1Dag.


        :param kind: The kind of this V1Dag.  # noqa: E501
        :type: str
        """

        self._kind = kind

    @property
    def operations(self):
        """Gets the operations of this V1Dag.  # noqa: E501


        :return: The operations of this V1Dag.  # noqa: E501
        :rtype: list[V1Operation]
        """
        return self._operations

    @operations.setter
    def operations(self, operations):
        """Sets the operations of this V1Dag.


        :param operations: The operations of this V1Dag.  # noqa: E501
        :type: list[V1Operation]
        """

        self._operations = operations

    @property
    def components(self):
        """Gets the components of this V1Dag.  # noqa: E501


        :return: The components of this V1Dag.  # noqa: E501
        :rtype: list[V1Component]
        """
        return self._components

    @components.setter
    def components(self, components):
        """Sets the components of this V1Dag.


        :param components: The components of this V1Dag.  # noqa: E501
        :type: list[V1Component]
        """

        self._components = components

    @property
    def concurrency(self):
        """Gets the concurrency of this V1Dag.  # noqa: E501


        :return: The concurrency of this V1Dag.  # noqa: E501
        :rtype: int
        """
        return self._concurrency

    @concurrency.setter
    def concurrency(self, concurrency):
        """Sets the concurrency of this V1Dag.


        :param concurrency: The concurrency of this V1Dag.  # noqa: E501
        :type: int
        """

        self._concurrency = concurrency

    @property
    def early_stopping(self):
        """Gets the early_stopping of this V1Dag.  # noqa: E501


        :return: The early_stopping of this V1Dag.  # noqa: E501
        :rtype: list[object]
        """
        return self._early_stopping

    @early_stopping.setter
    def early_stopping(self, early_stopping):
        """Sets the early_stopping of this V1Dag.


        :param early_stopping: The early_stopping of this V1Dag.  # noqa: E501
        :type: list[object]
        """

        self._early_stopping = early_stopping

    @property
    def environment(self):
        """Gets the environment of this V1Dag.  # noqa: E501


        :return: The environment of this V1Dag.  # noqa: E501
        :rtype: V1Environment
        """
        return self._environment

    @environment.setter
    def environment(self, environment):
        """Sets the environment of this V1Dag.


        :param environment: The environment of this V1Dag.  # noqa: E501
        :type: V1Environment
        """

        self._environment = environment

    @property
    def connections(self):
        """Gets the connections of this V1Dag.  # noqa: E501


        :return: The connections of this V1Dag.  # noqa: E501
        :rtype: list[str]
        """
        return self._connections

    @connections.setter
    def connections(self, connections):
        """Sets the connections of this V1Dag.


        :param connections: The connections of this V1Dag.  # noqa: E501
        :type: list[str]
        """

        self._connections = connections

    @property
    def volumes(self):
        """Gets the volumes of this V1Dag.  # noqa: E501

        Volumes is a list of volumes that can be mounted.  # noqa: E501

        :return: The volumes of this V1Dag.  # noqa: E501
        :rtype: list[V1Volume]
        """
        return self._volumes

    @volumes.setter
    def volumes(self, volumes):
        """Sets the volumes of this V1Dag.

        Volumes is a list of volumes that can be mounted.  # noqa: E501

        :param volumes: The volumes of this V1Dag.  # noqa: E501
        :type: list[V1Volume]
        """

        self._volumes = volumes

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Dag):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Dag):
            return True

        return self.to_dict() != other.to_dict()
