## Participant Data Structure<br>
-The IParticipant interface defines the core shape of a participant record stored in participants.json.<br>
## Property         | Type             | Description<br>
id               |string            |Unique identifier (UUID/Auto-gen)<br>
names            |string            |Full name of the participant<br>
age              |number            |Age of the participant<br>
sex              |participantSex    |"Enum: male, female, other"<br>
status           |participantStatus |"Enum: confirmed, cancelled, pending"<br>
joinEvent        |string            |The eventName this participant is linked to<br>

## eventLocation<br>
Defines valid physical locations for events.<br>
-SCHOOL<br>
-HOTEL<br>
-SILOM<br>
-HOME<br>
-CHULALONGKORN<br>

## participantSex<br>
-MALE<br>
-FEMALE<br>
-OTHER<br>

## participantStatus<br>
-CONFIRMED<br>
-CANCELLED<br>
-PENDING<br>

## Event DTOs<br>
CreateDtoEvent<br>
Used for POST /events.<br>
-eventName: string (Required)<br>
-date: string (Required - ISO Format)<br>
-time: string (Required)<br>
-location: eventLocation (Enum validation)<br>

## Participant DTOs<br>
CreateParticipantDto<br>
Used for POST /participants. Includes validation to ensure the joinEvent exists via the EventsService.<br>
-name: string<br>
-age: number<br>
-sex: participantSex<br>
-status: participantStatus<br>
-joinEvent: string (Must match an existing event name<br>

## Module Relationships<br>
-EventsModule: Operates independently. Manages event.json.<br>
-ParticipantModule: Depends on EventsModule.<br>


