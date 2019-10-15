// Copyright 2019 Polyaxon, Inc.
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

/*
 * Polyaxon sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.14.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.V1CodeRefBodyRequest;
import io.swagger.client.model.V1CodeReference;
import io.swagger.client.model.V1EntityStatusRequest;
import io.swagger.client.model.V1ListCodeRefResponse;
import io.swagger.client.model.V1ListRunsResponse;
import io.swagger.client.model.V1OwnedEntityUUIdRequest;
import io.swagger.client.model.V1ProjectBodyRequest;
import io.swagger.client.model.V1Run;
import io.swagger.client.model.V1RunBodyRequest;
import io.swagger.client.model.V1StatusResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for RunServiceApi
 */
@Ignore
public class RunServiceApiTest {

    private final RunServiceApi api = new RunServiceApi();

    
    /**
     * Archive run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void archiveRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.archiveRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Bookmark run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void bookmarkRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.bookmarkRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Create new run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunTest() throws ApiException {
        String owner = null;
        String project = null;
        V1RunBodyRequest body = null;
        V1Run response = api.createRun(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Get run code ref
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunCodeRefTest() throws ApiException {
        String entityOwner = null;
        String entityProject = null;
        String entityUuid = null;
        V1CodeRefBodyRequest body = null;
        V1CodeReference response = api.createRunCodeRef(entityOwner, entityProject, entityUuid, body);

        // TODO: test validations
    }
    
    /**
     * Create new run status
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunStatusTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1EntityStatusRequest body = null;
        Object response = api.createRunStatus(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Delete run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.deleteRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Delete runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectBodyRequest body = null;
        Object response = api.deleteRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Get run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1Run response = api.getRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run code ref
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunCodeRefsTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1ListCodeRefResponse response = api.getRunCodeRefs(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run status
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunStatusesTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1StatusResponse response = api.getRunStatuses(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Stop run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void invalidateRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1OwnedEntityUUIdRequest body = null;
        Object response = api.invalidateRun(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Invalidate runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void invalidateRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectBodyRequest body = null;
        Object response = api.invalidateRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * List archived runs for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listArchivedRunsTest() throws ApiException {
        String user = null;
        V1ListRunsResponse response = api.listArchivedRuns(user);

        // TODO: test validations
    }
    
    /**
     * List bookmarked runs for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listBookmarkedRunsTest() throws ApiException {
        String user = null;
        V1ListRunsResponse response = api.listBookmarkedRuns(user);

        // TODO: test validations
    }
    
    /**
     * List runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ListRunsResponse response = api.listRuns(owner, project);

        // TODO: test validations
    }
    
    /**
     * Patch run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1RunBodyRequest body = null;
        V1Run response = api.patchRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Restart run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void restartRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1OwnedEntityUUIdRequest body = null;
        V1Run response = api.restartRun(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Restore run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void restoreRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.restoreRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Resume run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void resumeRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1OwnedEntityUUIdRequest body = null;
        V1Run response = api.resumeRun(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Start run tensorboard
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void startRunTensorboardTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1OwnedEntityUUIdRequest body = null;
        Object response = api.startRunTensorboard(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Stop run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1OwnedEntityUUIdRequest body = null;
        Object response = api.stopRun(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Stop run tensorboard
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunTensorboardTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.stopRunTensorboard(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Stop runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectBodyRequest body = null;
        Object response = api.stopRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * UnBookmark run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void unBookmarkRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        Object response = api.unBookmarkRun(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Update run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1RunBodyRequest body = null;
        V1Run response = api.updateRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
}
