import { PickType } from "@nestjs/mapped-types";
import { IsInt, IsNumber, IsObject, IsString } from "class-validator";

export class testimoniDto {
    @IsInt()
    id: number;

    @IsString()
    nama: string;

    @IsString()
    testimoni : string;
}


export class TambahTestimoni extends PickType (testimoniDto, ["nama", "testimoni"]) {}
