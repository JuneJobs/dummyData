'use strict';
/**
 * @description 플랫폼 Server 테스트용 SDP Response
 * @author Junhee Park (intuseer.jhpark@gmail.com, Intuseer)
 * @author
 * @since       2020. 04. 06.
 * @last update 2020. 04. 07. 메세지 포맷 업데이트
 *       
 * @todo 
 */

const dbApiMockMsg = {
    //SDP:SGU-REQ/RSP
    sgu: {
        req: {
            //정상동작
            case1: {
                "header": {
                    "msgType": 171,
                    "msgLen": 0,
                    "endpointId": 24
                },
                "payload": {
                    "userId": "wptjd6141",
                    "clientType": 2
                }
            },
            //회원아이디 중복 에러
            case2: {
                "header": {
                    "msgType": 171,
                    "msgLen": 0,
                    "endpointId": 40
                },
                "payload": {
                    "userId": "J3SUNG",
                    "clientType": 2
                }
            }
        },
        rsp: {
            case1: {
                "header": {
                    "msgType": 172,
                    "msgLen": 0,
                    "endpointId": 24
                },
                "payload": {
                    "resultCode": 0
                }
            },
            case2: {
                "header": {
                    "msgType": 172,
                    "msgLen": 0,
                    "endpointId": 40
                },
                "payload": {
                    "resultCode": 2
                }
            }
        }
    },

    //SDP: UVC-REQ/RSP
    uvc: {

    } 
    //...
}




 const g = require('../../src/config/header');
 const BpProtocol = require('../../src/lib/BpProtocol');

 router.post("/d_api_TEST",(req, res) => {
    if(req.body === dbApiMockMsg.sgu.case1.req) {

    }
    switch(req.body) {
        case dbApiMockMsg.sgu.case1.req:
            return res.send(dbApiMockMsg.sgu.case1.rsp);
        case dbApiMockMsg.sgu.case2.req:
            return res.send(dbApiMockMsg.sgu.case2.rsp);
        case dbApiMockMsg.uvc.case1.req:
            return res.send(dbApiMockMsg.uvc.case1.rsp);
        case dbApiMockMsg.uvc.case2.req:
            return res.send(dbApiMockMsg.uvc.case2.rsp);
    }
 });