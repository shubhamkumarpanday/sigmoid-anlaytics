export const abortController = new AbortController();

export function chartOne(start_date, end_date, token) {
    return fetch(`https://sigviewauth.sigmoid.io/api/v1/getData`, {
        method: "POST",

        body: JSON.stringify({
            "_id": "dashboard1516252439345",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
                "organization": "DemoTest",
                "view": "Auction"
            },
            "chartObject": {
                "metadata": {
                    "title": "chartobject:1516252439345",
                    "img_thumbnail": "../img/chart.png",
                    "chartType": "table",
                    "dataLimit": 50
                },
                "requestParam": {
                    "granularity": "hour",
                    "timeZone": {
                        "name": "UTC (+00:00)",
                        "location": "UTC"
                    },
                    "dateRange": {
                        "startDate": `${start_date}`,
                        "endDate": `${end_date}`
                    },
                    "xAxis": [
                        "D044"
                    ],
                    "yAxis": [
                        "M002"
                    ],
                    "approxCountDistinct": [],
                    "specialCalculation": [],
                    "filter": [],
                    "orderBy": {
                        "metricOrdByList": [
                            {
                                "id": "M002",
                                "desc": true
                            }
                        ]
                    },
                    "percentCalList": []
                }
            }
        }),

        headers: {
            "x-auth-token": token,
            "Content-Type": "application/json"
        },

        signal: abortController.signal

    }).then(response => response.json())
}

export function chartTwo(start_date, end_date, token) {
    return fetch(`https://sigviewauth.sigmoid.io/api/v1/getData`, {
        method: "POST",

        body: JSON.stringify({
            "_id": "dashboard1516252235693",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
                "organization": "DemoTest",
                "view": "Auction"
            },
            "chartObject": {
                "metadata": {
                    "title": "chartobject:1516252235693",
                    "img_thumbnail": "../img/chart.png",
                    "chartType": "table",
                    "dataLimit": 50
                },
                "requestParam": {
                    "granularity": "hour",
                    "timeZone": {
                        "name": "UTC (+00:00)",
                        "location": "UTC"
                    },
                    "dateRange": {
                        "startDate": `${start_date}`,
                        "endDate": `${end_date}`
                    },
                    "xAxis": [
                        "D017"
                    ],
                    "yAxis": [
                        "M002"
                    ],
                    "approxCountDistinct": [],
                    "specialCalculation": [],
                    "filter": [],
                    "orderBy": {
                        "metricOrdByList": [
                            {
                                "id": "M002",
                                "desc": true
                            }
                        ]
                    },
                    "percentCalList": []
                }
            }
        }),

        headers: {
            "x-auth-token": token,
            "Content-Type": "application/json"
        },

        signal: abortController.signal
    }).then(response => response.json());
}

export function chartThree(start_date, end_date, token) {
    return fetch(`https://sigview.sigmoid.io/api/v1/getData`, {
        method: "POST",

        body: JSON.stringify({
            "_id": "Datastory_ChartId_1535224664111",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
                "organization": "DemoTest",
                "view": "Auction"
            },
            "chartObject": {
                "metadata": {
                    "title": "",
                    "img_thumbnail": "images/pie.png",
                    "chartType": "pie",
                    "dataLimit": 500
                },
                "text": [],
                "requestParam": {
                    "granularity": "hour",
                    "timeZone": {
                        "name": "UTC (+00:00)",
                        "location": "UTC"
                    },
                    "dateRange": {
                        "startDate": `${start_date}`,
                        "endDate": `${end_date}`
                    },
                    "xAxis": [
                        "D005"
                    ],
                    "yAxis": [],
                    "approxCountDistinct": [],
                    "specialCalculation": [
                        "CM001"
                    ],
                    "filter": [],
                    "orderBy": {
                        "customMetricOrdByList": [
                            {
                                "id": "CM001",
                                "desc": true
                            }
                        ]
                    },
                    "percentCalList": [
                        {
                            "id": "CM001"
                        }
                    ]
                }
            }
        }),

        headers: {
            "x-auth-token": token,
            "Content-Type": "application/json"
        },

        signal: abortController.signal
    }).then(response => response.json());
}