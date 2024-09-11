import jwt from 'jsonwebtoken';
import keys from '../config/keys';
import bcrypt from 'bcryptjs';

/**
 * 
 * @name Utils
 * @author Ana Isabel Jasso Velázquez
 * @creation 05/07/2024 
 * 
 * 
 */


class Utils {

    /**
     * @name generateJWT
     * @description Método para generar un token OAUTH
     * @param payload 
     * @returns string
     */

    //recibe un elemento objeto a encriptar
    public generateJWT(payload: any): string { 
        var token = jwt.sign(payload, keys.secret.jwt, { expiresIn: '1h'});

        return token;
    }

    /**
     * @name getPayload
     * @description Obtener la informacion del JWT
     * @param token 
     * @returns Object
     */
    //nos sirve para cuando desencriptamos el JWT
    public getPayload(token: string): any {
        var payload = <any>jwt.verify(token, keys.secret.jwt);
        const { iat, exp, ...data } = payload;

        return data;
    } 

    /**
     * @name hashPassword
     * @description Encriptar cadena de texto
     * @param password 
     * @returns String
     */
    //se encripta la contraseña
    public async hashPassword(password: string): Promise<string> { 
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
     }

    /**
     * @name checkPassword
     * @description Verificar la contraseña
     * @param password 
     * @param encryptedPassword
     * @returns Promise<bolean>
     */
    //comparacion de contraseñas 
    public async checkPassword(password: string, encryptedPassword: string): Promise<boolean> { 
        return await bcrypt.compare(password, encryptedPassword);
     }

}

export const utils = new Utils();