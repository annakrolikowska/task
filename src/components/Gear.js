import AboutItem from "./AboutItem";

const data = [
    {id:"1", name:"Zarządzanie projektami",image:"Icon-01"},
    {id:"2", name:"Dotacje i granty międzynarodowe",image:"Icon-02"},
    {id:"3", name:"Międzynarodowa księgowość, kadry i podatki",image:"Icon-03"},
    {id:"4", name:"Prawo międzynarodowe",image:"Icon-04"},
    {id:"5", name:"Finansowanie handlu międzynarodowego",image:"Icon-05"},
    {id:"6", name:"Pozyskiwanie inwestorów (M&A)",image:"Icon-06"},
    {id:"7", name:"Nieruchomości",image:"Icon-07"},
    {id:"8", name:"Komercjalizacja własności intelektualnej",image:"Icon-08"},
    {id:"9", name:"Podnoszenie produktywności",image:"Icon-09"},
    {id:"10", name:"Crowdfunding",image:"Icon-10"},
    {id:"11", name:"Ubezpieczenia międzynarodowe",image:"Icon-11"},
    {id:"12", name:"Marketing 360º", image:"Icon-12"},
]

function Gear()  {
    return(
        <ul className="about__items">
            {data.map((option, i) => {
                return (<AboutItem name={option.name} image={option.image} number={i} allOptions={data.length} key={option.id}/>)
            })}
        </ul>
    )
}


export default Gear