// Copyright 2018-2021 Polyaxon, Inc.
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

// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateAgentConfigReader is a Reader for the UpdateAgentConfig structure.
type UpdateAgentConfigReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateAgentConfigReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateAgentConfigOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateAgentConfigNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateAgentConfigForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateAgentConfigNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateAgentConfigDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateAgentConfigOK creates a UpdateAgentConfigOK with default headers values
func NewUpdateAgentConfigOK() *UpdateAgentConfigOK {
	return &UpdateAgentConfigOK{}
}

/* UpdateAgentConfigOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateAgentConfigOK struct {
	Payload *service_model.V1Agent
}

func (o *UpdateAgentConfigOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent.uuid}/config][%d] updateAgentConfigOK  %+v", 200, o.Payload)
}
func (o *UpdateAgentConfigOK) GetPayload() *service_model.V1Agent {
	return o.Payload
}

func (o *UpdateAgentConfigOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Agent)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentConfigNoContent creates a UpdateAgentConfigNoContent with default headers values
func NewUpdateAgentConfigNoContent() *UpdateAgentConfigNoContent {
	return &UpdateAgentConfigNoContent{}
}

/* UpdateAgentConfigNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateAgentConfigNoContent struct {
	Payload interface{}
}

func (o *UpdateAgentConfigNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent.uuid}/config][%d] updateAgentConfigNoContent  %+v", 204, o.Payload)
}
func (o *UpdateAgentConfigNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentConfigNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentConfigForbidden creates a UpdateAgentConfigForbidden with default headers values
func NewUpdateAgentConfigForbidden() *UpdateAgentConfigForbidden {
	return &UpdateAgentConfigForbidden{}
}

/* UpdateAgentConfigForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateAgentConfigForbidden struct {
	Payload interface{}
}

func (o *UpdateAgentConfigForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent.uuid}/config][%d] updateAgentConfigForbidden  %+v", 403, o.Payload)
}
func (o *UpdateAgentConfigForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentConfigForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentConfigNotFound creates a UpdateAgentConfigNotFound with default headers values
func NewUpdateAgentConfigNotFound() *UpdateAgentConfigNotFound {
	return &UpdateAgentConfigNotFound{}
}

/* UpdateAgentConfigNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateAgentConfigNotFound struct {
	Payload interface{}
}

func (o *UpdateAgentConfigNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent.uuid}/config][%d] updateAgentConfigNotFound  %+v", 404, o.Payload)
}
func (o *UpdateAgentConfigNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentConfigNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentConfigDefault creates a UpdateAgentConfigDefault with default headers values
func NewUpdateAgentConfigDefault(code int) *UpdateAgentConfigDefault {
	return &UpdateAgentConfigDefault{
		_statusCode: code,
	}
}

/* UpdateAgentConfigDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateAgentConfigDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update agent config default response
func (o *UpdateAgentConfigDefault) Code() int {
	return o._statusCode
}

func (o *UpdateAgentConfigDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent.uuid}/config][%d] UpdateAgentConfig default  %+v", o._statusCode, o.Payload)
}
func (o *UpdateAgentConfigDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateAgentConfigDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}