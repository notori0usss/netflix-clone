interface NavItem{
label:string;
path:string;
}

const navItem:NavItem[]=[
    {
        label:'Home',
        path:'/home'
    },
    {
        label:'Series',
        path:'/series'
    },{
        label:'Films',
        path:'/films'
    },{
        label:'New & Popular',
        path:'/new'
    },
    {
        label:'My List',
        path:'/mylist'
    },
    {
        label:'Browse by Language',
        path:'/browse'
    },
   
]
export default navItem
