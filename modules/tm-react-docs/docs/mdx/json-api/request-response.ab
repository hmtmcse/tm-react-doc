---
name: API Request Response
route: /json-api/request-response
menu: JSON API
---

## HTTP Response Codes

| Code | Name                  | Description                                                                                                               |
| ---- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                    |                                                                                                                           |
| 201  | Created               | The requested resource has been created successfully                                                                      |
| 202  | Accepted              | If a request to create a resource has been accepted for processing, but the processing has not been completed by the time |
| 204  | No Content            | Content Created but no response resource.                                                                                 |
| 400  | Bad Request           | This response means that server could not understand the request due to invalid syntax.                                   |
| 401  | Unauthorized          | The client must authenticate itself to get the requested response.                                                        |
| 403  | Forbidden             | Response to an unsupported request to create a resource.                                                                  |
| 404  | Not Found             | When processing a request that references a related resource that does not exist.                                         |
| 405  | Method Not Allowed    | Not applicable request method for the request.                                                                            |
| 409  | Conflict              | When processing a POST request to create a resource with a client-generated ID that already exists.                       |
| 500  | Internal Server Error |                                                                                                                           |
| 503  | Service Unavailable   | The server is not ready to handle the request.                                                                            |
<br/><br/>


## HTTP Method For Communication
1. **GET** : Pull data from server
2. **POST** : Create / Filter Request
3. **PUT**: Update Request
4. **DELETE** : Delete Request

<br/><br/>

## Response Basic

1. **Data (data)** : The document’s "primary data", data will object for single response, will arry for multiple response
2. **Error (error)** : Error Objects, here could have fields or not.
3. **Status (status)** Response status could be (success, error, warning)
4. **Pagination (pagination)**: Pagination will applicable for multiple data, it will contain below properties
   1. **total**
   2. **offset**
   3. **itemPerPage**

<br/>

**Note: The members data and errors MUST NOT coexist in the same document.**

<br/><br/>

## Response Single Data

```json
{
    "status": "success | error | warning",
    "data": {
        "string": "value",
        "number": 10.2,
        "boolean": true
    }
}
```


<br/><br/>

## Response Multiple Data

```json
{
    "status": "success | error | warning",
    "data": [
        {
            "string": "string data",
            "number": 20,
            "boolean": false
          },
          {
            "string": "value",
            "number": 10.2,
            "boolean": true
          }
    ],
    "pagination": {
        "total": 10,
        "offset": 0,
        "itemPerPage": 10
    }
}
```

<br/><br/>

## Error Response

```json
{
  "status": "error",
  "error": {
    "message": "Error for something",
    "fields": [
      {
        "fieldName": "Error Message"
      }
    ]
  }
}
```


<br/><br/>

## Create Request for Single entity 

```json
{
  "data": {
    "string": "value",
    "number": 10.2,
    "boolean": true
  }
}
```

<br/><br/>

## Create Request for bulk entity 

```json
 {
  "data": [
    {
      "string": "string data",
      "number": 20,
      "boolean": false
    },
    {
      "string": "value",
      "number": 10.2,
      "boolean": true
    }
  ]
}   
```

<br/><br/>

## Get Filtared Data (POST Request)

**Conditions**

1. **Equal (eq)**
2. **Not Equal (ne)**
3. **Less Than (lt)**
4. **Less Than Equal (lte)**
5. **Greater Than (gt)**
6. **Greater Than Equal (gte)**
7. **Like (like)**
8. **Null (null)**
9. **Not Null (notNull)**
10. **AND (and)**
1. **OR (or)**
1. **Wildcard Search (ws)**
1. **In List (in)**

<br/>

**Exaple:**

```json
{
  "offset": 0,
  "itemPerPage": 0,
  "sortFiled": "id",
  "sortOrder": "asc/dsc",
  "conditions": {
    "eq": {
      "fieldName": "fieldValue",
      "fieldName2": "fieldValue2"
    },
    "ne": {
      "fieldName": "fieldValue"
    },
    "lt": {
      "fieldName": "fieldValue"
    },
    "in": {
      "fieldName": [ 1, 2,3 ]
    },
    "like": {
      "fieldName": "%some text%",
      "fieldName2": "%some text",
      "fieldName3": "some text%"
    },
    "null": "fieldName",
    "notNull": "fieldName",
    "ws": "@gmail",
    "and": {
      "fieldName": "fieldValue"
    }
  }
} 
```

<br/><br/>

## Get Data With pagination (GET Request)

1. **offset**
1. **item-per-Page / sortFiled**
1. **sort-filed / sortFiled**
1. **sort-order / sortOrder**
