Base URL: `http://localhost:3000`<br/>

Event Model: .json<br/>
{<br/>
"eventName": "string",<br/>
"date": "string",<br/>
"time": "string",<br/>
"location": "school | hotel | silom | home | Chulalongkorn University"<br/>
}<br/>

Participant Model: .json<br/>
{<br/>
  "id": "string (UUID)",<br/>
  "name": "string",<br/>
  "age": "number (minimum: 0)",<br/>
  "sex": "male | female | other",<br/>
  "status": "confirmed | cancelled | pending",<br/>
  "joinEvent": "string (event name)"<br/>
}<br/>

API Response Model: .json<br/>
{<br/>
  "success": "boolean",<br/>
  "message": "string",<br/>
  "data": "T | null"<br/>
}<br/>

Events Module:<br/>
1. Get All Events<br/>
Method: `GET`<br/>
Endpoint: `/events`<br/>
Description: Retrieve all events<br/>
Parameters:None<br/>

2. Get Event by Name<br/>
 Method: `GET`<br/>
 Endpoint: `/events/:eventname`<br/>
 Description: Retrieve a specific event by name<br/>
 Parameters:`eventname` (path, string): The name of the event<br/>

 3. Create New Event<br/>
 Method: `POST`<br/>
 Endpoint: `/events`<br/>
 Description: Create a new event<br/>
 Request Body: .json<br/>
  {<br/>
    "eventName": "string (required)",<br/>
    "date": "string (required)",<br/>
    "time": "string (required)",<br/>
    "location": "school | hotel | silom | home | Chulalongkorn University (required)"<br/>
  }<br/>
 
 4. Update Event<br/>
 Method: `PATCH`<br/>
 Endpoint: `/events`<br/>
 Description: Create a new event<br/>
 Request Body: .json<br/>
{<br/>
    "eventName": "string",<br/>
    "date": "string",<br/>
    "time": "string",<br/>
    "location": "school | hotel | silom | home | Chulalongkorn University"<br/>
}<br/>
 
 5. Delete Event<br/>
 Method: `DELETE`<br/>
 Endpoint: `/events/:eventname`<br/>
 Description: Delete an event by name<br/>
 Parameters:`eventname` (path, string): The name of the event to delete<br/>
 
 Participants Module<br/>
 1. Create Participant<br/>
 Method: `POST`<br/>
 Endpoint:`/participants`<br/>
 Description:  Create a new participant<br/>
 Request Body: .json<br/>
{<br/>
    "name": "string (required)",<br/>
    "age": "number (required, minimum: 0)",<br/>
    "sex": "male | female | other (required)",<br/>
    "status": "confirmed | cancelled | pending (required)",<br/>
    "joinEvent": "string (required)"<br/>
}<br/>

 2. Get Participant by ID<br/>
 Method: `GET`<br/>
 Endpoint:`/participants/:id`<br/>
 Description:  Retrieve a specific participant by ID<br/>
 Parameters:`id` (path, string): The UUID of the participant<br/>

3. Update Participant (Full)<br/>
Method: `PUT`<br/>
Endpoint: `/participants/:id`<br/>
Description: Update entire participant data<br/>
Parameters: `id` (path, string): The UUID of the participant<br/>
Request Body:(All fields required) .json<br/>
{<br/>
    "name": "string (required)",<br/>
    "age": "number (required, minimum: 0)",<br/>
    "sex": "male | female | other (required)",<br/>
    "status": "confirmed | cancelled | pending (required)",<br/>
    "joinEvent": "string (required)"<br/>
}<br/>

4. Update Participant (Partial)<br/>
Method: `PATCH`<br/>
Endpoint: `/participants/:id`<br/>
Description: Update specific fields of a participant<br/>
Parameters: `id` (path, string): The UUID of the participant<br/>
Request Body:(All fields optional) .json<br/>
{<br/>
    "name": "string",<br/>
    "age": "number (minimum: 0)",<br/>
    "sex": "male | female | other",<br/>
    "status": "confirmed | cancelled | pending"<br/>
}<br/>

5. Delete Participant<br/>
Method: `DELETE`<br/>
Endpoint: `/participants/:id`<br/>
Description: Delete a participant by ID<br/>
Status Code: 204 No Content<br/>
Parameters: `id` (path, string): The UUID of the participant<br/>
Response: No content<br/>
Error Response:<br/>
Status: 404<br/>
Message: ไม่พบข้อมูลที่จะลบ (Not found data to delete)<br/>

6. Get Participants by Event<br/>
Method: `GET`<br/>
Endpoint: `/participants/events/:eventname`<br/>
Description: Get all participants for a specific event<br/>
Parameters: `eventname` (path, string): The name of the event<br/>

7. Filter Participants<br/>
Method:`GET`<br/>
Endpoint: `/participants`<br/>
Description: Get participants with optional filters<br/>
Query Parameters:<br/>
`event` (optional, string): Filter by event name<br/>
`sex` (optional, string): Filter by sex (male | female | other)<br/>
`status` (optional, string): Filter by status (confirmed | cancelled | pending)<br/>
Examples:<br/>
`/participants?event=fatherday`<br/>
`/participants?sex=male&status=confirmed`<br/>
`/participants?event=fatherday&sex=female&status=pending`<br/>
