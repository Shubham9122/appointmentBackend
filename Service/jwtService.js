import {JWT_SECREAT} from '../Config/config.js'
import jwt from 'jsonwebtoken'
class JwtSecreat {
    static sign(payload,expiry='1h',Secreat=JWT_SECREAT){
        return jwt.sign(payload,Secreat,{expiresIn:expiry})
    }
    static verify(token,Secreat=JWT_SECREAT){
        return jwt.verify(token,Secreat)
    }
    
    }

export default JwtSecreat