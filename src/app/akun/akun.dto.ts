import { PickType } from "@nestjs/mapped-types";
import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class DtoAkun {
    @IsInt()
    id? : number;

    @IsString()
    @IsNotEmpty()
    nama_lengkap: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    password: string;

    @IsString()
    role: string;

    @IsString()
    refresh_token: string;
}


export class TambahAkun extends PickType (DtoAkun, ["nama_lengkap","email", "password", "role"]) {}

export class LoginAkun extends PickType (DtoAkun, ["email", "password"]) {}