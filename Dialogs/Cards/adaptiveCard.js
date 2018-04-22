var builder = require('botbuilder');

module.exports = [
    function (session) {
        var card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Hello Xylos Adaptive Card",
                            "weight": "bolder",
                            "size": "medium"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://www.newance.be/site/files/images/Resultaten/Xylosv2/xylos-logo.jpg",
                                            "size": "medium",
                                            "style": "default"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Dean Aerts",
                                            "weight": "bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "spacing": "none",
                                            "text": "Stagiair Xylos",
                                            "isSubtle": true,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "De komende 8 weken zullen 3 stagiairs proberen om een chat bot te ontwikkelen voor Xylos.",
                            "wrap": true
                        },
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "Rol:",
                                    "value": "Stagiair"
                                },
                                {
                                    "title": "School:",
                                    "value": "Karel de Grote Hogeschool"
                                },
                                {
                                    "title": "Stagementor:",
                                    "value": "David Biot"
                                }
                            ]
                        }
                    ]
                }
            ],
            "actions": [
                {
                    "type": "Action.ShowCard",
                    "title": "Ik open een andere kaart",
                    "card": {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "Input.Toggle",
                                "id": "isSelected",
                                "title": "Selecteer hier iets"
                            },
                            {
                                "type": "Input.Text",
                                "id": "comment",
                                "isMultiline": true,
                                "placeholder": "Schrijf hier iets"
                            }
                        ],
                        "actions": [
                            {
                                "type": "Action.OpenUrl",
                                "title": "Post dit naar ergens",
                                "url": "http://www.xylos.com"
                            }
                        ]
                    }
                },
                {
                    "type": "Action.OpenUrl",
                    "title": "Ik verwijs door",
                    "url": "http://www.xylos.com"
                }
            ]
        }

        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    }
]