import { Type } from "class-transformer";
import { IsArray, IsInt, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

import { OmitType } from "@nestjs/mapped-types";

export class caraDto {
    @IsInt()
    id: number;

    @IsString()
    gambar: string;

    @IsString()
    tips: string;
}

export class TambahCara extends OmitType (caraDto, ["id"]) {}

export class UpdateCara extends OmitType (caraDto, ["id"]) {}