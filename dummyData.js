'use strict';
/**
 * @description 플랫폼 Server 테스트용 SDP Response
 * @author Junhee Park (intuseer.jhpark@gmail.com, Intuseer)
 * @author
 * @since       2020. 04. 06.
 * @last update 2020. 04. 06.  
 *       
 * @todo 
 */

const testMsgFormat = {
    //SDP:SGU-REQ/RSP
    sgu: {
        //정상작동
        case1: {
            req: {
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
            rsp: {
                "header": {
                    "msgType": 172,
                    "msgLen": 0,
                    "endpointId": 24
                },
                "payload": {
                    "resultCode": 0
                }
            }
        },
        // 회원아이디 중복 에러
        case2: {
            req: {
                "header": {
                    "msgType": 171,
                    "msgLen": 0,
                    "endpointId": 40
                },
                "payload": {
                    "userId": "J3SUNG",
                    "clientType": 2
                }
            }, 
            rsp: {
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

    }, 
    //...
}

 const g = require('../../src/config/header');
 const BpProtocol = require('../../src/lib/BpProtocol');

 router.post("/d_api_TEST",(req, res) => {
    if(req.body === testMsg.sgu.case1.req) {

    }
    switch(req.body) {
        case testMsg.sgu.case1.req:
            return res.send(testMsg.sgu.case1.rsp);
        case testMsg.sgu.case2.req:
            return res.send(testMsg.sgu.case2.rsp);
        //...
    }
 });