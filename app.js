import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbUtgMZeuWSzcAagt52KXe5o2DGaUba-24dvKp6BDdkUnm860eAZnBmL3_mH_m2Hyjng&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img
              className="cart"
              src="data:image/png;base64,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"
            />
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "info": {
      "id": "54053",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Sitabuldi",
      "areaName": "Sitabuldi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.6,
      "feeDetails": {
        "restaurantId": "54053",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "721",
      "avgRatingString": "3.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:00:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-sitabuldi-nagpur-54053",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "185820",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "Trillium Mall",
      "areaName": "Ayodhya Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "185820",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "630",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 22:45:00",
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
        "header": "10% OFF",
        "subHeader": "ABOVE ₹999",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-trillium-mall-ayodhya-nagar-nagpur-185820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53868",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Eternity Mall",
      "areaName": "Sitabuldi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "53868",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "547",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 01:00:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-eternity-mall-sitabuldi-nagpur-53868",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53484",
      "name": "Haldiram's Restaurant",
      "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
      "locality": "Abhyankar Marg",
      "areaName": "Sitabuldi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Sweets",
        "Desserts",
        "Chaat"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "53484",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "351771",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 22:30:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/haldirams-restaurant-abhyankar-marg-sitabuldi-nagpur-53484",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65717",
      "name": "Nanking Chinese Restaurant",
      "cloudinaryImageId": "fpdgupk4qqb6xjnjkd4k",
      "locality": "Civil Lines",
      "areaName": "Civil Lines",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Seafood",
        "Pan-Asian",
        "Beverages",
        "Fast Food",
        "North Indian"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "65717",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "144073",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 00:00:00",
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
        "subHeader": "ABOVE ₹249",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nanking-chinese-restaurant-civil-lines-nagpur-65717",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "56350",
      "name": "Checkers",
      "cloudinaryImageId": "d5516079bd5c3cf93e9c5a5340287894",
      "locality": "Residency Road",
      "areaName": "Sadar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Indian",
        "Tandoor",
        "Continental",
        "Beverages",
        "Pizzas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "56350",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "21854",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:00:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/checkers-residency-road-sadar-nagpur-56350",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "54604",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "dp3bbhabqbzpi9lk05la",
      "locality": "Eternity Mall",
      "areaName": "Sitabuldi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "54604",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 22:59:00",
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
        "subHeader": "ABOVE ₹999",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-eternity-mall-sitabuldi-nagpur-54604",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "114358",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "ac9ym0v8yvu1juxr5aq1",
      "locality": "Khare Town",
      "areaName": "Dharampeth",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "114358",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "2093",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:45:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-khare-town-dharampeth-nagpur-114358",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "76405",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "wkmvkwahhfcvaudaklep",
      "locality": "Futala Road",
      "areaName": "Civil Lines",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "76405",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "1",
      "avgRatingString": "3.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:30:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-futala-road-civil-lines-nagpur-76405",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "59789",
      "name": "Al Zam Zam",
      "cloudinaryImageId": "zasqvlaknrtn4z4xtngf",
      "locality": "High Court Road\n",
      "areaName": "Dharampeth",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Indian",
        "North Indian",
        "Chinese",
        "Mughlai",
        "Tandoor"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "59789",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "4830",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:30:00",
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
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹499",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/al-zam-zam-high-court-road-dharampeth-nagpur-59789",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53418",
      "name": "Faasos - Wraps & Rolls",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Mohan Nagar",
      "areaName": "Sadar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "53418",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "21809",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mohan-nagar-sadar-nagpur-53418",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53420",
      "name": "Oven Story Pizza",
      "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
      "locality": "Mohan Nagar",
      "areaName": "Sadar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "53420",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "3534",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19-29 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oven-story-pizza-mohan-nagar-sadar-nagpur-53420",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "55054",
      "name": "Reddy's Gokul Brindavan Restaurant",
      "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
      "locality": "Laxminagar",
      "areaName": "Dharampeth",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "55054",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "168579",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 22:30:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/reddys-gokul-brindavan-restaurant-laxminagar-dharampeth-nagpur-55054",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "56256",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "t2hgcnpte0qw2nafvwpf",
      "locality": "Residency Road",
      "areaName": "Chaoni",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "56256",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "2233",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:59:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-residency-road-chaoni-nagpur-56256",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "60606",
      "name": "Little Italy",
      "cloudinaryImageId": "46c429953956a7c530b74a61c55d8f88",
      "locality": "Civil Lines",
      "areaName": "Civil Lines",
      "costForTwo": "₹850 for two",
      "cuisines": [
        "Italian",
        "Pizzas",
        "Pastas",
        "Salads",
        "Desserts"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "60606",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "600",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
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
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹349",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/little-italy-civil-lines-nagpur-60606",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53419",
      "name": "Behrouz Biryani",
      "cloudinaryImageId": "49c27c020e946f8f4fc13fdc9038525c",
      "locality": "Mohan Nagar",
      "areaName": "Sadar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "53419",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "1803",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/behrouz-biryani-mohan-nagar-sadar-nagpur-53419",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "54057",
      "name": "Bawarchi Restaurant",
      "cloudinaryImageId": "pe9zpllafpw29ztgz888",
      "locality": "Shankar Nagar",
      "areaName": "Dharampeth",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Punjabi",
        "North Indian",
        "Biryani",
        "Pizzas",
        "Pastas",
        "Continental"
      ],
      "avgRating": 3.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "54057",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2500
      },
      "parentId": "9306",
      "avgRatingString": "3.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-02 23:00:00",
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bawarchi-restaurant-shankar-nagar-dharampeth-nagpur-54057",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "155444",
      "name": "The Good Bowl",
      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
      "locality": "Near Gandhi Chowk",
      "areaName": "Sadar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "155444",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "7918",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-good-bowl-near-gandhi-chowk-sadar-nagpur-155444",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "63013",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "su3q3pwzz3we7yr4wsc8",
      "locality": "Mohan Nagar",
      "areaName": "Sadar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "63013",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "4925",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-mohan-nagar-sadar-nagpur-63013",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "53422",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "3ec8bccd0fc2c6303d7602dd642248d5",
      "locality": "Mohan Nagar",
      "areaName": "Sadar",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "53422",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "4444",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 03:00:00",
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
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-mohan-nagar-sadar-nagpur-53422",
      "type": "WEBLINK"
    }
  },
];
const RestaurantCard = (props) => {
  const {resData} = props;
  const{cloudinaryImageId, name, cuisines, avgRating, costForTwo}= resData?.info;
  return (
    <div
      className="restaurant-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="img"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant)=>(
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};
const Footer =()=>{
  return(
    <div className="footer">
      <h3>Footer</h3>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer/> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
