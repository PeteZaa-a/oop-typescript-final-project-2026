import { PartialType } from "@nestjs/mapped-types"
import { createDtoEvent } from "./create.event.dto"

export class UpdateDtoEvent extends PartialType(createDtoEvent) { }


