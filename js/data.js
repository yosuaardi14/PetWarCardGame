const CANVAS_RANGER = [
    {
        "name": "Dobel",
        "description": "",
        "pet": "Sharpnell",
        "cardNum": 1
    },
    {
        "name": "Tsunaryo",
        "description": "",
        "pet": "Lpg-Zord",
        "cardNum": 1
    },
    {
        "name": "Von staire",
        "description": "",
        "pet": "Sunge",
        "cardNum": 1
    },
    {
        "name": "Ashtray",
        "description": "",
        "pet": "Minion",
        "cardNum": 1
    },
    {
        "name": "Bonci",
        "description": "",
        "pet": "Waung",
        "cardNum": 1
    },
    {
        "name": "Neo",
        "description": "",
        "pet": "Paleo",
        "cardNum": 1
    }
];

const PET = {
    "Jungle": {
        "name": "Jungle",
        "description": "",
        "cardNum": 5
    },
    "Sharpnell": {
        "name": "Sharpnell",
        "description": "",
        "cardNum": 5
    },
    "Lpg-Zord": {
        "name": "Lpg-Zord",
        "description": "",
        "cardNum": 5
    },
    "Sunge": {
        "name": "Sunge",
        "description": "",
        "cardNum": 5
    },
    "Minion": {
        "name": "Minion",
        "description": "",
        "cardNum": 5
    },
    "Waung": {
        "name": "Waung",
        "description": "",
        "cardNum": 5
    },
    "Paleo": {
        "name": "Paleo",
        "description": "",
        "cardNum": 5
    }
};

const ACTION = {
    "Aim": {
        "name": "Aim",
        "description": "",
        "cardNum": 5,
        "ability": "Aim",
        "special": null
    },
    "Boom": {
        "name": "Boom",
        "description": "",
        "cardNum": 6,
        "ability": "Boom",
        "special": null
    },
    "Doom": {
        "name": "Doom",
        "description": "",
        "cardNum": 1,
        "ability": "Doom",
        "special": null
    },
    "Two Aim": {
        "name": "Two Aim",
        "description": "",
        "cardNum": 1,
        "ability": "TwoAim",
        "special": null
    },
    "Two Boom": {
        "name": "Two Boom",
        "description": "",
        "cardNum": 1,
        "ability": "TwoBoom",
        "special": null
    },
    "Miss": {
        "name": "Miss",
        "description": "",
        "cardNum": 1,
        "ability": "Miss",
        "special": null
    },
    "Running": {
        "name": "Running",
        "description": "",
        "cardNum": 3,
        "ability": "Running",
        "special": null
    },
    "Go Forward": {
        "name": "Go Forward",
        "description": "",
        "cardNum": 1,
        "ability": "GoForward",
        "special": null
    },
    "Go Backward": {
        "name": "Go Backward",
        "description": "",
        "cardNum": 2,
        "ability": "GoBackward",
        "special": null
    },
    "Move The Pet": {
        "name": "Move The Pet",
        "description": "",
        "cardNum": 1,
        "ability": "MoveThePet",
        "special": null
    },
    "Typhoon": {
        "name": "Typhoon",
        "description": "",
        "cardNum": 1,
        "ability": "Typhoon",
        "special": null
    },
    "Get Cover": {
        "name": "Get Cover",
        "description": "",
        "cardNum": 2,
        "ability": "GetCover",
        "special": null
    },
    "Armor": {
        "name": "Armor",
        "description": "",
        "cardNum": 1,
        "ability": "Armor",
        "special": null
    },
    "Lunch Time": {
        "name": "Lunch Time",
        "description": "",
        "cardNum": 1,
        "ability": "LunchTime",
        "special": null
    },
    "Grenade-Mega Grenade": {
        "name": "Grenade-Mega Grenade",
        "description": "",
        "cardNum": 2,
        "ability": "Grenade",
        "special": {
            "description": "",
            "ranger": "Tsunaryo",
            "ability": "MegaGrenade"
        }
    },
    "Aim-Kamikaze": {
        "name": "Aim-Kamikaze",
        "description": "",
        "cardNum": 3,
        "ability": "Aim",
        "special": {
            "description": "",
            "ranger": "Tsunaryo",
            "ability": "Kamikaze"
        }
    },
    "Ressurect-Double Resurrect": {
        "name": "Ressurect-Double Resurrect",
        "description": "",
        "cardNum": 2,
        "ability": "Ressurect",
        "special": {
            "description": "",
            "ranger": "Von staire",
            "ability": "DoubleResurrect"
        }
    },
    "Go Forward-Go Anyward": {
        "name": "Go Forward-Go Anyward",
        "description": "",
        "cardNum": 2,
        "ability": "GoForward",
        "special": {
            "description": "",
            "ranger": "Von staire",
            "ability": "GoAnyward"
        }
    },
    "Go Backward-Go Anyward": {
        "name": "Go Backward-Go Anyward",
        "description": "",
        "cardNum": 1,
        "ability": "GoBackward",
        "special": {
            "description": "",
            "ranger": "Von staire",
            "ability": "GoAnyward"
        }
    },

    "Boom-Overshock": {
        "name": "Boom-Overshock",
        "description": "",
        "cardNum": 3,
        "ability": "Boom",
        "special": {
            "description": "",
            "ranger": "Neo",
            "ability": "Overshock"
        }
    },
    "Armor-Shield": {
        "name": "Armor-Shield",
        "description": "",
        "cardNum": 1,
        "ability": "Armor",
        "special": {
            "description": "",
            "ranger": "Bonci",
            "ability": "Shield"
        }
    },
    "Hide-Master Hide": {
        "name": "Hide-Master Hide",
        "description": "",
        "cardNum": 2,
        "ability": "Hide",
        "special": {
            "description": "",
            "ranger": "Bonci",
            "ability": "MasterHide"
        }
    },
    "Aim-Trap": {
        "name": "Aim-Trap",
        "description": "",
        "cardNum": 4,
        "ability": "Aim",
        "special": {
            "description": "",
            "ranger": "Ashtray",
            "ability": "Trap"
        }
    },
    "Bump Left-Moving Aim": {
        "name": "Bump Left-Moving Aim",
        "description": "",
        "cardNum": 2,
        "ability": "BumpLeft",
        "special": {
            "description": "",
            "ranger": "Ashtray",
            "ability": "MovingAim"
        }
    },
    "Bump Right-Moving Aim": {
        "name": "Bump Right-Moving Aim",
        "description": "",
        "cardNum": 2,
        "ability": "BumpRight",
        "special": {
            "description": "",
            "ranger": "Ashtray",
            "ability": "MovingAim"
        }
    },
    "Running-Escape": {
        "name": "Running-Escape",
        "description": "",
        "cardNum": 3,
        "ability": "Running",
        "special": {
            "description": "",
            "ranger": "Dobel",
            "ability": "Escape"
        }
    },
    "Running-Double Run": {
        "name": "Running-Double Run",
        "description": "",
        "cardNum": 2,
        "ability": "Running",
        "special": {
            "description": "",
            "ranger": "Dobel",
            "ability": "DoubleRun"
        }
    },
};