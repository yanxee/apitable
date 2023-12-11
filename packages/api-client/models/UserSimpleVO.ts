/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* User simple vo.
*/
export class UserSimpleVO {
    /**
    * User UUID
    */
    'uuid'?: string;
    /**
    * Nickname
    */
    'nickName'?: string;
    /**
    * Avatar
    */
    'avatar'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserSimpleVO.attributeTypeMap;
    }

    public constructor() {
    }
}
