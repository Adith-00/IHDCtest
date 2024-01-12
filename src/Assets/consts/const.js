import { AdminIcon, FirstPageicon, HomeIcon, LastPageicon, MemberShipIcon, Nexticon, ProfileIcon, previousIcon } from "../image";

export  const NavigationMenus=[
    {
        id:1,
        text:"Home",
        img:HomeIcon
    },
    {
        id:2,
        text:"Admin",
        img:AdminIcon
    },
    {
        id:3,
        text:"Membership",
        img:MemberShipIcon
    },
    {
        id:4,
        text:"Advocate",
        img:ProfileIcon
    },
]

export const PaginationButtons=[
    {
        id:1,
        img:FirstPageicon
    },
    {
        id:2,
        img:previousIcon
    },
    {
        id:3,
        img:Nexticon
    },
    {
        id:4,
        img:LastPageicon
    }
]
export const FilterOptions=[
    {
        id:1,
        text:"Active members",
        notification:2
    },
    {
        id:2,
        text:"Pending Request",
        notification:3
    },
    {
        id:3,
        text:"Membership Expired",
        notification:5
    }
]