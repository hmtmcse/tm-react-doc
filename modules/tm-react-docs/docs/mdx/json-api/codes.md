| Code | Name                  | Description                                                                                                               | Method |
| ---- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------ |
| 200  |                       |                                                                                                                           |        |
| 201  | Created               | The requested resource has been created successfully                                                                      | POST   |
| 202  | Accepted              | If a request to create a resource has been accepted for processing, but the processing has not been completed by the time |        |
| 203  |                       |                                                                                                                           |        |
| 204  | No Content            | Content Created but no response resource.                                                                                 |        |
| 300  |                       |                                                                                                                           |        |
| 301  |                       |                                                                                                                           |        |
| 303  |                       |                                                                                                                           |        |
| 304  |                       |                                                                                                                           |        |
| 400  | Bad Request           |                                                                                                                           |        |
| 401  |                       |                                                                                                                           |        |
| 402  |                       |                                                                                                                           |        |
| 403  | Forbidden             | Response to an unsupported request to create a resource.                                                                  |        |
| 404  | Not Found             | When processing a request that references a related resource that does not exist.                                         |        |
| 409  | Conflict              | When processing a POST request to create a resource with a client-generated ID that already exists.                       |        |
| 500  | Internal Server Error |                                                                                                                           |        |
| 501  |                       |                                                                                                                           |        |
| 502  |                       |                                                                                                                           |        |
| 503  |                       |                                                                                                                           |        |
| 504  |                       |                                                                                                                           |        |



**Created**
After Create The response MUST also include a document that contains the primary resource.

Codes
1. 201
2. 202
3. 204
4. 403
5. 404
6. 409



**HTTP Method For**
1. GET
2. POST
3. PUT
4. DELETE