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
export const TableData=[
   
    {
        id:1,
        name: 'John Doe',
        enrollment: '12345',
        plan: '6 month',
        amount: '$500',
        date: '2024-01-11',
        status: 'Active',
    },
    {
        id:2,
        name: 'Jane Smith',
        enrollment: '67890',
        plan: '2 month',
        amount: '$300',
        date: '2024-01-12',
        status: 'Inactive',
    },
     
]