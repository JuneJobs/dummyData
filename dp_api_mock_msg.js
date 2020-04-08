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
    sdp: {
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
                        "userId": "airoundu@gmail.com",
                        "clientType": 2
                    }
                },
                //회원탈퇴한 ID
                case2: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 60
                    },
                    "payload": {
                        "userId": "test@naver.com",
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case3: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 70
                    },
                    "payload": {
                        "userId": "wptjd1111@naver.com",
                        "clientType": 2
                    }
                },
                //conflict of Temporary Client ID
                case4: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "userId": "wptjd1111@naver.com",
                        "clientType": 2
                    }
                },
                //중복 사례
                case5: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 40
                    },
                    "payload": {
                        "userId": "J3SUNG@naver.com",
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
                        "endpointId": 60
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case3: {
                    "header": {
                        "msgType": 172,
                        "msgLen": 0,
                        "endpointId": 70
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case4: {
                    "header": {
                        "msgType": 172,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
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
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 173,
                        "msgLen": 0,
                        "endpointId": 24
                    },
                    "payload": {
                        "bdt": "657072000",
                        "gender": "0",
                        "userId": "airoundu@gmail.com",
                        "userPw": "12345678",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2        
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 173,
                        "msgLen": 0,
                        "endpointId": 24
                    },
                    "payload": {
                        "bdt": "657072000",
                        "gender": "0",
                        "userId": "airoundu@gmail.com",
                        "userPw": "12345678",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2        
                    }
                },
                //중복 ID
                case3: {
                    "header": {
                        "msgType": 173,
                        "msgLen": 0,
                        "endpointId": 55
                    },
                    "payload": {
                        "bdt": "657072000",
                        "gender": "0",
                        "userId": "airoundu@gmail.com",
                        "userPw": "12345678",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2        
                    }
                },
                //reject not exist Temporary Client id
                case4: {
                    "header": {
                        "msgType": 173,
                        "msgLen": 0,
                        "endpointId": 91
                    },
                    "payload": {
                        "bdt": "657072000",
                        "gender": "0",
                        "userId": "airoundu@gmail.com",
                        "userPw": "12345678",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2        
                    }
                },
                //틀린 인증 코드
                case5: {
                    "header": {
                        "msgType": 173,
                        "msgLen": 0,
                        "endpointId": 91
                    },
                    "payload": {
                        "bdt": "657072000",
                        "gender": "0",
                        "userId": "airoundu@gmail.com",
                        "userPw": "12345678",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2        
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 174,
                        "msgLen": 0,
                        "endpointId": 24
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 174,
                        "msgLen": 0,
                        "endpointId": 24
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 174,
                        "msgLen": 0,
                        "endpointId": 55
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 174,
                        "msgLen": 0,
                        "endpointId": 91
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 174,
                        "msgLen": 0,
                        "endpointId": 91
                    },
                    "payload": {
                        "resultCode": 0
                    }
                }
            }
        },

        //SDP: SGI-REQ/RSP
        sgi: {
            req: {
                //정상동작, 실버
                case1: {
                    "header": {
                        "msgType": 175,
                        "msgLen": 0,
                        "endpointId": 50
                    },
                    "payload": {
                        "userId": "J3SUNG@naver.com",
                        "userPw": 12345678,
                        "clientType": 2
                    }
                },
                //정상동작, 골드
                case2: {
                    "header": {
                        "msgType": 175,
                        "msgLen": 0,
                        "endpointId": 62
                    },
                    "payload": {
                        "userId": "OWEN@naver.com",
                        "userPw": 98765432,
                        "clientType": 2
                    }
                },
                //정상동작, 플래티넘
                case3: {
                    "header": {
                        "msgType": 175,
                        "msgLen": 0,
                        "endpointId": 3
                    },
                    "payload": {
                        "userId": "mangchi@naver.com",
                        "userPw": 11112222,
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case4: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 21
                    },
                    "payload": {
                        "userId": "OWEN@naver.com",
                        "userPw": 99999999,
                        "clientType": 2
                    }
                },
                //conflict of Temporary Client ID
                case5: {
                    "header": {
                        "msgType": 171,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "userId": "OWEN@naver.com",
                        "userPw": 99999999,
                        "clientType": 2
                    }
                },
                //없는 ID
                acse6: {
                    "header": {
                        "msgType": 175,
                        "msgLen": 0,
                        "endpointId": 44
                    },
                    "payload": {
                        "userId": "leejeseong@naver.com",
                        "userPw": 12345678,
                        "clientType": 2
                    }
                },
                //패스워드 오류
                case7: {
                    "header": {
                        "msgType": 175,
                        "msgLen": 0,
                        "endpointId": 42
                    },
                    "payload": {
                        "userId": "J3SUNG@naver.com",
                        "userPw": 11112222,
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 176,
                        "msgLen": 0,
                        "endpointId": 50
                    },
                    "payload": {
                        "resultCode": 0,
                        "usn": 1,
                        "ml": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 176,
                        "msgLen": 0,
                        "endpointId": 62
                    },
                    "payload": {
                        "resultCode": 0,
                        "usn": 2,
                        "ml":1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 176,
                        "msgLen": 0,
                        "endpointId": 3
                    },
                    "payload": {
                        "resultCode": 0,
                        "usn": 3,
                        "ml":2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 172,
                        "msgLen": 0,
                        "endpointId": 21
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case5: {
                    "header": {
                        "msgType": 172,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "resultCode": 0
                    }
                }, 
                case6: {
                    "header": {
                        "msgType": 176,
                        "msgLen": 0,
                        "endpointId": 44
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case7: {
                    "header": {
                        "msgType": 176,
                        "msgLen": 0,
                        "endpointId": 42
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: SGO-NOT/ACK
        sgo: {
            not: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 177,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 177,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                
                    }
                },
                //할당되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 177,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                
                    }
                },
                //로그인 실패 중첩
                case4: {
                    "header": {
                        "msgType": 177,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                
                    }
                }
            },
            ack: {
                case1: {
                    "header": {
                        "msgType": 178,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 178,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 178,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 178,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                }
            }
        },

        //SDP: UPC-REQ/RSP
        upc: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 179,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "curPw": "12345678",
                        "newPw": "98765432",
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 179,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "curPw": "12349999",
                        "newPw": "98765432",
                        "clientType": 2
                    }
                },
                //할당 되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 179,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "curPw": "12345678",
                        "newPw": "98765432",
                        "clientType": 2
                    }
                },
                //nsc 오류
                case4: {
                    "header": {
                        "msgType": 179,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "curPw": "12341111",
                        "newPw": "98765432",
                        "clientType": 2
                    }
                },
                //비밀번호 틀림
                case5: {
                    "header": {
                        "msgType": 179,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "curPw": "12341111",
                        "newPw": "98765432",
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 180,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 180,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 180,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 180,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 180,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: FPU-REQ/RSP
        fpu: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 181,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "bdt": "657072000",
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jesong",
                        "userLn": "Lee",
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 181,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "bdt": "657072000",
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jesong",
                        "userLn": "Lee",
                        "clientType": 2
                    }
                },
                //conflict of Temporary Client ID
                case3: {
                    "header": {
                        "msgType": 181,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "bdt": "657072000",
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jesong",
                        "userLn": "Lee",
                        "clientType": 2
                    }
                },
                //틀린정보
                case4: {
                    "header": {
                        "msgType": 181,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "bdt": "657072000",
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Kim",
                        "clientType": 2
                    }
                },
                //아이디가 존재하지 않음
                case5: {
                    "header": {
                        "msgType": 181,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "bdt": "657072000",
                        "userId": "J3SUNG1234@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 182,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "resultCode": 0,
                        "userPw": "G43A2O71"
                    }
                },
                case2: {
                    "header": {
                        "msgType": 182,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 182,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case4: {
                    "header": {
                        "msgType": 182,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case5: {
                    "header": {
                        "msgType": 182,
                        "msgLen": 0,
                        "endpointId": 31
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: UDR-REQ/RSP
        udr: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 183,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "userPw": "12345678"
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 183,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "userPw": "12341234"
                    }
                },
                //할당 되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 183,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "userPw": "12345678"
                    }
                },
                //nsc 오류
                case4: {
                    "header": {
                        "msgType": 183,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "userPw": "12345678"
                    }
                },
                //비밀번호 틀림
                case5: {
                    "header": {
                        "msgType": 183,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "userPw": "12341234"
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 184,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 184,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 184,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 184,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 184,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: AUV-REQ/RSP
        auv: {
            req: {
                //정상동작, 파라미터1
                case1: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 0,
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "oprSet": "0"
                    }
                },
                //정상동작, 파라미터2
                case2: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": "",
                        "signf": "",
                        "ml": "",
                        "userId": "",
                        "userFn": "",
                        "userLn": "",
                        "oprSet": "0"
                    }
                },
                //정상동작, 파라미터3
                case3: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 1,
                        "userId": "",
                        "userFn": "",
                        "userLn": "",
                        "oprSet": 0
                    }
                },
                //정상동작, 파라미터4
                case4: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": "",
                        "userId": "",
                        "userFn": "",
                        "userLn": "",
                        "oprSet": 0
                    }
                },
                //처리되지 않은 에러
                case5: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 0,
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "oprSet": "0"
                    }
                },
                //할당되지 않은 유저 시퀀스 넘버
                case6: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 0,
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "oprSet": "0"
                    }
                },
                //nsc 오류
                case7:{
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 0,
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "oprSet": "0"
                    }
                },
                //인증되지 않은 유저 시퀀스 넘버
                case8: {
                    "header": {
                        "msgType": 185,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "regf": 0,
                        "signf": 0,
                        "ml": 0,
                        "userId": "J3SUNG@naver.com",
                        "userFn": "Jeseong",
                        "userLn": "Lee",
                        "oprSet": "0"
                    }
                }

            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "SelectedUserInformationTuple":[
                            "0, 0, 0, J3SUNG@naver.com, Jeseong, Lee"
                        ]
                    }
                },
                case2:{
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "SelectedUserInformationTuple":[
                            "0, 0, 0, J3SUNG@naver.com, Jeseong, Lee",
                            "0, 0, 1, OWEN@naver.com, Owen, Kim",
                            "0, 0, 2, mangchi@naver.com, Chi, Mang",
                            "2, 0, 0, test@naver.com, Test, Test"
                        ]
                    }
                },
                case3: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "SelectedUserInformationTuple":[
                            "0, 0, 0, OWEN@naver.com, Owen, Kim"
                        ]
                    }
                },
                case4: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "SelectedUserInformationTuple":[
                            "0, 0, 0, J3SUNG@naver.com, Jeseong, Lee",
                            "0, 0, 0, OWEN@naver.com, Owem, Kim",
                            "0, 0, 0, mangchi@naver.com, Chi, Mang"
                        ]
                    }
                },
                case5: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case6: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case7: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case8: {
                    "header": {
                        "msgType": 186,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "resultCode": 0,
                        "SelectedUserInformationTuple":[
                            "0, 0, 0, J3SUNG@naver.com, Jeseong, Lee"
                        ]
                    }
                }
            }
        },

        //SDP: ASR-REQ/RSP
        asr: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 187,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC"
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 187,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC"
                    }
                },
                //할당 되지 않읂 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 187,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA1",
                        "cmac": "CCCCCCCCCCCC"
                    }
                },
                //nsc 오류
                case4: {
                    "header": {
                        "msgType": 187,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AA:AA:AA:AA:AA:AA",
                        "cmac": "CC:CC:CC:CC:CC:CC"
                    }
                },
                //인증 되지 않은 유저 시퀀스 넘버
                case5: {
                    "header": {
                        "msgType": 187,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "wmac": "AA:AA:AA:AA:AA:A2",
                        "cmac": "CC:CC:CC:CC:CC:CC"
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 188,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 188,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 188,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 188,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 188,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: ASD-REQ/RSP
        asd: {
            req: {
                //not defined
                case1: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //will be handed over to other users
                case2: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 1,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //sensor is broken
                case3: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 2,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //sensor is stolen
                case4: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 3,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //sensor will not be used
                case5: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 4,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //incorrect information was provided in registering a sensor
                case6: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 5,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //처리되지 않은 에러
                case7: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //할당 되지 않은 유저 시퀀스 넘버
                case8: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA1",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //nsc 오류
                case9: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //인증되지 않은 유저 시퀀스 넘버
                case10: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA2",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //not exist wifi mac addr
                case11: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA9",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                },
                //not exist user id
                case12: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "userId": "J3SUNG1234@naver.com"
                    }
                },
                //wifi mac과 user id가 일치하지않다
                case13: {
                    "header": {
                        "msgType": 189,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA4",
                        "drgcd": 0,
                        "userId": "J3SUNG@naver.com"
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case3: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case4: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case6: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case7: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case8: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case9: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case10: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "resultCode": 3
                    }
                },
                case11: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 4
                    }
                },
                case12: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 5
                    }
                },
                case13: {
                    "header": {
                        "msgType": 190,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 6
                    }
                },
            }
        },

        //SDP: ASV-REQ/RSP
        asv: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 191,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "actf": 0,
                        "mobf": 0,
                        "userId": "J3SUNG@naver.com",
                        "oprSet": 0
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 191,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "actf": 0,
                        "mobf": 0,
                        "userId": "J3SUNG@naver.com",
                        "oprSet": 0
                    }
                },
                //할당되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 191,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "actf": 0,
                        "mobf": 0,
                        "userId": "J3SUNG@naver.com",
                        "oprSet": 0
                    }
                },
                //nsc 오류
                case4: {
                    "header": {
                        "msgType": 191,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "actf": 0,
                        "mobf": 0,
                        "userId": "J3SUNG@naver.com",
                        "oprSet": 0
                    }
                },
                //인증되지 않은 유저 시퀀스 넘버
                case5: {
                    "header": {
                        "msgType": 191,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "actf": 0,
                        "mobf": 0,
                        "userId": "J3SUNG@naver.com",
                        "oprSet": 0
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 192,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "Selected Sensor Information Tuple":[
                             "AAAAAAAAAAAA, CCCCCCCCCCCC, 2020-01-01, 0, 0, 0, 24.132564, 102.252631, J3SUNG@naver.com"
                        ]
                    }
                },
                case2: {
                    "header": {
                        "msgType": 192,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 192,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 192,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 192,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: SRG-REQ/RSP
        srg: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 193,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC",
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 193,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC",
                        "clientType": 2
                    }
                },
                //할당 되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 193,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC",
                        "clientType": 2
                    }
                },
                //nsc오류
                case4: {
                    "header": {
                        "msgType": 193,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "cmac": "CCCCCCCCCCCC",
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 194,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 194,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 194,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 194,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                }
            }
        },

        //SDP: SAS-REQ/RSP
        sas: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //할당 되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA1",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //nsc오류
                case4: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //not exist wifi mac
                case5: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAF",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //이미 연결되어 있음
                case6: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAB",
                        "mobf": 0,
                        "clientType": 2
                    }
                },
                //이미 다른곳과 연결중
                case7: {
                    "header": {
                        "msgType": 195,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAC",
                        "mobf": 0,
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: 
                {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 3
                    }
                },
                case6: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 4
                    }
                },
                case7: {
                    "header": {
                        "msgType": 196,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 5
                    }
                }
            }
        },

        //SDP: SDD-REQ/RSP
        sdd: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "clientType": 2
                    }
                },
                //다른 유저에게 센서 양도
                case2: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAB",
                        "drgcd": 1,
                        "clientType": 2
                    }
                },
                //센서가 부서짐
                case3: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAC",
                        "drgcd": 2,
                        "clientType": 2
                    }
                },
                //센서가 사라짐
                case4: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAD",
                        "drgcd": 3,
                        "clientType": 2
                    }
                },
                //이 센서를 사용하지 않을 예정
                case5: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAE",
                        "drgcd": 4,
                        "clientType": 2
                    }
                },
                //센서 등록시 잘못된 정보가 있었음
                case6: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA8",
                        "drgcd": 5,
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case7: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "clientType": 2
                    }
                },
                //할당받지 않은 유저 시퀀스 넘버
                case8: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA1",
                        "drgcd": 0,
                        "clientType": 2
                    }
                },
                //nsc 오류
                case9: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA",
                        "drgcd": 0,
                        "clientType": 2
                    }
                },
                //not exist wifi mac
                case10: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAF",
                        "drgcd": 0,
                        "clientType": 2
                    }
                },
                //유저 넘버와 wifi mac이 연결되어 있지 않음 
                case11: {
                    "header": {
                        "msgType": 197,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAA7",
                        "drgcd": 0,
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case3: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case4: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case5: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case6: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case7: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case8: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case9: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case10: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 3
                    }
                },
                case11: {
                    "header": {
                        "msgType": 198,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 4
                    }
                }
            }
        },

        //SDP: SLV-REQ/RSP
        slv: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 199,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "clientType": 2
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 199,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "clientType": 2
                    }
                },
                //할당되지 않은 유저 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 199,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "clientType": 2
                    }
                },
                //nsc 오류
                case4: {
                    "header": {
                        "msgType": 199,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "clientType": 2
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 200,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "Own Sensor Information Tuple": [
                            "AAAAAAAAAAAA, CCCCCCCCCCCC, 1570258462, 0, 0, 0, 26.124532, 36.142513"
                        ]
                    }
                },
                case2: {
                    "header": {
                        "msgType": 200,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 200,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 200,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "Own Sensor Information Tuple": [
                            "AAAAAAAAAAAA, CCCCCCCCCCCC, 1570258462, 0, 0, 0, 26.124532, 36.142513"
                        ]
                    }
                }
            }
        },

        //SDP: SIR-REQ/RSP
        sir: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 201,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA"
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 201,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA"
                    }
                },
                //conflict of Temporary Sensor ID
                case3: {
                    "header": {
                        "msgType": 201,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAA"
                    }
                },
                //not exist wifi mac
                case4: {
                    "header": {
                        "msgType": 201,
                        "msgLen": 0,
                        "endpointId": 26
                    },
                    "payload": {
                        "wmac": "AAAAAAAAAAAF"
                    }
                },
                //사용자와 관련된 센서가 아님
                case5: {
                    "header": {
                        "msgType": 201,
                        "msgLen": 0,
                        "endpointId": 93
                    },
                    "payload": {
                        "wmac": "AA:AA:AA:AA:AA:A1"
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 202,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "ssn": 0001
                    }
                },
                case2: {
                    "header": {
                        "msgType": 202,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 202,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "ssn": 0001
                    }
                },
                case4: {
                    "header": {
                        "msgType": 202,
                        "msgLen": 0,
                        "endpointId": 26
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case5: {
                    "header": {
                        "msgType": 202,
                        "msgLen": 0,
                        "endpointId": 93
                    },
                    "payload": {
                        "resultCode": 3
                    }
                }
            }
        },

        //SDP: DCA-REQ/RSP
        dca: {
            req: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 203,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "lat": 34.0000,
                        "lng": 102.0000
                    }
                },
                //처리되지 않은 에러
                case2: {
                    "header": {
                        "msgType": 203,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "lat": 34.0000,
                        "lng": 102.0000
                    }
                },
                //할당되지 않은 센서 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 203,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "lat": 34.0000,
                        "lng": 102.0000
                    }
                },
                //GPS 에러
                case4: {
                    "header": {
                        "msgType": 203,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "lat": 34.0000,
                        "lng": 102.0000
                    }
                },
                //사용자와 관련된 센서가 아님
                case5: {
                    "header": {
                        "msgType": 203,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "lat": 34.0000,
                        "lng": 102.0000
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 204,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "mti": 600,
                        "mobf": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 204,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 204,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case4: {
                    "header": {
                        "msgType": 204,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 3
                    }
                },
                case5: {
                    "header": {
                        "msgType": 204,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 4
                    }
                }
            }
        },

        //SDP: DCD-NOT/ACK
        dcd: {
            not: {
                //정상동작
                case1: {
                    "header": {
                        "msgType": 205,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "entityType": "w"
                    }
                },
                //warning-other
                case2: {
                    "header": {
                        "msgType": 205,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "entityType": "w"
                    }
                },
                //할당되지 않은 센서 시퀀스 넘버
                case3: {
                    "header": {
                        "msgType": 205,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "entityType": "w"
                    }
                }
            },
            ack: {
                case1: {
                    "header": {
                        "msgType": 206,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0
                    }
                },
                case2: {
                    "header": {
                        "msgType": 206,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case3: {
                    "header": {
                        "msgType": 206,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                }
            }
        },

        //SDP: RAD-TRN/ACK
        rad: {
            trn: {
                //연속으로 수신 완료
                case1: {
                    "header": {
                        "msgType": 207,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "Air Quality Data Tuple": [
                            [1571386349, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571386482, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571387214, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422]
                        ]
                    }
                },
                //1개 누락
                case2: {
                    "header": {
                        "msgType": 207,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "Air Quality Data Tuple": [
                            [1571386349, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571386482, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571387214, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422]
                        ]
                    }
                },
                //2개 연속 누락
                case3: {
                    "header": {
                        "msgType": 207,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "Air Quality Data Tuple": [
                            [1571386349, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571386482, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571387214, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422]
                        ]
                    }
                },
                //2개 각각 누락
                case4: {
                    "header": {
                        "msgType": 207,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "Air Quality Data Tuple": [
                            [1571386349, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571386482, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571387214, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422]
                        ]
                    }
                },
                //3개연속 누락
                case5: {
                    "header": {
                        "msgType": 207,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "Air Quality Data Tuple": [
                            [1571386349, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571386482, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422],
                            [1571387214, 24, 25, 26, 27, 
                            28, 29, 34, 35, 36, 37, 38, 39, 
                            40, 1, 32.112233, -10.222422]
                        ]
                    }
                }
            },
            ack: {
                case1: {
                    "header": {
                        "msgType": 208,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "succRcptFlg": 1,
                        "contSuccRcpFlg": 1,
                        "numOfSuccRcpt": 3,
                        "listOfSuccTs": [
                            "1571386349",
                            "1571387214"
                        ],
                        "retrnReqFlg": 0,
                        "contRetrnReqFlg": 0,
                        "numOfRetrnReq": 0,
                        "listOfRetrnTs": [
                
                        ]
                    }
                },
                case2: {
                    "header": {
                        "msgType": 208,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "succRcptFlg": 1,
                        "contSuccRcpFlg": 1,
                        "numOfSuccRcpt": 2,
                        "listOfSuccTs": [
                            "1571386349",
                            "1571386482"
                        ],
                        "retrnReqFlg": 1,
                        "contRetrnReqFlg": 1,
                        "numOfRetrnReq": 1,
                        "listOfRetrnTs": [
                            "1571387214"
                        ]
                    }
                },
                case3: {
                    "header": {
                        "msgType": 208,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "succRcptFlg": 1,
                        "contSuccRcpFlg": 1,
                        "numOfSuccRcpt": 1,
                        "listOfSuccTs": [
                            "1571386349"
                        ],
                        "retrnReqFlg": 1,
                        "contRetrnReqFlg": 1,
                        "numOfRetrnReq": 2,
                        "listOfRetrnTs": [
                            "1571386482",
                            "1571387214"
                        ]
                    }
                },
                case4: {
                    "header": {
                        "msgType": 208,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "succRcptFlg": 1,
                        "contSuccRcpFlg": 1,
                        "numOfSuccRcpt": 1,
                        "listOfSuccTs": [
                            "1571386482"
                        ],
                        "retrnReqFlg": 1,
                        "contRetrnReqFlg": 0,
                        "numOfRetrnReq": 2,
                        "listOfRetrnTs": [
                            "1571386349",
                            "1571387214"
                        ]
                    }
                }, 
                case5: {
                    "header": {
                        "msgType": 208,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "succRcptFlg": 0,
                        "contSuccRcpFlg": 0,
                        "numOfSuccRcpt": 0,
                        "listOfSuccTs": [
                
                        ],
                        "retrnReqFlg": 1,
                        "contRetrnReqFlg": 1,
                        "numOfRetrnReq": 3,
                        "listOfRetrnTs": [
                            "1571386349",
                            "1571387214"
                        ]
                    }
                }
            }
        },

        //SDP: HAV-REQ/RSP
        hav: {
            req: {
                //정상 동작
                case1: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                },
                //정상 동작
                case2: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 1,
                        "lat": 36.001122,
                        "lng": 102.112233,
                        "zoomLv": 2,
                        "starTs": 181020202010,
                        "endTs": 181020202050
                    }
                },
                //정상 동작
                case3: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "searchTypeFlg": 1,
                        "ssn": 12,
                        "startTs": 1571886017,
                        "endTs": 1571887017
                    }
                },
                //처리되지 않은 에러
                case4: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                },
                //할당되지 않은 시퀀스 넘버
                case5: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                },
                //nsc 오류
                case6: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                },
                //인증되지 않은 시퀀스 넘버
                case7: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                },
                //해당 조건에서 센서가 존재하지 않음
                case8: {
                    "header": {
                        "msgType": 211,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "searchTypeFlg": 0,
                        "sensorOwnFlg": 0
                    }
                }
            },
            rsp: {
                case1: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "rspType": 0,
                        "sensorList": [
                            "5, 136C1814843F, 35.846207, 128.670686, 0, 1", 
                            "10,A9742BD74690, 35.2835307, 128.681802, 0, 1", 
                            "12,079190748A97, 35.838734, 128.681342, 0, 1"
                        ]
                    }
                },
                case2: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "rspType": 1,
                        "airDataList": [
                            "1571886017, 43, 27, 62, 3, 41, 34, 64, 7, 5, 64, 53, 45, 84, 35.838734, 128.681342", 
                            "1571886018, 25, 11, 38, 85, 39, 74, 90, 89, 14, 48, 11, 57, 84, 35.838734, 128,681342", 
                            "1571886019, 63, 96, 62, 99, 89, 78, 37, 57, 88, 46, 2, 26, 78, 35.838734, 128.681342",
                            "1571886020, 39, 38, 4, 64, 76, 88, 66, 16, 44, 9, 9, 49, 81, 35.838734, 128.681342"
                        ]
                    }
                },
                case3: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "rspType": 1,
                        "airDataList": [
                            "1571886017, 43, 27, 62, 3, 41, 34, 64, 7, 5, 64, 53, 45, 84, 35.838734, 128.681342",
                            "1571886018, 25, 11, 38, 85, 39, 74, 90, 89,14, 48, 11, 57, 84, 35.838734, 128,681342",
                            "1571886019, 63, 96, 62, 99, 89, 78, 37, 57,88, 46, 2, 26, 78, 35.838734, 128.681342",
                            "1571886020, 39, 38, 4, 64, 76, 88, 66, 16, 44, 9, 9, 49, 81, 35.838734, 128.681342"
                        ]
                    }
                },
                case4: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 1
                    }
                },
                case5: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 99
                    },
                    "payload": {
                        "resultCode": 2
                    }
                },
                case6: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 1
                    },
                    "payload": {
                        "resultCode": 0,
                        "rspType": 0,
                        "sensorList": [
                            "5, 136C1814843F, 35.846207,128.670686, 0, 1",
                            "10,A9742BD74690, 35.2835307, 128.681802, 0, 1",
                            "12,079190748A97, 35.838734, 128.681342, 0, 1"
                        ]
                    }
                },
                case7: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 98
                    },
                    "payload": {
                        "resultCode": 3
                    }
                },
                case8: {
                    "header": {
                        "msgType": 212,
                        "msgLen": 0,
                        "endpointId": 90
                    },
                    "payload": {
                        "resultCode": 4
                    }
                }
            }
        }
    }
}




 const g = require('../../src/config/header');
 const BpProtocol = require('../../src/lib/BpProtocol');

 router.post("/d_api_TEST",(req, res) => {
    if(req.body === dbApiMockMsg.sgu.case1.req) {

    }
    switch(req.body) {
        case dbApiMockMsg.sdp.sgu.req.case1:
            return res.send(dbApiMockMsg.sdp.sgu.rsp.case1);
        case dbApiMockMsg.sdp.sgu.req.case2:
            return res.send(dbApiMockMsg.sdp.sgu.rsp.case2);
        case dbApiMockMsg.sdp.uvc.req.case2:
            return res.send(dbApiMockMsg.sdp.uvc.rsp.case2);
        case dbApiMockMsg.sdp.sgu.req.case2:
            return res.send(dbApiMockMsg.sdp.uvc.rsp.case2);
    }
 });