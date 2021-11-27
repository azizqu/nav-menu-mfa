"use strict"
const navObj = {};
navObj['jsonItems'] =
[
    {
        "navTitle": "NAV ITEM 1",
        "dropdown": false,
        "class": "nav-links",
        "href": "#href1",
        "dropdownItems":[
            {

            }
        ]
    },
    {
        "navTitle": "NAV ITEM 2 - DROPDOWN",
        "dropdown": true,
        "class": "dropbtn",
        "href": "javascript:void(0)",
        "dropdownItems": [
            {
                "title": "Item 1",
                "href": "#href1"
            },
            {
                "title": "Item 2",
                "href": "#href2"
            },
            {
                "title": "Item 3",
                "href": "#href3"
            },
            {
                "title": "Item 4",
                "href": "#href4"
            },
            {
                "title": "Item 5",
                "href": "#href5"
            }
        ]
    },
    {
        "navTitle": "NAV ITEM 3",
        "dropdown": false,
        "class": "nav-links",
        "href": "#href3",
        "dropdownItems":[
            {

            }
        ]
    },
    {
        "navTitle": "NAV ITEM 4 - DROPDOWN",
        "dropdown": true,
        "class": "dropbtn",
        "href": "javascript:void(0)",
        "dropdownItems": [
            {
                "title": "Second drop 1",
                "href": "#href1"
            },
            {
                "title": "Pawh Item 2",
                "href": "#href2"
            },
            {
                "title": "Item 3",
                "href": "#href3"
            }
        ]
    }
]