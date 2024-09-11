"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../config/keys"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
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
    generateJWT(payload) {
        var token = jsonwebtoken_1.default.sign(payload, keys_1.default.secret.jwt, { expiresIn: '1h' });
        return token;
    }
    /**
     * @name getPayload
     * @description Obtener la informacion del JWT
     * @param token
     * @returns Object
     */
    //nos sirve para cuando desencriptamos el JWT
    getPayload(token) {
        var payload = jsonwebtoken_1.default.verify(token, keys_1.default.secret.jwt);
        const { iat, exp } = payload, data = __rest(payload, ["iat", "exp"]);
        return data;
    }
    /**
     * @name hashPassword
     * @description Encriptar cadena de texto
     * @param password
     * @returns String
     */
    //se encripta la contraseña
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.default.genSalt(10);
            return yield bcryptjs_1.default.hash(password, salt);
        });
    }
    /**
     * @name checkPassword
     * @description Verificar la contraseña
     * @param password
     * @param encryptedPassword
     * @returns Promise<bolean>
     */
    //comparacion de contraseñas 
    checkPassword(password, encryptedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(password, encryptedPassword);
        });
    }
}
exports.utils = new Utils();
