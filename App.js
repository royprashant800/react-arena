import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info

    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId } />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    )
}

const resList = [
    {
        "info": {
          "id": "84147",
          "name": "Saurashtra Chawana & Sweets",
          "cloudinaryImageId": "x5oqbuzjvd7h1xr7fpmc",
          "locality": "Satellite",
          "areaName": "Sachin Tower, Prahladnagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Sweets",
            "Snacks"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "7645",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 21:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/saurashtra-chawana-and-sweets-satellite-sachin-tower-prahladnagar-ahmedabad-84147",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "808645",
          "name": "Oshwal",
          "cloudinaryImageId": "7d626599347c9398a91b1e61f672d81b",
          "locality": "Navrangpura",
          "areaName": "Ashram Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 4.6,
          "parentId": "152931",
          "avgRatingString": "4.6",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 21:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/oshwal-navrangpura-ashram-road-ahmedabad-808645",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "37559",
          "name": "Chai Wai",
          "cloudinaryImageId": "ykiuzgd2lfcit1zgfehf",
          "locality": "Surya Complex",
          "areaName": "Navrangpura",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Beverages",
            "Snacks",
            "Pizzas"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "4432",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chai-wai-surya-complex-navrangpura-ahmedabad-37559",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "65325",
          "name": "Laxmi Ganthiya Rath",
          "cloudinaryImageId": "lymaaagdquqjhj5tbbe6",
          "locality": "Near Nehrunagar Cross Road",
          "areaName": "Ambawadi",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "6351",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 5.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "5.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 21:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/laxmi-ganthiya-rath-near-nehrunagar-cross-road-ambawadi-ahmedabad-65325",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "461013",
          "name": "Roastea",
          "cloudinaryImageId": "b3915967a4dbe11f614fc9f535e53f83",
          "locality": "Bopal",
          "areaName": "Bopal",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Cafe",
            "Italian",
            "Mexican",
            "Healthy Food",
            "Bakery",
            "Beverages",
            "Indian"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "266463",
          "avgRatingString": "4.5",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹749",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/roastea-bopal-ahmedabad-461013",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "187356",
          "name": "Chennai Express",
          "cloudinaryImageId": "oz3k0lgmxltknz0segtb",
          "locality": "Near Dhananjay Tower",
          "areaName": "Prahlad Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "445780",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 7.7,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "7.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 15:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chennai-express-near-dhananjay-tower-prahlad-nagar-ahmedabad-187356",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "506111",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
          "locality": "Shree Krishna Complex",
          "areaName": "Navrangpura",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.5",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-18 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shree-krishna-complex-navrangpura-ahmedabad-506111",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "49523",
          "name": "Vipul Dudhia ( Gajara )",
          "cloudinaryImageId": "fhrunldultsj6hvo7wdo",
          "locality": "Navrangpura",
          "areaName": "Navrangpura",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Sweets",
            "Ice Cream"
          ],
          "avgRating": 4.8,
          "parentId": "223922",
          "avgRatingString": "4.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-11 21:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-b6316868-a441-4a6d-8372-fa44756ef449"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/vipul-dudhia-gajara-navrangpura-ahmedabad-49523",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
];

const Body = () => {
    return (
        <div>
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                {/* <RestaurantCard resName="Domino's" cuisine="Pizza, Cold Drinks"/> */}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            <Body />
            {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
