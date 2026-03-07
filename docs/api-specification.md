Base URL: `http://localhost:3000`
------------------------------------------------------------------------------------------------------------------
Event Model: .json
{
  "eventName": "string",
  "date": "string",
  "time": "string",
  "location": "school | hotel | silom | home | Chulalongkorn University"
}
------------------------------------------------------------------------------------------------------------------
Participant Model: .json
{
  "id": "string (UUID)",
  "name": "string",
  "age": "number (minimum: 0)",
  "sex": "male | female | other",
  "status": "confirmed | cancelled | pending",
  "joinEvent": "string (event name)"
}
------------------------------------------------------------------------------------------------------------------
API Response Model: .json
{
  "success": "boolean",
  "message": "string",
  "data": "T | null"
}
------------------------------------------------------------------------------------------------------------------
/////////////Endpoints//////////
Events Module:
1. Get All Events
 Method: `GET`
 Endpoint: `/events`
 Description: Retrieve all events
 Parameters:None
------------------------------------------------------------------------------------------------------------------
2. Get Event by Name
 Method: `GET`
 Endpoint: `/events/:eventname`
 Description: Retrieve a specific event by name
 Parameters:`eventname` (path, string): The name of the event
 ------------------------------------------------------------------------------------------------------------------
 3. Create New Event
 Method: `POST`
 Endpoint: `/events`
 Description: Create a new event
 Request Body: .json
  {
    "eventName": "string (required)",
    "date": "string (required)",
    "time": "string (required)",
    "location": "school | hotel | silom | home | Chulalongkorn University (required)"
  }
 ------------------------------------------------------------------------------------------------------------------
 4. Update Event
 Method: `PATCH`
 Endpoint: `/events`
 Description: Create a new event
 Request Body: .json
{
    "eventName": "string",
    "date": "string",
    "time": "string",
    "location": "school | hotel | silom | home | Chulalongkorn University"
}
 ------------------------------------------------------------------------------------------------------------------
 5. Delete Event
 Method: `DELETE`
 Endpoint: `/events/:eventname`
 Description: Delete an event by name
 Parameters:`eventname` (path, string): The name of the event to delete
 ------------------------------------------------------------------------------------------------------------------
 Participants Module
 1. Create Participant
 Method: `POST`
 Endpoint:`/participants`
 Description:  Create a new participant
 Request Body: .json
{
    "name": "string (required)",
    "age": "number (required, minimum: 0)",
    "sex": "male | female | other (required)",
    "status": "confirmed | cancelled | pending (required)",
    "joinEvent": "string (required)"
}
------------------------------------------------------------------------------------------------------------------
 2. Get Participant by ID
 Method: `GET`
 Endpoint:`/participants/:id`
 Description:  Retrieve a specific participant by ID
 Parameters:`id` (path, string): The UUID of the participant
------------------------------------------------------------------------------------------------------------------
3. Update Participant (Full)
Method: `PUT`
Endpoint: `/participants/:id`
Description: Update entire participant data
Parameters: `id` (path, string): The UUID of the participant
Request Body:(All fields required) .json
{
    "name": "string (required)",
    "age": "number (required, minimum: 0)",
    "sex": "male | female | other (required)",
    "status": "confirmed | cancelled | pending (required)",
    "joinEvent": "string (required)"
}
------------------------------------------------------------------------------------------------------------------
4. Update Participant (Partial)
Method: `PATCH`
Endpoint: `/participants/:id`
Description: Update specific fields of a participant
Parameters: `id` (path, string): The UUID of the participant
Request Body:(All fields optional) .json
{
    "name": "string",
    "age": "number (minimum: 0)",
    "sex": "male | female | other",
    "status": "confirmed | cancelled | pending"
}
------------------------------------------------------------------------------------------------------------------
5. Delete Participant
Method: `DELETE`
Endpoint: `/participants/:id`
Description: Delete a participant by ID
Status Code: 204 No Content
Parameters: `id` (path, string): The UUID of the participant
Response: No content
Error Response:
Status: 404
Message: ไม่พบข้อมูลที่จะลบ (Not found data to delete)
------------------------------------------------------------------------------------------------------------------
6. Get Participants by Event
Method: `GET`
Endpoint: `/participants/events/:eventname`
Description: Get all participants for a specific event
Parameters: `eventname` (path, string): The name of the event
------------------------------------------------------------------------------------------------------------------
7. Filter Participants
Method:`GET`
Endpoint: `/participants`
Description: Get participants with optional filters
Query Parameters:
`event` (optional, string): Filter by event name
`sex` (optional, string): Filter by sex (male | female | other)
`status` (optional, string): Filter by status (confirmed | cancelled | pending)
Examples:
`/participants?event=fatherday`
`/participants?sex=male&status=confirmed`
 `/participants?event=fatherday&sex=female&status=pending`
