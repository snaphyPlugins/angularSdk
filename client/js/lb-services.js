(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getSchema
         * @methodOf lbServices.User
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Users/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#save
         * @methodOf lbServices.User
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Users/save",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Employee
 * @header lbServices.Employee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Employee",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Employees/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__findById__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Employees/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Employees/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__updateById__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Employees/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Employee.employeeDetails() instead.
        "prototype$__get__employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "GET"
        },

        // INTERNAL. Use Employee.employeeDetails.create() instead.
        "prototype$__create__employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "POST"
        },

        // INTERNAL. Use Employee.employeeDetails.update() instead.
        "prototype$__update__employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "PUT"
        },

        // INTERNAL. Use Employee.employeeDetails.destroy() instead.
        "prototype$__destroy__employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__get__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Queries accessTokens of Employee.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Employees/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__create__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Employees/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__delete__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Employees/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$__count__accessTokens
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Counts accessTokens of Employee.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Employees/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#create
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Employees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#createMany
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Employees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#upsert
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Employees",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#exists
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Employees/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#findById
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Employees/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#find
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Employees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#findOne
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Employees/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#updateAll
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Employees/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#deleteById
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Employees/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#count
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Employees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#prototype$updateAttributes
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Employees/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#createChangeStream
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Employees/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#login
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Employees/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#logout
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Employees/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#confirm
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Employees/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#resetPassword
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Employees/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#getSchema
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Employees/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#save
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Employees/save",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#isAdmin
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `isAdmin` – `{boolean=}` - 
         */
        "isAdmin": {
          url: urlBase + "/Employees/isAdmin",
          method: "POST"
        },

        // INTERNAL. Use EmployeeDetails.employees() instead.
        "::get::EmployeeDetails::employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "GET"
        },

        // INTERNAL. Use EmployeeDetails.employees.create() instead.
        "::create::EmployeeDetails::employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "POST"
        },

        // INTERNAL. Use EmployeeDetails.employees.createMany() instead.
        "::createMany::EmployeeDetails::employees": {
          isArray: true,
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "POST"
        },

        // INTERNAL. Use EmployeeDetails.employees.update() instead.
        "::update::EmployeeDetails::employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "PUT"
        },

        // INTERNAL. Use EmployeeDetails.employees.destroy() instead.
        "::destroy::EmployeeDetails::employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCurrent
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Employees" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Employee#updateOrCreate
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#update
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#destroyById
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#removeById
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCachedCurrent
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Employee#login} or
         * {@link lbServices.Employee#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Employee instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#isAuthenticated
         * @methodOf lbServices.Employee
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCurrentId
         * @methodOf lbServices.Employee
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Employee#modelName
    * @propertyOf lbServices.Employee
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Employee`.
    */
    R.modelName = "Employee";

    /**
     * @ngdoc object
     * @name lbServices.Employee.employeeDetails
     * @header lbServices.Employee.employeeDetails
     * @object
     * @description
     *
     * The object `Employee.employeeDetails` groups methods
     * manipulating `EmployeeDetails` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#employeeDetails Employee.employeeDetails()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Employee#employeeDetails
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Fetches hasOne relation employeeDetails.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R.employeeDetails = function() {
          var TargetResource = $injector.get("EmployeeDetails");
          var action = TargetResource["::get::Employee::employeeDetails"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee.employeeDetails#create
         * @methodOf lbServices.Employee.employeeDetails
         *
         * @description
         *
         * Creates a new instance in employeeDetails of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R.employeeDetails.create = function() {
          var TargetResource = $injector.get("EmployeeDetails");
          var action = TargetResource["::create::Employee::employeeDetails"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee.employeeDetails#createMany
         * @methodOf lbServices.Employee.employeeDetails
         *
         * @description
         *
         * Creates a new instance in employeeDetails of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R.employeeDetails.createMany = function() {
          var TargetResource = $injector.get("EmployeeDetails");
          var action = TargetResource["::createMany::Employee::employeeDetails"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee.employeeDetails#destroy
         * @methodOf lbServices.Employee.employeeDetails
         *
         * @description
         *
         * Deletes employeeDetails of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.employeeDetails.destroy = function() {
          var TargetResource = $injector.get("EmployeeDetails");
          var action = TargetResource["::destroy::Employee::employeeDetails"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee.employeeDetails#update
         * @methodOf lbServices.Employee.employeeDetails
         *
         * @description
         *
         * Update employeeDetails of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R.employeeDetails.update = function() {
          var TargetResource = $injector.get("EmployeeDetails");
          var action = TargetResource["::update::Employee::employeeDetails"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Recipe
 * @header lbServices.Recipe
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Recipe` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Recipe",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Recipes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Recipe.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Recipes/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuisines.findById() instead.
        "prototype$__findById__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuisines.destroyById() instead.
        "prototype$__destroyById__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.updateById() instead.
        "prototype$__updateById__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuisines.link() instead.
        "prototype$__link__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuisines.unlink() instead.
        "prototype$__unlink__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.exists() instead.
        "prototype$__exists__cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.priorities() instead.
        "prototype$__get__priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "GET"
        },

        // INTERNAL. Use Recipe.priorities.create() instead.
        "prototype$__create__priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "POST"
        },

        // INTERNAL. Use Recipe.priorities.update() instead.
        "prototype$__update__priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.priorities.destroy() instead.
        "prototype$__destroy__priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.findById() instead.
        "prototype$__findById__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.category.destroyById() instead.
        "prototype$__destroyById__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.updateById() instead.
        "prototype$__updateById__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.category.link() instead.
        "prototype$__link__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.category.unlink() instead.
        "prototype$__unlink__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.exists() instead.
        "prototype$__exists__category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.recipeTags.findById() instead.
        "prototype$__findById__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.recipeTags.destroyById() instead.
        "prototype$__destroyById__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.updateById() instead.
        "prototype$__updateById__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.recipeTags.link() instead.
        "prototype$__link__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.recipeTags.unlink() instead.
        "prototype$__unlink__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.exists() instead.
        "prototype$__exists__recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.ingredients.findById() instead.
        "prototype$__findById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredients.destroyById() instead.
        "prototype$__destroyById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.updateById() instead.
        "prototype$__updateById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ingredients.link() instead.
        "prototype$__link__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ingredients.unlink() instead.
        "prototype$__unlink__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.exists() instead.
        "prototype$__exists__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.wishlists.findById() instead.
        "prototype$__findById__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.wishlists.destroyById() instead.
        "prototype$__destroyById__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.updateById() instead.
        "prototype$__updateById__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.wishlists.link() instead.
        "prototype$__link__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.wishlists.unlink() instead.
        "prototype$__unlink__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.exists() instead.
        "prototype$__exists__wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.cuisines() instead.
        "prototype$__get__cuisines": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuisines",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuisines.create() instead.
        "prototype$__create__cuisines": {
          url: urlBase + "/Recipes/:id/cuisines",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuisines.destroyAll() instead.
        "prototype$__delete__cuisines": {
          url: urlBase + "/Recipes/:id/cuisines",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.count() instead.
        "prototype$__count__cuisines": {
          url: urlBase + "/Recipes/:id/cuisines/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.category() instead.
        "prototype$__get__category": {
          isArray: true,
          url: urlBase + "/Recipes/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Recipe.category.create() instead.
        "prototype$__create__category": {
          url: urlBase + "/Recipes/:id/category",
          method: "POST"
        },

        // INTERNAL. Use Recipe.category.destroyAll() instead.
        "prototype$__delete__category": {
          url: urlBase + "/Recipes/:id/category",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.count() instead.
        "prototype$__count__category": {
          url: urlBase + "/Recipes/:id/category/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Recipes/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Recipe.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Recipes/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Recipe.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Recipes/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Recipes/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.recipeTags() instead.
        "prototype$__get__recipeTags": {
          isArray: true,
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "GET"
        },

        // INTERNAL. Use Recipe.recipeTags.create() instead.
        "prototype$__create__recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "POST"
        },

        // INTERNAL. Use Recipe.recipeTags.destroyAll() instead.
        "prototype$__delete__recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.count() instead.
        "prototype$__count__recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredients() instead.
        "prototype$__get__ingredients": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredients.create() instead.
        "prototype$__create__ingredients": {
          url: urlBase + "/Recipes/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredients.destroyAll() instead.
        "prototype$__delete__ingredients": {
          url: urlBase + "/Recipes/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.count() instead.
        "prototype$__count__ingredients": {
          url: urlBase + "/Recipes/:id/ingredients/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.wishlists() instead.
        "prototype$__get__wishlists": {
          isArray: true,
          url: urlBase + "/Recipes/:id/wishlists",
          method: "GET"
        },

        // INTERNAL. Use Recipe.wishlists.create() instead.
        "prototype$__create__wishlists": {
          url: urlBase + "/Recipes/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Recipe.wishlists.destroyAll() instead.
        "prototype$__delete__wishlists": {
          url: urlBase + "/Recipes/:id/wishlists",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.count() instead.
        "prototype$__count__wishlists": {
          url: urlBase + "/Recipes/:id/wishlists/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#create
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Recipes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#createMany
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Recipes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#upsert
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Recipes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#exists
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Recipes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#findById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Recipes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#find
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Recipes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#findOne
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Recipes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateAll
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Recipes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#deleteById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Recipes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#count
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#prototype$updateAttributes
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Recipes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#createChangeStream
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Recipes/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#getSchema
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Recipes/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#save
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Recipes/save",
          method: "POST"
        },

        // INTERNAL. Use Customer.recipes.findById() instead.
        "::findById::Customer::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.recipes.destroyById() instead.
        "::destroyById::Customer::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.recipes.updateById() instead.
        "::updateById::Customer::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.recipes() instead.
        "::get::Customer::recipes": {
          isArray: true,
          url: urlBase + "/Customers/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Customer.recipes.create() instead.
        "::create::Customer::recipes": {
          url: urlBase + "/Customers/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Customer.recipes.createMany() instead.
        "::createMany::Customer::recipes": {
          isArray: true,
          url: urlBase + "/Customers/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Customer.recipes.destroyAll() instead.
        "::delete::Customer::recipes": {
          url: urlBase + "/Customers/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.recipes.count() instead.
        "::count::Customer::recipes": {
          url: urlBase + "/Customers/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Cuisines.recipes.findById() instead.
        "::findById::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cuisines.recipes.destroyById() instead.
        "::destroyById::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.updateById() instead.
        "::updateById::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cuisines.recipes.link() instead.
        "::link::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cuisines.recipes.unlink() instead.
        "::unlink::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.exists() instead.
        "::exists::Cuisines::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cuisines.recipes() instead.
        "::get::Cuisines::recipes": {
          isArray: true,
          url: urlBase + "/Cuisines/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Cuisines.recipes.create() instead.
        "::create::Cuisines::recipes": {
          url: urlBase + "/Cuisines/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cuisines.recipes.createMany() instead.
        "::createMany::Cuisines::recipes": {
          isArray: true,
          url: urlBase + "/Cuisines/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cuisines.recipes.destroyAll() instead.
        "::delete::Cuisines::recipes": {
          url: urlBase + "/Cuisines/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.count() instead.
        "::count::Cuisines::recipes": {
          url: urlBase + "/Cuisines/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Priority.recipes() instead.
        "::get::Priority::recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Priority.recipes.create() instead.
        "::create::Priority::recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Priority.recipes.createMany() instead.
        "::createMany::Priority::recipes": {
          isArray: true,
          url: urlBase + "/Priorities/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Priority.recipes.update() instead.
        "::update::Priority::recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "PUT"
        },

        // INTERNAL. Use Priority.recipes.destroy() instead.
        "::destroy::Priority::recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.findById() instead.
        "::findById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.destroyById() instead.
        "::destroyById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.updateById() instead.
        "::updateById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.link() instead.
        "::link::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.unlink() instead.
        "::unlink::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.exists() instead.
        "::exists::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.recipes() instead.
        "::get::Category::recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.create() instead.
        "::create::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.createMany() instead.
        "::createMany::Category::recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.destroyAll() instead.
        "::delete::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.count() instead.
        "::count::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Comments.recipe() instead.
        "::get::Comments::recipe": {
          url: urlBase + "/Comments/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use RecipeTag.recipes.findById() instead.
        "::findById::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use RecipeTag.recipes.destroyById() instead.
        "::destroyById::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.updateById() instead.
        "::updateById::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RecipeTag.recipes.link() instead.
        "::link::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RecipeTag.recipes.unlink() instead.
        "::unlink::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.exists() instead.
        "::exists::RecipeTag::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RecipeTag.recipes() instead.
        "::get::RecipeTag::recipes": {
          isArray: true,
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use RecipeTag.recipes.create() instead.
        "::create::RecipeTag::recipes": {
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use RecipeTag.recipes.createMany() instead.
        "::createMany::RecipeTag::recipes": {
          isArray: true,
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use RecipeTag.recipes.destroyAll() instead.
        "::delete::RecipeTag::recipes": {
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.count() instead.
        "::count::RecipeTag::recipes": {
          url: urlBase + "/RecipeTags/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.findById() instead.
        "::findById::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.destroyById() instead.
        "::destroyById::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.updateById() instead.
        "::updateById::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ingredients.recipes.link() instead.
        "::link::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ingredients.recipes.unlink() instead.
        "::unlink::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.exists() instead.
        "::exists::Ingredients::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Ingredients.recipes() instead.
        "::get::Ingredients::recipes": {
          isArray: true,
          url: urlBase + "/Ingredients/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.create() instead.
        "::create::Ingredients::recipes": {
          url: urlBase + "/Ingredients/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Ingredients.recipes.createMany() instead.
        "::createMany::Ingredients::recipes": {
          isArray: true,
          url: urlBase + "/Ingredients/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Ingredients.recipes.destroyAll() instead.
        "::delete::Ingredients::recipes": {
          url: urlBase + "/Ingredients/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.count() instead.
        "::count::Ingredients::recipes": {
          url: urlBase + "/Ingredients/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use RecipeIngredients.recipe() instead.
        "::get::RecipeIngredients::recipe": {
          url: urlBase + "/RecipeIngredients/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.recipes.findById() instead.
        "::findById::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.recipes.destroyById() instead.
        "::destroyById::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.updateById() instead.
        "::updateById::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.recipes.link() instead.
        "::link::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.recipes.unlink() instead.
        "::unlink::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.exists() instead.
        "::exists::Wishlist::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Wishlist.recipes() instead.
        "::get::Wishlist::recipes": {
          isArray: true,
          url: urlBase + "/Wishlists/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.recipes.create() instead.
        "::create::Wishlist::recipes": {
          url: urlBase + "/Wishlists/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.recipes.createMany() instead.
        "::createMany::Wishlist::recipes": {
          isArray: true,
          url: urlBase + "/Wishlists/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.recipes.destroyAll() instead.
        "::delete::Wishlist::recipes": {
          url: urlBase + "/Wishlists/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.count() instead.
        "::count::Wishlist::recipes": {
          url: urlBase + "/Wishlists/:id/recipes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateOrCreate
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#update
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#destroyById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#removeById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Recipe#modelName
    * @propertyOf lbServices.Recipe
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Recipe`.
    */
    R.modelName = "Recipe";


        /**
         * @ngdoc method
         * @name lbServices.Recipe#customer
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Recipe::customer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.cuisines
     * @header lbServices.Recipe.cuisines
     * @object
     * @description
     *
     * The object `Recipe.cuisines` groups methods
     * manipulating `Cuisines` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#cuisines Recipe.cuisines()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#cuisines
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries cuisines of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::get::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#count
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Counts cuisines of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cuisines.count = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::count::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#create
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Creates a new instance in cuisines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.create = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::create::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#createMany
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Creates a new instance in cuisines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.createMany = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::createMany::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#destroyAll
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Deletes all cuisines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuisines.destroyAll = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::delete::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#destroyById
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Delete a related item by id for cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuisines.destroyById = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::destroyById::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#exists
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Check the existence of cuisines relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.exists = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::exists::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#findById
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Find a related item by id for cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.findById = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::findById::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#link
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Add a related item by id for cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.link = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::link::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#unlink
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Remove the cuisines relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuisines.unlink = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::unlink::Recipe::cuisines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuisines#updateById
         * @methodOf lbServices.Recipe.cuisines
         *
         * @description
         *
         * Update a related item by id for cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuisines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R.cuisines.updateById = function() {
          var TargetResource = $injector.get("Cuisines");
          var action = TargetResource["::updateById::Recipe::cuisines"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.priorities
     * @header lbServices.Recipe.priorities
     * @object
     * @description
     *
     * The object `Recipe.priorities` groups methods
     * manipulating `Priority` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#priorities Recipe.priorities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#priorities
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Fetches hasOne relation priorities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R.priorities = function() {
          var TargetResource = $injector.get("Priority");
          var action = TargetResource["::get::Recipe::priorities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.priorities#create
         * @methodOf lbServices.Recipe.priorities
         *
         * @description
         *
         * Creates a new instance in priorities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R.priorities.create = function() {
          var TargetResource = $injector.get("Priority");
          var action = TargetResource["::create::Recipe::priorities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.priorities#createMany
         * @methodOf lbServices.Recipe.priorities
         *
         * @description
         *
         * Creates a new instance in priorities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R.priorities.createMany = function() {
          var TargetResource = $injector.get("Priority");
          var action = TargetResource["::createMany::Recipe::priorities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.priorities#destroy
         * @methodOf lbServices.Recipe.priorities
         *
         * @description
         *
         * Deletes priorities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.priorities.destroy = function() {
          var TargetResource = $injector.get("Priority");
          var action = TargetResource["::destroy::Recipe::priorities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.priorities#update
         * @methodOf lbServices.Recipe.priorities
         *
         * @description
         *
         * Update priorities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R.priorities.update = function() {
          var TargetResource = $injector.get("Priority");
          var action = TargetResource["::update::Recipe::priorities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.category
     * @header lbServices.Recipe.category
     * @object
     * @description
     *
     * The object `Recipe.category` groups methods
     * manipulating `Category` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#category Recipe.category()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#category
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries category of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#count
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Counts category of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.category.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#create
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Creates a new instance in category of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#createMany
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Creates a new instance in category of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#destroyAll
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Deletes all category of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.category.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#destroyById
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Delete a related item by id for category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.category.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#exists
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Check the existence of category relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#findById
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Find a related item by id for category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#link
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Add a related item by id for category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#unlink
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Remove the category relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.category.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::Recipe::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.category#updateById
         * @methodOf lbServices.Recipe.category
         *
         * @description
         *
         * Update a related item by id for category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for category
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Recipe::category"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.comments
     * @header lbServices.Recipe.comments
     * @object
     * @description
     *
     * The object `Recipe.comments` groups methods
     * manipulating `Comments` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#comments Recipe.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#comments
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries comments of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::get::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#count
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Counts comments of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::count::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#create
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::create::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#createMany
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::createMany::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#destroyAll
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::delete::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#destroyById
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::destroyById::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#findById
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::findById::Recipe::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.comments#updateById
         * @methodOf lbServices.Recipe.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::updateById::Recipe::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.recipeTags
     * @header lbServices.Recipe.recipeTags
     * @object
     * @description
     *
     * The object `Recipe.recipeTags` groups methods
     * manipulating `RecipeTag` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#recipeTags Recipe.recipeTags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#recipeTags
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries recipeTags of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::get::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#count
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Counts recipeTags of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipeTags.count = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::count::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#create
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Creates a new instance in recipeTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.create = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::create::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#createMany
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Creates a new instance in recipeTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.createMany = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::createMany::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#destroyAll
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Deletes all recipeTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipeTags.destroyAll = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::delete::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#destroyById
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Delete a related item by id for recipeTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipeTags.destroyById = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::destroyById::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#exists
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Check the existence of recipeTags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.exists = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::exists::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#findById
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Find a related item by id for recipeTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.findById = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::findById::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#link
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Add a related item by id for recipeTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.link = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::link::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#unlink
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Remove the recipeTags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipeTags.unlink = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::unlink::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.recipeTags#updateById
         * @methodOf lbServices.Recipe.recipeTags
         *
         * @description
         *
         * Update a related item by id for recipeTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipeTags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R.recipeTags.updateById = function() {
          var TargetResource = $injector.get("RecipeTag");
          var action = TargetResource["::updateById::Recipe::recipeTags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.ingredients
     * @header lbServices.Recipe.ingredients
     * @object
     * @description
     *
     * The object `Recipe.ingredients` groups methods
     * manipulating `Ingredients` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#ingredients Recipe.ingredients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#ingredients
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries ingredients of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::get::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#count
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Counts ingredients of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.ingredients.count = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::count::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#create
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.create = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::create::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#createMany
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.createMany = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::createMany::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#destroyAll
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Deletes all ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyAll = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::delete::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#destroyById
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Delete a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::destroyById::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#exists
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Check the existence of ingredients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.exists = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::exists::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#findById
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Find a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.findById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::findById::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#link
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Add a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.link = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::link::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#unlink
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Remove the ingredients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.unlink = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::unlink::Recipe::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredients#updateById
         * @methodOf lbServices.Recipe.ingredients
         *
         * @description
         *
         * Update a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.updateById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::updateById::Recipe::ingredients"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.wishlists
     * @header lbServices.Recipe.wishlists
     * @object
     * @description
     *
     * The object `Recipe.wishlists` groups methods
     * manipulating `Wishlist` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#wishlists Recipe.wishlists()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#wishlists
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries wishlists of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::get::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#count
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Counts wishlists of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.wishlists.count = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::count::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#create
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Creates a new instance in wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.create = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::create::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#createMany
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Creates a new instance in wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.createMany = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::createMany::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#destroyAll
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Deletes all wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.wishlists.destroyAll = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::delete::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#destroyById
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Delete a related item by id for wishlists.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.wishlists.destroyById = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::destroyById::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#exists
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Check the existence of wishlists relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.exists = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::exists::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#findById
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Find a related item by id for wishlists.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.findById = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::findById::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#link
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Add a related item by id for wishlists.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.link = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::link::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#unlink
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Remove the wishlists relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.wishlists.unlink = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::unlink::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.wishlists#updateById
         * @methodOf lbServices.Recipe.wishlists
         *
         * @description
         *
         * Update a related item by id for wishlists.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wishlists
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.updateById = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::updateById::Recipe::wishlists"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.EmployeeDetails
 * @header lbServices.EmployeeDetails
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EmployeeDetails` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EmployeeDetails",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/EmployeeDetails/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use EmployeeDetails.employees() instead.
        "prototype$__get__employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "GET"
        },

        // INTERNAL. Use EmployeeDetails.employees.create() instead.
        "prototype$__create__employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "POST"
        },

        // INTERNAL. Use EmployeeDetails.employees.update() instead.
        "prototype$__update__employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "PUT"
        },

        // INTERNAL. Use EmployeeDetails.employees.destroy() instead.
        "prototype$__destroy__employees": {
          url: urlBase + "/EmployeeDetails/:id/employees",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#create
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/EmployeeDetails",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#createMany
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/EmployeeDetails",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#upsert
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/EmployeeDetails",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#exists
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/EmployeeDetails/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#findById
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/EmployeeDetails/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#find
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/EmployeeDetails",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#findOne
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/EmployeeDetails/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#updateAll
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/EmployeeDetails/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#deleteById
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/EmployeeDetails/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#count
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/EmployeeDetails/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#prototype$updateAttributes
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/EmployeeDetails/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#createChangeStream
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/EmployeeDetails/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#getSchema
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/EmployeeDetails/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#save
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/EmployeeDetails/save",
          method: "POST"
        },

        // INTERNAL. Use Employee.employeeDetails() instead.
        "::get::Employee::employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "GET"
        },

        // INTERNAL. Use Employee.employeeDetails.create() instead.
        "::create::Employee::employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "POST"
        },

        // INTERNAL. Use Employee.employeeDetails.createMany() instead.
        "::createMany::Employee::employeeDetails": {
          isArray: true,
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "POST"
        },

        // INTERNAL. Use Employee.employeeDetails.update() instead.
        "::update::Employee::employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "PUT"
        },

        // INTERNAL. Use Employee.employeeDetails.destroy() instead.
        "::destroy::Employee::employeeDetails": {
          url: urlBase + "/Employees/:id/employeeDetails",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#updateOrCreate
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#update
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#destroyById
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#removeById
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmployeeDetails` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.EmployeeDetails#modelName
    * @propertyOf lbServices.EmployeeDetails
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EmployeeDetails`.
    */
    R.modelName = "EmployeeDetails";

    /**
     * @ngdoc object
     * @name lbServices.EmployeeDetails.employees
     * @header lbServices.EmployeeDetails.employees
     * @object
     * @description
     *
     * The object `EmployeeDetails.employees` groups methods
     * manipulating `Employee` instances related to `EmployeeDetails`.
     *
     * Call {@link lbServices.EmployeeDetails#employees EmployeeDetails.employees()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails#employees
         * @methodOf lbServices.EmployeeDetails
         *
         * @description
         *
         * Fetches hasOne relation employees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R.employees = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::EmployeeDetails::employees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails.employees#create
         * @methodOf lbServices.EmployeeDetails.employees
         *
         * @description
         *
         * Creates a new instance in employees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R.employees.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::EmployeeDetails::employees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails.employees#createMany
         * @methodOf lbServices.EmployeeDetails.employees
         *
         * @description
         *
         * Creates a new instance in employees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R.employees.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::EmployeeDetails::employees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails.employees#destroy
         * @methodOf lbServices.EmployeeDetails.employees
         *
         * @description
         *
         * Deletes employees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.employees.destroy = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroy::EmployeeDetails::employees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EmployeeDetails.employees#update
         * @methodOf lbServices.EmployeeDetails.employees
         *
         * @description
         *
         * Update employees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Employee` object.)
         * </em>
         */
        R.employees.update = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::update::EmployeeDetails::employees"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.AdminEmail
 * @header lbServices.AdminEmail
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AdminEmail` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AdminEmail",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/adminEmails/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AdminEmail#getSchema
         * @methodOf lbServices.AdminEmail
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/adminEmails/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AdminEmail#save
         * @methodOf lbServices.AdminEmail
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/adminEmails/save",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AdminEmail#sendMail
         * @methodOf lbServices.AdminEmail
         *
         * @description
         *
         * Remote method for sending text mail from the frontend.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `to` – `{*=}` - 
         *
         *  - `subject` – `{string=}` - 
         *
         *  - `html` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `info` – `{string=}` - 
         */
        "sendMail": {
          url: urlBase + "/adminEmails/sendMail",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AdminEmail#sendNotice
         * @methodOf lbServices.AdminEmail
         *
         * @description
         *
         * Remote method for sending mail from the frontend.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `to` – `{*=}` - 
         *
         *  - `subject` – `{string=}` - 
         *
         *  - `templateOptions` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `info` – `{string=}` - 
         */
        "sendNotice": {
          url: urlBase + "/adminEmails/sendNotice",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AdminEmail#getMailSchema
         * @methodOf lbServices.AdminEmail
         *
         * @description
         *
         * Send the mail schema of the to the browser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getMailSchema": {
          url: urlBase + "/adminEmails/getMailSchema",
          method: "POST"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.AdminEmail#modelName
    * @propertyOf lbServices.AdminEmail
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AdminEmail`.
    */
    R.modelName = "AdminEmail";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getSchema
         * @methodOf lbServices.Container
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/containers/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#save
         * @methodOf lbServices.Container
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/containers/save",
          method: "POST"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Customers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Customer.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.wishlists() instead.
        "prototype$__get__wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "GET"
        },

        // INTERNAL. Use Customer.wishlists.create() instead.
        "prototype$__create__wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Customer.wishlists.update() instead.
        "prototype$__update__wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "PUT"
        },

        // INTERNAL. Use Customer.wishlists.destroy() instead.
        "prototype$__destroy__wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.chefs() instead.
        "prototype$__get__chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "GET"
        },

        // INTERNAL. Use Customer.chefs.create() instead.
        "prototype$__create__chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.chefs.update() instead.
        "prototype$__update__chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "PUT"
        },

        // INTERNAL. Use Customer.chefs.destroy() instead.
        "prototype$__destroy__chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.contactChefs.findById() instead.
        "prototype$__findById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.contactChefs.destroyById() instead.
        "prototype$__destroyById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.contactChefs.updateById() instead.
        "prototype$__updateById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Customers/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Customer.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Customers/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Customer.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Customers/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Customers/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Customers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Customers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Customer.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Customers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Customers/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.contactChefs() instead.
        "prototype$__get__contactChefs": {
          isArray: true,
          url: urlBase + "/Customers/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Customer.contactChefs.create() instead.
        "prototype$__create__contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.contactChefs.destroyAll() instead.
        "prototype$__delete__contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.contactChefs.count() instead.
        "prototype$__count__contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#create
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createMany
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#upsert
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#exists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#find
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findOne
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#updateAll
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#deleteById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#count
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#prototype$updateAttributes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createChangeStream
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Customers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#getSchema
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Customers/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#save
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Customers/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.customer() instead.
        "::get::Recipe::customer": {
          url: urlBase + "/Recipes/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Comments.customer() instead.
        "::get::Comments::customer": {
          url: urlBase + "/Comments/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.customers() instead.
        "::get::Wishlist::customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.customers.create() instead.
        "::create::Wishlist::customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.customers.createMany() instead.
        "::createMany::Wishlist::customers": {
          isArray: true,
          url: urlBase + "/Wishlists/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.customers.update() instead.
        "::update::Wishlist::customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.customers.destroy() instead.
        "::destroy::Wishlist::customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.customers() instead.
        "::get::Chef::customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Chef.customers.create() instead.
        "::create::Chef::customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Chef.customers.createMany() instead.
        "::createMany::Chef::customers": {
          isArray: true,
          url: urlBase + "/Chefs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Chef.customers.update() instead.
        "::update::Chef::customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "PUT"
        },

        // INTERNAL. Use Chef.customers.destroy() instead.
        "::destroy::Chef::customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use ContactChef.customer() instead.
        "::get::ContactChef::customer": {
          url: urlBase + "/ContactChefs/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Order.customer() instead.
        "::get::Order::customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Customer#updateOrCreate
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#update
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#destroyById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#removeById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Customer#modelName
    * @propertyOf lbServices.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.recipes
     * @header lbServices.Customer.recipes
     * @object
     * @description
     *
     * The object `Customer.recipes` groups methods
     * manipulating `Recipe` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#recipes Customer.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#recipes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries recipes of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#count
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Counts recipes of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#create
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#createMany
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#destroyAll
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#destroyById
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#findById
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Customer::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.recipes#updateById
         * @methodOf lbServices.Customer.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Customer::recipes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.comments
     * @header lbServices.Customer.comments
     * @object
     * @description
     *
     * The object `Customer.comments` groups methods
     * manipulating `Comments` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#comments Customer.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#comments
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries comments of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::get::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#count
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Counts comments of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::count::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#create
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::create::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#createMany
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::createMany::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#destroyAll
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::delete::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#destroyById
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::destroyById::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#findById
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::findById::Customer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.comments#updateById
         * @methodOf lbServices.Customer.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::updateById::Customer::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.wishlists
     * @header lbServices.Customer.wishlists
     * @object
     * @description
     *
     * The object `Customer.wishlists` groups methods
     * manipulating `Wishlist` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#wishlists Customer.wishlists()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#wishlists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches hasOne relation wishlists.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::get::Customer::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.wishlists#create
         * @methodOf lbServices.Customer.wishlists
         *
         * @description
         *
         * Creates a new instance in wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.create = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::create::Customer::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.wishlists#createMany
         * @methodOf lbServices.Customer.wishlists
         *
         * @description
         *
         * Creates a new instance in wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.createMany = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::createMany::Customer::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.wishlists#destroy
         * @methodOf lbServices.Customer.wishlists
         *
         * @description
         *
         * Deletes wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.wishlists.destroy = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::destroy::Customer::wishlists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.wishlists#update
         * @methodOf lbServices.Customer.wishlists
         *
         * @description
         *
         * Update wishlists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R.wishlists.update = function() {
          var TargetResource = $injector.get("Wishlist");
          var action = TargetResource["::update::Customer::wishlists"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.chefs
     * @header lbServices.Customer.chefs
     * @object
     * @description
     *
     * The object `Customer.chefs` groups methods
     * manipulating `Chef` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#chefs Customer.chefs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#chefs
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches hasOne relation chefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chefs = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::get::Customer::chefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.chefs#create
         * @methodOf lbServices.Customer.chefs
         *
         * @description
         *
         * Creates a new instance in chefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chefs.create = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::create::Customer::chefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.chefs#createMany
         * @methodOf lbServices.Customer.chefs
         *
         * @description
         *
         * Creates a new instance in chefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chefs.createMany = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::createMany::Customer::chefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.chefs#destroy
         * @methodOf lbServices.Customer.chefs
         *
         * @description
         *
         * Deletes chefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chefs.destroy = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::destroy::Customer::chefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.chefs#update
         * @methodOf lbServices.Customer.chefs
         *
         * @description
         *
         * Update chefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chefs.update = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::update::Customer::chefs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.contactChefs
     * @header lbServices.Customer.contactChefs
     * @object
     * @description
     *
     * The object `Customer.contactChefs` groups methods
     * manipulating `ContactChef` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#contactChefs Customer.contactChefs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#contactChefs
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries contactChefs of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::get::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#count
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Counts contactChefs of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contactChefs.count = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::count::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#create
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.create = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::create::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#createMany
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.createMany = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::createMany::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#destroyAll
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Deletes all contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyAll = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::delete::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#destroyById
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Delete a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::destroyById::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#findById
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Find a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.findById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::findById::Customer::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.contactChefs#updateById
         * @methodOf lbServices.Customer.contactChefs
         *
         * @description
         *
         * Update a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.updateById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::updateById::Customer::contactChefs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.orders
     * @header lbServices.Customer.orders
     * @object
     * @description
     *
     * The object `Customer.orders` groups methods
     * manipulating `Order` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orders Customer.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#orders
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#count
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Counts orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#create
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#createMany
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyAll
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#findById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#updateById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Customer::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cuisines
 * @header lbServices.Cuisines
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cuisines` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cuisines",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cuisines/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cuisines.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cuisines.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cuisines.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cuisines.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuisines/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cuisines.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Cuisines/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Cuisines.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Cuisines/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cuisines.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Cuisines/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Cuisines.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Cuisines/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#create
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cuisines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#createMany
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Cuisines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#upsert
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cuisines",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#exists
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Cuisines/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#findById
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cuisines/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#find
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cuisines",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#findOne
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cuisines/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#updateAll
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Cuisines/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#deleteById
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Cuisines/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#count
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Cuisines/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#prototype$updateAttributes
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cuisines/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#createChangeStream
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Cuisines/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#getSchema
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Cuisines/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#save
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Cuisines/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuisines.findById() instead.
        "::findById::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuisines.destroyById() instead.
        "::destroyById::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.updateById() instead.
        "::updateById::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuisines.link() instead.
        "::link::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuisines.unlink() instead.
        "::unlink::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.exists() instead.
        "::exists::Recipe::cuisines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuisines/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.cuisines() instead.
        "::get::Recipe::cuisines": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuisines",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuisines.create() instead.
        "::create::Recipe::cuisines": {
          url: urlBase + "/Recipes/:id/cuisines",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuisines.createMany() instead.
        "::createMany::Recipe::cuisines": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuisines",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuisines.destroyAll() instead.
        "::delete::Recipe::cuisines": {
          url: urlBase + "/Recipes/:id/cuisines",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuisines.count() instead.
        "::count::Recipe::cuisines": {
          url: urlBase + "/Recipes/:id/cuisines/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cuisines#updateOrCreate
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#update
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#destroyById
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cuisines#removeById
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuisines` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Cuisines#modelName
    * @propertyOf lbServices.Cuisines
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cuisines`.
    */
    R.modelName = "Cuisines";

    /**
     * @ngdoc object
     * @name lbServices.Cuisines.recipes
     * @header lbServices.Cuisines.recipes
     * @object
     * @description
     *
     * The object `Cuisines.recipes` groups methods
     * manipulating `Recipe` instances related to `Cuisines`.
     *
     * Call {@link lbServices.Cuisines#recipes Cuisines.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cuisines#recipes
         * @methodOf lbServices.Cuisines
         *
         * @description
         *
         * Queries recipes of Cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#count
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Counts recipes of Cuisines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#create
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#createMany
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#destroyAll
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#destroyById
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#exists
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#findById
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#link
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#unlink
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cuisines.recipes#updateById
         * @methodOf lbServices.Cuisines.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Cuisines::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Priority
 * @header lbServices.Priority
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Priority` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Priority",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Priorities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Priority.recipes() instead.
        "prototype$__get__recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Priority.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Priority.recipes.update() instead.
        "prototype$__update__recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "PUT"
        },

        // INTERNAL. Use Priority.recipes.destroy() instead.
        "prototype$__destroy__recipes": {
          url: urlBase + "/Priorities/:id/recipes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#create
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Priorities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#createMany
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Priorities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#upsert
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Priorities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#exists
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Priorities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#findById
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Priorities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#find
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Priorities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#findOne
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Priorities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#updateAll
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Priorities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#deleteById
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Priorities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#count
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Priorities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#prototype$updateAttributes
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Priorities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#createChangeStream
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Priorities/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#getSchema
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Priorities/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Priority#save
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Priorities/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.priorities() instead.
        "::get::Recipe::priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "GET"
        },

        // INTERNAL. Use Recipe.priorities.create() instead.
        "::create::Recipe::priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "POST"
        },

        // INTERNAL. Use Recipe.priorities.createMany() instead.
        "::createMany::Recipe::priorities": {
          isArray: true,
          url: urlBase + "/Recipes/:id/priorities",
          method: "POST"
        },

        // INTERNAL. Use Recipe.priorities.update() instead.
        "::update::Recipe::priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.priorities.destroy() instead.
        "::destroy::Recipe::priorities": {
          url: urlBase + "/Recipes/:id/priorities",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Priority#updateOrCreate
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Priority#update
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Priority#destroyById
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Priority#removeById
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Priority` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Priority#modelName
    * @propertyOf lbServices.Priority
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Priority`.
    */
    R.modelName = "Priority";

    /**
     * @ngdoc object
     * @name lbServices.Priority.recipes
     * @header lbServices.Priority.recipes
     * @object
     * @description
     *
     * The object `Priority.recipes` groups methods
     * manipulating `Recipe` instances related to `Priority`.
     *
     * Call {@link lbServices.Priority#recipes Priority.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Priority#recipes
         * @methodOf lbServices.Priority
         *
         * @description
         *
         * Fetches hasOne relation recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Priority::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Priority.recipes#create
         * @methodOf lbServices.Priority.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Priority::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Priority.recipes#createMany
         * @methodOf lbServices.Priority.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Priority::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Priority.recipes#destroy
         * @methodOf lbServices.Priority.recipes
         *
         * @description
         *
         * Deletes recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroy = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroy::Priority::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Priority.recipes#update
         * @methodOf lbServices.Priority.recipes
         *
         * @description
         *
         * Update recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.update = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::update::Priority::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Categories/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Categories/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#getSchema
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Categories/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#save
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Categories/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.category.findById() instead.
        "::findById::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.category.destroyById() instead.
        "::destroyById::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.updateById() instead.
        "::updateById::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.category.link() instead.
        "::link::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.category.unlink() instead.
        "::unlink::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.exists() instead.
        "::exists::Recipe::category": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/category/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.category() instead.
        "::get::Recipe::category": {
          isArray: true,
          url: urlBase + "/Recipes/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Recipe.category.create() instead.
        "::create::Recipe::category": {
          url: urlBase + "/Recipes/:id/category",
          method: "POST"
        },

        // INTERNAL. Use Recipe.category.createMany() instead.
        "::createMany::Recipe::category": {
          isArray: true,
          url: urlBase + "/Recipes/:id/category",
          method: "POST"
        },

        // INTERNAL. Use Recipe.category.destroyAll() instead.
        "::delete::Recipe::category": {
          url: urlBase + "/Recipes/:id/category",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.category.count() instead.
        "::count::Recipe::category": {
          url: urlBase + "/Recipes/:id/category/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.recipes
     * @header lbServices.Category.recipes
     * @object
     * @description
     *
     * The object `Category.recipes` groups methods
     * manipulating `Recipe` instances related to `Category`.
     *
     * Call {@link lbServices.Category#recipes Category.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#recipes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries recipes of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#count
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Counts recipes of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#create
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#createMany
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#destroyAll
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#destroyById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#exists
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#findById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#link
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#unlink
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#updateById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Category::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Comments
 * @header lbServices.Comments
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comments` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comments",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Comments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comments.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Comments/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Comments.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/Comments/:id/recipe",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#create
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#createMany
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#upsert
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Comments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#exists
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Comments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#findById
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Comments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#find
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#findOne
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Comments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#updateAll
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Comments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#deleteById
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Comments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#count
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#prototype$updateAttributes
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Comments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#createChangeStream
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Comments/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#getSchema
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Comments/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comments#save
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Comments/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.comments.findById() instead.
        "::findById::Recipe::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.comments.destroyById() instead.
        "::destroyById::Recipe::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.comments.updateById() instead.
        "::updateById::Recipe::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.comments() instead.
        "::get::Recipe::comments": {
          isArray: true,
          url: urlBase + "/Recipes/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Recipe.comments.create() instead.
        "::create::Recipe::comments": {
          url: urlBase + "/Recipes/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Recipe.comments.createMany() instead.
        "::createMany::Recipe::comments": {
          isArray: true,
          url: urlBase + "/Recipes/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Recipe.comments.destroyAll() instead.
        "::delete::Recipe::comments": {
          url: urlBase + "/Recipes/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.comments.count() instead.
        "::count::Recipe::comments": {
          url: urlBase + "/Recipes/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments.findById() instead.
        "::findById::Customer::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments.destroyById() instead.
        "::destroyById::Customer::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.comments.updateById() instead.
        "::updateById::Customer::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.comments() instead.
        "::get::Customer::comments": {
          isArray: true,
          url: urlBase + "/Customers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Customer.comments.create() instead.
        "::create::Customer::comments": {
          url: urlBase + "/Customers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Customer.comments.createMany() instead.
        "::createMany::Customer::comments": {
          isArray: true,
          url: urlBase + "/Customers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Customer.comments.destroyAll() instead.
        "::delete::Customer::comments": {
          url: urlBase + "/Customers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.comments.count() instead.
        "::count::Customer::comments": {
          url: urlBase + "/Customers/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Comments#updateOrCreate
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Comments#update
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Comments#destroyById
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Comments#removeById
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comments` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Comments#modelName
    * @propertyOf lbServices.Comments
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comments`.
    */
    R.modelName = "Comments";


        /**
         * @ngdoc method
         * @name lbServices.Comments#customer
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Comments::customer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comments#recipe
         * @methodOf lbServices.Comments
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Comments::recipe"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RecipeTag
 * @header lbServices.RecipeTag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RecipeTag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RecipeTag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RecipeTags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RecipeTag.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use RecipeTag.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RecipeTag.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RecipeTag.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RecipeTags/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RecipeTag.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use RecipeTag.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use RecipeTag.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/RecipeTags/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use RecipeTag.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/RecipeTags/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#create
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RecipeTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#createMany
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RecipeTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#upsert
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RecipeTags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#exists
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RecipeTags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#findById
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RecipeTags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#find
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RecipeTags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#findOne
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RecipeTags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#updateAll
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RecipeTags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#deleteById
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RecipeTags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#count
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RecipeTags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#prototype$updateAttributes
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RecipeTags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#createChangeStream
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RecipeTags/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#getSchema
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/RecipeTags/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#save
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/RecipeTags/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.recipeTags.findById() instead.
        "::findById::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.recipeTags.destroyById() instead.
        "::destroyById::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.updateById() instead.
        "::updateById::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.recipeTags.link() instead.
        "::link::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.recipeTags.unlink() instead.
        "::unlink::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.exists() instead.
        "::exists::Recipe::recipeTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/recipeTags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.recipeTags() instead.
        "::get::Recipe::recipeTags": {
          isArray: true,
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "GET"
        },

        // INTERNAL. Use Recipe.recipeTags.create() instead.
        "::create::Recipe::recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "POST"
        },

        // INTERNAL. Use Recipe.recipeTags.createMany() instead.
        "::createMany::Recipe::recipeTags": {
          isArray: true,
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "POST"
        },

        // INTERNAL. Use Recipe.recipeTags.destroyAll() instead.
        "::delete::Recipe::recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.recipeTags.count() instead.
        "::count::Recipe::recipeTags": {
          url: urlBase + "/Recipes/:id/recipeTags/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#updateOrCreate
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#update
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#destroyById
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#removeById
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeTag` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RecipeTag#modelName
    * @propertyOf lbServices.RecipeTag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RecipeTag`.
    */
    R.modelName = "RecipeTag";

    /**
     * @ngdoc object
     * @name lbServices.RecipeTag.recipes
     * @header lbServices.RecipeTag.recipes
     * @object
     * @description
     *
     * The object `RecipeTag.recipes` groups methods
     * manipulating `Recipe` instances related to `RecipeTag`.
     *
     * Call {@link lbServices.RecipeTag#recipes RecipeTag.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RecipeTag#recipes
         * @methodOf lbServices.RecipeTag
         *
         * @description
         *
         * Queries recipes of RecipeTag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#count
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Counts recipes of RecipeTag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#create
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#createMany
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#destroyAll
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#destroyById
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#exists
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#findById
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#link
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#unlink
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeTag.recipes#updateById
         * @methodOf lbServices.RecipeTag.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::RecipeTag::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Ingredients
 * @header lbServices.Ingredients
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ingredients` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ingredients",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ingredients/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ingredients.ingredientCategory() instead.
        "prototype$__get__ingredientCategory": {
          url: urlBase + "/Ingredients/:id/ingredientCategory",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ingredients.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ingredients.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Ingredients/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Ingredients.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Ingredients/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Ingredients.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Ingredients/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Ingredients.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Ingredients/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Ingredients.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Ingredients/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#create
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ingredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#createMany
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Ingredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#upsert
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ingredients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#exists
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Ingredients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#findById
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ingredients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#find
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ingredients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#findOne
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ingredients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#updateAll
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Ingredients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#deleteById
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Ingredients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#count
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Ingredients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#prototype$updateAttributes
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ingredients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#createChangeStream
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Ingredients/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#getSchema
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Ingredients/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#save
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Ingredients/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredients.findById() instead.
        "::findById::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredients.destroyById() instead.
        "::destroyById::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.updateById() instead.
        "::updateById::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ingredients.link() instead.
        "::link::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ingredients.unlink() instead.
        "::unlink::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.exists() instead.
        "::exists::Recipe::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.ingredients() instead.
        "::get::Recipe::ingredients": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredients.create() instead.
        "::create::Recipe::ingredients": {
          url: urlBase + "/Recipes/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredients.createMany() instead.
        "::createMany::Recipe::ingredients": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredients.destroyAll() instead.
        "::delete::Recipe::ingredients": {
          url: urlBase + "/Recipes/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredients.count() instead.
        "::count::Recipe::ingredients": {
          url: urlBase + "/Recipes/:id/ingredients/count",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.findById() instead.
        "::findById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyById() instead.
        "::destroyById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.updateById() instead.
        "::updateById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IngredientCategory.ingredients() instead.
        "::get::IngredientCategory::ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.create() instead.
        "::create::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.createMany() instead.
        "::createMany::IngredientCategory::ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyAll() instead.
        "::delete::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.count() instead.
        "::count::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients/count",
          method: "GET"
        },

        // INTERNAL. Use RecipeIngredients.ingredients() instead.
        "::get::RecipeIngredients::ingredients": {
          url: urlBase + "/RecipeIngredients/:id/ingredients",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Ingredients#updateOrCreate
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#update
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#destroyById
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredients#removeById
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Ingredients#modelName
    * @propertyOf lbServices.Ingredients
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ingredients`.
    */
    R.modelName = "Ingredients";


        /**
         * @ngdoc method
         * @name lbServices.Ingredients#ingredientCategory
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Fetches belongsTo relation ingredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategory = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::get::Ingredients::ingredientCategory"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ingredients.recipes
     * @header lbServices.Ingredients.recipes
     * @object
     * @description
     *
     * The object `Ingredients.recipes` groups methods
     * manipulating `Recipe` instances related to `Ingredients`.
     *
     * Call {@link lbServices.Ingredients#recipes Ingredients.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ingredients#recipes
         * @methodOf lbServices.Ingredients
         *
         * @description
         *
         * Queries recipes of Ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#count
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Counts recipes of Ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#create
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#createMany
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#destroyAll
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#destroyById
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#exists
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#findById
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#link
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#unlink
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ingredients.recipes#updateById
         * @methodOf lbServices.Ingredients.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Ingredients::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.IngredientCategory
 * @header lbServices.IngredientCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `IngredientCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "IngredientCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/IngredientCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use IngredientCategory.ingredients.findById() instead.
        "prototype$__findById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyById() instead.
        "prototype$__destroyById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.updateById() instead.
        "prototype$__updateById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IngredientCategory.ingredients() instead.
        "prototype$__get__ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.create() instead.
        "prototype$__create__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyAll() instead.
        "prototype$__delete__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.count() instead.
        "prototype$__count__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#create
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/IngredientCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#createMany
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/IngredientCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#upsert
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/IngredientCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#exists
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/IngredientCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#findById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/IngredientCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#find
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/IngredientCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#findOne
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/IngredientCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#updateAll
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/IngredientCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#deleteById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/IngredientCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#count
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/IngredientCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#prototype$updateAttributes
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/IngredientCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#createChangeStream
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/IngredientCategories/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#getSchema
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/IngredientCategories/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#save
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/IngredientCategories/save",
          method: "POST"
        },

        // INTERNAL. Use Ingredients.ingredientCategory() instead.
        "::get::Ingredients::ingredientCategory": {
          url: urlBase + "/Ingredients/:id/ingredientCategory",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#updateOrCreate
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#update
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#destroyById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#removeById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.IngredientCategory#modelName
    * @propertyOf lbServices.IngredientCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `IngredientCategory`.
    */
    R.modelName = "IngredientCategory";

    /**
     * @ngdoc object
     * @name lbServices.IngredientCategory.ingredients
     * @header lbServices.IngredientCategory.ingredients
     * @object
     * @description
     *
     * The object `IngredientCategory.ingredients` groups methods
     * manipulating `Ingredients` instances related to `IngredientCategory`.
     *
     * Call {@link lbServices.IngredientCategory#ingredients IngredientCategory.ingredients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#ingredients
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Queries ingredients of IngredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::get::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#count
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Counts ingredients of IngredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.ingredients.count = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::count::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#create
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.create = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::create::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#createMany
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.createMany = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::createMany::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#destroyAll
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Deletes all ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyAll = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::delete::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#destroyById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Delete a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::destroyById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#findById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Find a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.findById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::findById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#updateById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Update a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients.updateById = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::updateById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RecipeIngredients
 * @header lbServices.RecipeIngredients
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RecipeIngredients` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RecipeIngredients",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RecipeIngredients/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RecipeIngredients.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/RecipeIngredients/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use RecipeIngredients.ingredients() instead.
        "prototype$__get__ingredients": {
          url: urlBase + "/RecipeIngredients/:id/ingredients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#create
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RecipeIngredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#createMany
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RecipeIngredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#upsert
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RecipeIngredients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#exists
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RecipeIngredients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#findById
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RecipeIngredients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#find
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RecipeIngredients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#findOne
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RecipeIngredients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#updateAll
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RecipeIngredients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#deleteById
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RecipeIngredients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#count
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RecipeIngredients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#prototype$updateAttributes
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RecipeIngredients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#createChangeStream
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RecipeIngredients/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#getSchema
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/RecipeIngredients/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#save
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/RecipeIngredients/save",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#updateOrCreate
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#update
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#destroyById
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#removeById
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RecipeIngredients` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RecipeIngredients#modelName
    * @propertyOf lbServices.RecipeIngredients
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RecipeIngredients`.
    */
    R.modelName = "RecipeIngredients";


        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#recipe
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::RecipeIngredients::recipe"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RecipeIngredients#ingredients
         * @methodOf lbServices.RecipeIngredients
         *
         * @description
         *
         * Fetches belongsTo relation ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredients` object.)
         * </em>
         */
        R.ingredients = function() {
          var TargetResource = $injector.get("Ingredients");
          var action = TargetResource["::get::RecipeIngredients::ingredients"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Wishlist
 * @header lbServices.Wishlist
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Wishlist` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Wishlist",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Wishlists/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Wishlist.customers() instead.
        "prototype$__get__customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.customers.update() instead.
        "prototype$__update__customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.customers.destroy() instead.
        "prototype$__destroy__customers": {
          url: urlBase + "/Wishlists/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wishlist.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Wishlists/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Wishlist.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Wishlists/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Wishlist.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Wishlists/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Wishlist.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Wishlists/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Wishlist.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Wishlists/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#create
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Wishlists",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#createMany
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Wishlists",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#upsert
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Wishlists",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#exists
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Wishlists/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#findById
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Wishlists/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#find
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Wishlists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#findOne
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Wishlists/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#updateAll
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Wishlists/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#deleteById
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Wishlists/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#count
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Wishlists/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#prototype$updateAttributes
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Wishlists/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#createChangeStream
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Wishlists/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#getSchema
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Wishlists/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#save
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Wishlists/save",
          method: "POST"
        },

        // INTERNAL. Use Recipe.wishlists.findById() instead.
        "::findById::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.wishlists.destroyById() instead.
        "::destroyById::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.updateById() instead.
        "::updateById::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.wishlists.link() instead.
        "::link::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.wishlists.unlink() instead.
        "::unlink::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.exists() instead.
        "::exists::Recipe::wishlists": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/wishlists/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.wishlists() instead.
        "::get::Recipe::wishlists": {
          isArray: true,
          url: urlBase + "/Recipes/:id/wishlists",
          method: "GET"
        },

        // INTERNAL. Use Recipe.wishlists.create() instead.
        "::create::Recipe::wishlists": {
          url: urlBase + "/Recipes/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Recipe.wishlists.createMany() instead.
        "::createMany::Recipe::wishlists": {
          isArray: true,
          url: urlBase + "/Recipes/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Recipe.wishlists.destroyAll() instead.
        "::delete::Recipe::wishlists": {
          url: urlBase + "/Recipes/:id/wishlists",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.wishlists.count() instead.
        "::count::Recipe::wishlists": {
          url: urlBase + "/Recipes/:id/wishlists/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.wishlists() instead.
        "::get::Customer::wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "GET"
        },

        // INTERNAL. Use Customer.wishlists.create() instead.
        "::create::Customer::wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Customer.wishlists.createMany() instead.
        "::createMany::Customer::wishlists": {
          isArray: true,
          url: urlBase + "/Customers/:id/wishlists",
          method: "POST"
        },

        // INTERNAL. Use Customer.wishlists.update() instead.
        "::update::Customer::wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "PUT"
        },

        // INTERNAL. Use Customer.wishlists.destroy() instead.
        "::destroy::Customer::wishlists": {
          url: urlBase + "/Customers/:id/wishlists",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Wishlist#updateOrCreate
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#update
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#destroyById
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Wishlist#removeById
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wishlist` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Wishlist#modelName
    * @propertyOf lbServices.Wishlist
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Wishlist`.
    */
    R.modelName = "Wishlist";

    /**
     * @ngdoc object
     * @name lbServices.Wishlist.customers
     * @header lbServices.Wishlist.customers
     * @object
     * @description
     *
     * The object `Wishlist.customers` groups methods
     * manipulating `Customer` instances related to `Wishlist`.
     *
     * Call {@link lbServices.Wishlist#customers Wishlist.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Wishlist#customers
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Fetches hasOne relation customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Wishlist::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.customers#create
         * @methodOf lbServices.Wishlist.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Wishlist::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.customers#createMany
         * @methodOf lbServices.Wishlist.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Wishlist::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.customers#destroy
         * @methodOf lbServices.Wishlist.customers
         *
         * @description
         *
         * Deletes customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroy = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroy::Wishlist::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.customers#update
         * @methodOf lbServices.Wishlist.customers
         *
         * @description
         *
         * Update customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.update = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::update::Wishlist::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Wishlist.recipes
     * @header lbServices.Wishlist.recipes
     * @object
     * @description
     *
     * The object `Wishlist.recipes` groups methods
     * manipulating `Recipe` instances related to `Wishlist`.
     *
     * Call {@link lbServices.Wishlist#recipes Wishlist.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Wishlist#recipes
         * @methodOf lbServices.Wishlist
         *
         * @description
         *
         * Queries recipes of Wishlist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#count
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Counts recipes of Wishlist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#create
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#createMany
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#destroyAll
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#destroyById
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#exists
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#findById
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#link
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#unlink
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wishlist.recipes#updateById
         * @methodOf lbServices.Wishlist.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Wishlist::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.EmailInfo
 * @header lbServices.EmailInfo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EmailInfo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EmailInfo",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/EmailInfos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#create
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/EmailInfos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#createMany
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/EmailInfos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#upsert
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/EmailInfos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#exists
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/EmailInfos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#findById
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/EmailInfos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#find
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/EmailInfos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#findOne
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/EmailInfos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#updateAll
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/EmailInfos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#deleteById
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/EmailInfos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#count
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/EmailInfos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#prototype$updateAttributes
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/EmailInfos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#createChangeStream
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/EmailInfos/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#getSchema
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/EmailInfos/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#save
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/EmailInfos/save",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#updateOrCreate
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#update
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#destroyById
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.EmailInfo#removeById
         * @methodOf lbServices.EmailInfo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailInfo` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.EmailInfo#modelName
    * @propertyOf lbServices.EmailInfo
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EmailInfo`.
    */
    R.modelName = "EmailInfo";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chef
 * @header lbServices.Chef
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chef` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chef",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Chefs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Chef.customers() instead.
        "prototype$__get__customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Chef.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Chef.customers.update() instead.
        "prototype$__update__customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "PUT"
        },

        // INTERNAL. Use Chef.customers.destroy() instead.
        "prototype$__destroy__customers": {
          url: urlBase + "/Chefs/:id/customers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#prototype$__get__popularities
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Fetches hasOne relation popularities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "prototype$__get__popularities": {
          url: urlBase + "/Chefs/:id/popularities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#prototype$__create__popularities
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Creates a new instance in popularities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "prototype$__create__popularities": {
          url: urlBase + "/Chefs/:id/popularities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#prototype$__update__popularities
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update popularities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "prototype$__update__popularities": {
          url: urlBase + "/Chefs/:id/popularities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#prototype$__destroy__popularities
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Deletes popularities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__popularities": {
          url: urlBase + "/Chefs/:id/popularities",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.courses.findById() instead.
        "prototype$__findById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chef.courses.destroyById() instead.
        "prototype$__destroyById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.courses.updateById() instead.
        "prototype$__updateById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chef.contactChefs.findById() instead.
        "prototype$__findById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs.destroyById() instead.
        "prototype$__destroyById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.contactChefs.updateById() instead.
        "prototype$__updateById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chef.courses() instead.
        "prototype$__get__courses": {
          isArray: true,
          url: urlBase + "/Chefs/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use Chef.courses.create() instead.
        "prototype$__create__courses": {
          url: urlBase + "/Chefs/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Chef.courses.destroyAll() instead.
        "prototype$__delete__courses": {
          url: urlBase + "/Chefs/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.courses.count() instead.
        "prototype$__count__courses": {
          url: urlBase + "/Chefs/:id/courses/count",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs() instead.
        "prototype$__get__contactChefs": {
          isArray: true,
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs.create() instead.
        "prototype$__create__contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Chef.contactChefs.destroyAll() instead.
        "prototype$__delete__contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.contactChefs.count() instead.
        "prototype$__count__contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#create
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Chefs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#createMany
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Chefs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#upsert
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Chefs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#exists
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Chefs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#findById
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Chefs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#find
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Chefs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#findOne
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Chefs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#updateAll
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Chefs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#deleteById
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Chefs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#count
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Chefs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#prototype$updateAttributes
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Chefs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#createChangeStream
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Chefs/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#getSchema
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Chefs/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chef#save
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Chefs/save",
          method: "POST"
        },

        // INTERNAL. Use Customer.chefs() instead.
        "::get::Customer::chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "GET"
        },

        // INTERNAL. Use Customer.chefs.create() instead.
        "::create::Customer::chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.chefs.createMany() instead.
        "::createMany::Customer::chefs": {
          isArray: true,
          url: urlBase + "/Customers/:id/chefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.chefs.update() instead.
        "::update::Customer::chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "PUT"
        },

        // INTERNAL. Use Customer.chefs.destroy() instead.
        "::destroy::Customer::chefs": {
          url: urlBase + "/Customers/:id/chefs",
          method: "DELETE"
        },

        // INTERNAL. Use Course.chef() instead.
        "::get::Course::chef": {
          url: urlBase + "/Courses/:id/chef",
          method: "GET"
        },

        // INTERNAL. Use ContactChef.chef() instead.
        "::get::ContactChef::chef": {
          url: urlBase + "/ContactChefs/:id/chef",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Chef#updateOrCreate
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Chef#update
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Chef#destroyById
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Chef#removeById
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Chef#modelName
    * @propertyOf lbServices.Chef
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Chef`.
    */
    R.modelName = "Chef";

    /**
     * @ngdoc object
     * @name lbServices.Chef.customers
     * @header lbServices.Chef.customers
     * @object
     * @description
     *
     * The object `Chef.customers` groups methods
     * manipulating `Customer` instances related to `Chef`.
     *
     * Call {@link lbServices.Chef#customers Chef.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chef#customers
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Fetches hasOne relation customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Chef::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.customers#create
         * @methodOf lbServices.Chef.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Chef::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.customers#createMany
         * @methodOf lbServices.Chef.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Chef::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.customers#destroy
         * @methodOf lbServices.Chef.customers
         *
         * @description
         *
         * Deletes customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroy = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroy::Chef::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.customers#update
         * @methodOf lbServices.Chef.customers
         *
         * @description
         *
         * Update customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.update = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::update::Chef::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Chef.courses
     * @header lbServices.Chef.courses
     * @object
     * @description
     *
     * The object `Chef.courses` groups methods
     * manipulating `Course` instances related to `Chef`.
     *
     * Call {@link lbServices.Chef#courses Chef.courses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chef#courses
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Queries courses of Chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#count
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Counts courses of Chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.courses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#create
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#createMany
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#destroyAll
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Deletes all courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#destroyById
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Delete a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#findById
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Find a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::Chef::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.courses#updateById
         * @methodOf lbServices.Chef.courses
         *
         * @description
         *
         * Update a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::Chef::courses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Chef.contactChefs
     * @header lbServices.Chef.contactChefs
     * @object
     * @description
     *
     * The object `Chef.contactChefs` groups methods
     * manipulating `ContactChef` instances related to `Chef`.
     *
     * Call {@link lbServices.Chef#contactChefs Chef.contactChefs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chef#contactChefs
         * @methodOf lbServices.Chef
         *
         * @description
         *
         * Queries contactChefs of Chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::get::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#count
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Counts contactChefs of Chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contactChefs.count = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::count::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#create
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.create = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::create::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#createMany
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.createMany = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::createMany::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#destroyAll
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Deletes all contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyAll = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::delete::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#destroyById
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Delete a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::destroyById::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#findById
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Find a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.findById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::findById::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chef.contactChefs#updateById
         * @methodOf lbServices.Chef.contactChefs
         *
         * @description
         *
         * Update a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.updateById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::updateById::Chef::contactChefs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Course
 * @header lbServices.Course
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Course` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Course",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Courses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Course.chef() instead.
        "prototype$__get__chef": {
          url: urlBase + "/Courses/:id/chef",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.findById() instead.
        "prototype$__findById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.destroyById() instead.
        "prototype$__destroyById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.contactChefs.updateById() instead.
        "prototype$__updateById__contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.contactChefs() instead.
        "prototype$__get__contactChefs": {
          isArray: true,
          url: urlBase + "/Courses/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.create() instead.
        "prototype$__create__contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Course.contactChefs.destroyAll() instead.
        "prototype$__delete__contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Course.contactChefs.count() instead.
        "prototype$__count__contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#create
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createMany
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#upsert
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Courses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#exists
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Courses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Courses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#find
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Courses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findOne
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Courses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#updateAll
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Courses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#deleteById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Courses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#count
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$updateAttributes
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Courses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createChangeStream
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Courses/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#getSchema
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Courses/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#save
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Courses/save",
          method: "POST"
        },

        // INTERNAL. Use Chef.courses.findById() instead.
        "::findById::Chef::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chef.courses.destroyById() instead.
        "::destroyById::Chef::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.courses.updateById() instead.
        "::updateById::Chef::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/courses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chef.courses() instead.
        "::get::Chef::courses": {
          isArray: true,
          url: urlBase + "/Chefs/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use Chef.courses.create() instead.
        "::create::Chef::courses": {
          url: urlBase + "/Chefs/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Chef.courses.createMany() instead.
        "::createMany::Chef::courses": {
          isArray: true,
          url: urlBase + "/Chefs/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Chef.courses.destroyAll() instead.
        "::delete::Chef::courses": {
          url: urlBase + "/Chefs/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.courses.count() instead.
        "::count::Chef::courses": {
          url: urlBase + "/Chefs/:id/courses/count",
          method: "GET"
        },

        // INTERNAL. Use ContactChef.course() instead.
        "::get::ContactChef::course": {
          url: urlBase + "/ContactChefs/:id/course",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Course#updateOrCreate
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Course#update
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Course#destroyById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Course#removeById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Course#modelName
    * @propertyOf lbServices.Course
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Course`.
    */
    R.modelName = "Course";


        /**
         * @ngdoc method
         * @name lbServices.Course#chef
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Fetches belongsTo relation chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chef = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::get::Course::chef"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.contactChefs
     * @header lbServices.Course.contactChefs
     * @object
     * @description
     *
     * The object `Course.contactChefs` groups methods
     * manipulating `ContactChef` instances related to `Course`.
     *
     * Call {@link lbServices.Course#contactChefs Course.contactChefs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#contactChefs
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries contactChefs of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::get::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#count
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Counts contactChefs of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contactChefs.count = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::count::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#create
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.create = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::create::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#createMany
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Creates a new instance in contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.createMany = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::createMany::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#destroyAll
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Deletes all contactChefs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyAll = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::delete::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#destroyById
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Delete a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contactChefs.destroyById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::destroyById::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#findById
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Find a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.findById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::findById::Course::contactChefs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.contactChefs#updateById
         * @methodOf lbServices.Course.contactChefs
         *
         * @description
         *
         * Update a related item by id for contactChefs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contactChefs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R.contactChefs.updateById = function() {
          var TargetResource = $injector.get("ContactChef");
          var action = TargetResource["::updateById::Course::contactChefs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ContactChef
 * @header lbServices.ContactChef
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ContactChef` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ContactChef",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ContactChefs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ContactChef.chef() instead.
        "prototype$__get__chef": {
          url: urlBase + "/ContactChefs/:id/chef",
          method: "GET"
        },

        // INTERNAL. Use ContactChef.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/ContactChefs/:id/course",
          method: "GET"
        },

        // INTERNAL. Use ContactChef.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/ContactChefs/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#create
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ContactChefs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#createMany
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ContactChefs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#upsert
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ContactChefs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#exists
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ContactChefs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#findById
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ContactChefs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#find
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ContactChefs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#findOne
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ContactChefs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#updateAll
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ContactChefs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#deleteById
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ContactChefs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#count
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ContactChefs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#prototype$updateAttributes
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ContactChefs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#createChangeStream
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ContactChefs/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#getSchema
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/ContactChefs/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#save
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/ContactChefs/save",
          method: "POST"
        },

        // INTERNAL. Use Customer.contactChefs.findById() instead.
        "::findById::Customer::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.contactChefs.destroyById() instead.
        "::destroyById::Customer::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.contactChefs.updateById() instead.
        "::updateById::Customer::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.contactChefs() instead.
        "::get::Customer::contactChefs": {
          isArray: true,
          url: urlBase + "/Customers/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Customer.contactChefs.create() instead.
        "::create::Customer::contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.contactChefs.createMany() instead.
        "::createMany::Customer::contactChefs": {
          isArray: true,
          url: urlBase + "/Customers/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Customer.contactChefs.destroyAll() instead.
        "::delete::Customer::contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.contactChefs.count() instead.
        "::count::Customer::contactChefs": {
          url: urlBase + "/Customers/:id/contactChefs/count",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs.findById() instead.
        "::findById::Chef::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs.destroyById() instead.
        "::destroyById::Chef::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.contactChefs.updateById() instead.
        "::updateById::Chef::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chefs/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chef.contactChefs() instead.
        "::get::Chef::contactChefs": {
          isArray: true,
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Chef.contactChefs.create() instead.
        "::create::Chef::contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Chef.contactChefs.createMany() instead.
        "::createMany::Chef::contactChefs": {
          isArray: true,
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Chef.contactChefs.destroyAll() instead.
        "::delete::Chef::contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Chef.contactChefs.count() instead.
        "::count::Chef::contactChefs": {
          url: urlBase + "/Chefs/:id/contactChefs/count",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.findById() instead.
        "::findById::Course::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.destroyById() instead.
        "::destroyById::Course::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.contactChefs.updateById() instead.
        "::updateById::Course::contactChefs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Courses/:id/contactChefs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.contactChefs() instead.
        "::get::Course::contactChefs": {
          isArray: true,
          url: urlBase + "/Courses/:id/contactChefs",
          method: "GET"
        },

        // INTERNAL. Use Course.contactChefs.create() instead.
        "::create::Course::contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Course.contactChefs.createMany() instead.
        "::createMany::Course::contactChefs": {
          isArray: true,
          url: urlBase + "/Courses/:id/contactChefs",
          method: "POST"
        },

        // INTERNAL. Use Course.contactChefs.destroyAll() instead.
        "::delete::Course::contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs",
          method: "DELETE"
        },

        // INTERNAL. Use Course.contactChefs.count() instead.
        "::count::Course::contactChefs": {
          url: urlBase + "/Courses/:id/contactChefs/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ContactChef#updateOrCreate
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#update
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#destroyById
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#removeById
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ContactChef` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ContactChef#modelName
    * @propertyOf lbServices.ContactChef
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ContactChef`.
    */
    R.modelName = "ContactChef";


        /**
         * @ngdoc method
         * @name lbServices.ContactChef#chef
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Fetches belongsTo relation chef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chef` object.)
         * </em>
         */
        R.chef = function() {
          var TargetResource = $injector.get("Chef");
          var action = TargetResource["::get::ContactChef::chef"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#course
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::ContactChef::course"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ContactChef#customer
         * @methodOf lbServices.ContactChef
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::ContactChef::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Order",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Orders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Order.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#create
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createMany
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#upsert
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Orders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#exists
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Orders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Orders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#find
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findOne
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Orders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#updateAll
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Orders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#deleteById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Orders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#count
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#prototype$updateAttributes
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Orders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createChangeStream
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Orders/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#getSchema
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Send the schema of the model requested.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `schema` – `{object=}` - 
         */
        "getSchema": {
          url: urlBase + "/Orders/getSchema",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#save
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Remote method for saving data with its depedencies
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `schema` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "save": {
          url: urlBase + "/Orders/save",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.findById() instead.
        "::findById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "::destroyById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "::updateById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orders() instead.
        "::get::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "::create::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.createMany() instead.
        "::createMany::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "::delete::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "::count::Customer::orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Order#updateOrCreate
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Order#update
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Order#destroyById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Order#removeById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Order#modelName
    * @propertyOf lbServices.Order
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Order`.
    */
    R.modelName = "Order";


        /**
         * @ngdoc method
         * @name lbServices.Order#customer
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Order::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
