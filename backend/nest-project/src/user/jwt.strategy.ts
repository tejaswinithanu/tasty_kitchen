import { Injectable } from "@nestjs/common";

import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from "passport-jwt"
import { JwtPayload } from "./jwt.payload.interface";

@Injectable({})
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : true,
            secretOrKey : 'token'
        })
    }

    async validate(payload : JwtPayload){
        return {email : payload.email,roles : payload.roles}
    }
}
