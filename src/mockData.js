const user = {
    "id": 3,
    "name": "Joe",
    "image": "https://imgr.search.brave.com/Wt0StPJhQsXQr9mfBHqyI5Med1UKRdJ1WyhPskX4lVk/fit/844/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/bzZLb2FybmZ1RDRz/cHVLLVJBYVZ3SGFF/SyZwaWQ9QXBp",
    "email": "joe@respondeai.com.br",
    "password": "123456",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
};

const habits = [
    {
        id: 1,
        name: "Nome do hábito",
        days: [1, 3, 5]
    },
    {
        id: 2,
        name: "Nome do hábito 2",
        days: [1, 3, 4, 6]
    }
];

const today = [
    {
        "id": 3,
        "name": "Acordar",
        "done": true,
        "currentSequence": 1,
        "highestSequence": 1
    }
];

const history = [
    {
        "day": "20/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-20T12:00:00.000Z",
                "weekDay": 4,
                "historyId": null,
                "done": false
            }
        ]
    },
    {
        "day": "19/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-19T12:00:00.000Z",
                "weekDay": 3,
                "historyId": 626,
                "done": true
            },
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-19T12:00:00.000Z",
                "weekDay": 3,
                "historyId": 625,
                "done": true
            }
        ]
    },
    {
        "day": "18/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-18T12:00:00.000Z",
                "weekDay": 2,
                "historyId": 7,
                "done": true
            }
        ]
    },
    {
        "day": "17/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-17T12:00:00.000Z",
                "weekDay": 1,
                "historyId": 1,
                "done": true
            }
        ]
    },
    {
        "day": "16/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-16T12:00:00.000Z",
                "weekDay": 0,
                "historyId": null,
                "done": false
            }
        ]
    },
    {
        "day": "14/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-14T12:00:00.000Z",
                "weekDay": 5,
                "historyId": null,
                "done": false
            }
        ]
    }
];


export { user, habits, today, history };