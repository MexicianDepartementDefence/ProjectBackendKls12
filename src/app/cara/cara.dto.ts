import { Type } from "class-transformer";
import { IsArray, IsInt, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { DtoDetail } from "../detailcara/detailcara.dto";
import { OmitType } from "@nestjs/mapped-types";

export class caraDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => DtoDetail)
    detail : DtoDetail[]
}

export class TambahCara extends OmitType (caraDto, ["id"]) {}

export class UpdateCara extends OmitType (caraDto, ["id"]) {}