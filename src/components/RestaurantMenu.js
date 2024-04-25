import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1808466&lng=72.6471847&restaurantId=605457&catalog_qa=undefined&isMenuUx4=true");

        const json = await data.json();
        setResInfo(json.data)
        console.log(json);
    }

    if(resInfo === null) return <Shimmer />;

    const { name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards[0].card.info.name);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) => ( 
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;