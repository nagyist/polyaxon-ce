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


class V1Versions(object):
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
        'platform_version': 'str',
        'cli': 'V1Version',
        'platform': 'V1Version',
        'agent': 'V1Version'
    }

    attribute_map = {
        'platform_version': 'platform_version',
        'cli': 'cli',
        'platform': 'platform',
        'agent': 'agent'
    }

    def __init__(self, platform_version=None, cli=None, platform=None, agent=None, local_vars_configuration=None):  # noqa: E501
        """V1Versions - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._platform_version = None
        self._cli = None
        self._platform = None
        self._agent = None
        self.discriminator = None

        if platform_version is not None:
            self.platform_version = platform_version
        if cli is not None:
            self.cli = cli
        if platform is not None:
            self.platform = platform
        if agent is not None:
            self.agent = agent

    @property
    def platform_version(self):
        """Gets the platform_version of this V1Versions.  # noqa: E501


        :return: The platform_version of this V1Versions.  # noqa: E501
        :rtype: str
        """
        return self._platform_version

    @platform_version.setter
    def platform_version(self, platform_version):
        """Sets the platform_version of this V1Versions.


        :param platform_version: The platform_version of this V1Versions.  # noqa: E501
        :type: str
        """

        self._platform_version = platform_version

    @property
    def cli(self):
        """Gets the cli of this V1Versions.  # noqa: E501


        :return: The cli of this V1Versions.  # noqa: E501
        :rtype: V1Version
        """
        return self._cli

    @cli.setter
    def cli(self, cli):
        """Sets the cli of this V1Versions.


        :param cli: The cli of this V1Versions.  # noqa: E501
        :type: V1Version
        """

        self._cli = cli

    @property
    def platform(self):
        """Gets the platform of this V1Versions.  # noqa: E501


        :return: The platform of this V1Versions.  # noqa: E501
        :rtype: V1Version
        """
        return self._platform

    @platform.setter
    def platform(self, platform):
        """Sets the platform of this V1Versions.


        :param platform: The platform of this V1Versions.  # noqa: E501
        :type: V1Version
        """

        self._platform = platform

    @property
    def agent(self):
        """Gets the agent of this V1Versions.  # noqa: E501


        :return: The agent of this V1Versions.  # noqa: E501
        :rtype: V1Version
        """
        return self._agent

    @agent.setter
    def agent(self, agent):
        """Sets the agent of this V1Versions.


        :param agent: The agent of this V1Versions.  # noqa: E501
        :type: V1Version
        """

        self._agent = agent

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
        if not isinstance(other, V1Versions):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Versions):
            return True

        return self.to_dict() != other.to_dict()
