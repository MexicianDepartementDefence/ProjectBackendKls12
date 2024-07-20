import { IsInt, IsOptional, IsString } from "class-validator";

export class DtoDetail {
    @IsInt()
    @IsOptional()
    id: number;

    @IsString()
    tips: string;
}