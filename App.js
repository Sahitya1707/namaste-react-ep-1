import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header 
  - Logo
  - Nav Items


*Body
  - Search
  - CardContainer
    - Cards
      Img
      Name of Res, Star Rating, Cusine, Delivery time
   

*Footer
 - CopyRight
 - Links
 - Address
 - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
          alt=""
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "402783",
      name: "Kouzina Kafe - The Food Court",
      city: "1",
      slugs: {
        restaurant:
          "kouzina-kafe-–-the-food-court-central-bangalore-central-bangalore",
      },
      cloudinaryImageId: "wkf9hkxdonjsub5sc6tf",
      locality: "Millars Road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "402783",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        serviceability: "SERVICEABLE",
        slaString: "23 MINS",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "230753",
      name: "Delhi Jaipur Express Kitchen",
      city: "1",
      slugs: {
        restaurant: "delhi-jaipur-express-kitchen-btm-btm",
      },
      cloudinaryImageId: "enorfpzq44o9cspdd4vp",
      locality: "1st Stage",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "230753",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=10188265~p=2~eid=0000018c-ad7f-690f-002a-3a6d0083026a~srvts=1703717857551~56861",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "423005",
      name: "Wedel Food",
      city: "1",
      slugs: {
        restaurant: "ice-cream-heaven-indiranagar-indiranagar",
      },
      cloudinaryImageId: "52ff90fa78538e21eee57de6cd8ba58f",
      locality: "Kodihalli",
      areaName: "Indiranagar",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Snacks", "Chinese", "Pizzas", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "423005",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹125",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "203708",
      name: "Marwadi Chaat Tiffin Services",
      city: "1",
      slugs: {
        restaurant: "marwadi-chaat-&-tiffin-services-btm-btm",
      },
      cloudinaryImageId: "osacrepzau9id2dt8jmy",
      locality: "1st Stage",
      areaName: "Btm Layout",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "203708",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10188258~p=3~eid=0000018c-ad7f-690f-002a-3a6e0083032c~srvts=1703717857551~56861",
      sla: {
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "40 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "794287",
      name: "Round The Clock Cafe",
      city: "1",
      slugs: {
        restaurant:
          "round-the-clock-cafe-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
      },
      cloudinaryImageId: "70aef9fff87a3c3493f027a6aedea515",
      locality: "Kammanahalli/Kalyan Nagar",
      areaName: "Kammanahalli/Kalyan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "794287",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "3",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "34 MINS",
        lastMileTravelString: "8.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 07:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "591215",
      name: "The Food Club",
      city: "1",
      slugs: {
        restaurant: "the-food-club-indiranagar-indiranagar",
      },
      cloudinaryImageId: "dr3ejbdwmojkfhu6hfh1",
      locality: "Hal 2dd Stage",
      areaName: "Indiranagar",
      costForTwo: "₹10 for two",
      cuisines: ["Indian", "Thalis"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "591215",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 MINS",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-31 05:01:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹100",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "478708",
      name: "The Burger Shack",
      city: "1",
      slugs: {
        restaurant: "the-burger-shack-btm-btm",
      },
      cloudinaryImageId: "t3wg83xmxn0gd1uzqofj",
      locality: "N.S. Palya",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["American"],
      avgRating: 3.1,
      feeDetails: {
        restaurantId: "478708",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 51,
        minDeliveryTime: 51,
        maxDeliveryTime: 51,
        serviceability: "SERVICEABLE",
        slaString: "51 MINS",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "483491",
      name: "Singh Ji Food",
      city: "1",
      slugs: {
        restaurant: "singh-ji-food-btm-btm",
      },
      cloudinaryImageId: "najxprbevlc9qa1pt2vb",
      locality: "N.S. Palya",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "483491",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "34 MINS",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "356501",
      name: "What A Food",
      city: "1",
      slugs: {
        restaurant: "what-a-food-btm-btm",
      },
      cloudinaryImageId: "ig3p6e2n9o9zc8yzsogo",
      locality: "Basappa Layout",
      areaName: "Btm Layout",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "356501",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        serviceability: "SERVICEABLE",
        slaString: "28 MINS",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 08:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "60068",
      name: "RK Fresh Food",
      city: "1",
      slugs: {
        restaurant: "rk-fresh-food-btm-btm",
      },
      cloudinaryImageId: "vbemgekpc7zo8phbm4qd",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: [
        "Continental",
        "American",
        "Desserts",
        "Italian",
        "Mexican",
        "Beverages",
      ],
      avgRating: 3.2,
      feeDetails: {
        restaurantId: "60068",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "151430",
      name: "Midnight Pizza And Food",
      city: "1",
      slugs: {
        restaurant: "midnight-pizza-and-food-na-indiranagar",
      },
      cloudinaryImageId: "wddl5pxgtgqfs6xdlnhx",
      locality: "1st Stage",
      areaName: "Indiranagar",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Chinese"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "151430",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        serviceability: "SERVICEABLE",
        slaString: "48 MINS",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 07:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "281223",
      name: "The Paratha House",
      city: "1",
      slugs: {
        restaurant: "the-paratha-house-btm-btm",
      },
      cloudinaryImageId: "chvd2xk3q2paaft507mv",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "281223",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "35 MINS",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "691815",
      name: "The Curry House",
      city: "1",
      slugs: {
        restaurant: "the-curry-house-btm-btm",
      },
      cloudinaryImageId: "c3b5c5f83065a6ca7afe44e13dedb37c",
      locality: "1st Stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "691815",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "7",
      sla: {
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        serviceability: "SERVICEABLE",
        slaString: "32 MINS",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "71042",
      name: "NEW Mahesh friends food center",
      city: "1",
      slugs: {
        restaurant:
          "mahesh-friends-food-center-13th-a-main-ns-palya-btm-layout-2nd-stage-btm",
      },
      cloudinaryImageId: "w2rjn1jnaz4obj2nexaq",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian"],
      avgRating: 3.4,
      feeDetails: {
        restaurantId: "71042",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        serviceability: "SERVICEABLE",
        slaString: "29 MINS",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "289641",
      name: "Raw food & juice junction",
      city: "1",
      slugs: {
        restaurant: "raw-food-&-juice-junction-btm-btm",
      },
      cloudinaryImageId: "zs1j7zihsrlpjeoddv4d",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Indian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "289641",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "35 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:59:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "405430",
      name: "Apna Ghar",
      city: "1",
      slugs: {
        restaurant: "apna-ghar-basavanagudi-basavanagudi",
      },
      cloudinaryImageId: "rbhkkgsp8nd9ocdi4f0r",
      locality: "Lakshmisha Road",
      areaName: "Jayanagar",
      costForTwo: "₹200 for two",
      cuisines: ["Punjabi", "North Indian", "Thalis"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "405430",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        serviceability: "SERVICEABLE",
        slaString: "20 MINS",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "609510",
      name: "Lassi Shop",
      city: "1",
      slugs: {
        restaurant: "lassi-shop-banashankari-banashankari-4",
      },
      cloudinaryImageId: "bvsp0vi4tevy71qo9rpp",
      locality: "3rd Stage",
      areaName: "Banashankari",
      costForTwo: "₹190 for two",
      cuisines: ["Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "609510",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        serviceability: "SERVICEABLE",
        slaString: "26 MINS",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-31 05:01:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "495463",
      name: "Sardar Ji Di Rasoi",
      city: "1",
      slugs: {
        restaurant: "sardarji-di-rasoi-btm-btm",
      },
      cloudinaryImageId: "dl1j4bty5vrt1r5gdlfx",
      locality: "1st Stage",
      areaName: "Btm Layout",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian", "Snacks", "Thalis"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "495463",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        serviceability: "SERVICEABLE",
        slaString: "38 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-31 05:01:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "334172",
      name: "Rajasthani Dhaba",
      city: "1",
      slugs: {
        restaurant: "rajasthani-dhaba-shantinagar-shantinagar",
      },
      cloudinaryImageId: "w85ed8ajt45iitzrfvih",
      locality: "Lakshmi road",
      areaName: "Shanthi Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Rajasthani", "Snacks", "Chaat"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "334172",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        serviceability: "SERVICEABLE",
        slaString: "23 MINS",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "763063",
      name: "Tandoori Nights",
      city: "1",
      slugs: {
        restaurant: "tandoori-nights-hsr-hsr",
      },
      cloudinaryImageId: "d4eb7e534d869d892212137d548c1cea",
      locality: "Sector 6",
      areaName: "HSR",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Biryani", "Tandoor"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "763063",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        serviceability: "SERVICEABLE",
        slaString: "32 MINS",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 06:30:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "677736",
      name: "Toasted Delight",
      city: "1",
      slugs: {
        restaurant: "toasted-delight-btm-btm",
      },
      cloudinaryImageId: "3c040daf5ba62b7869ad84868cc0c726",
      locality: "Bannerghatta Main Road",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Indian", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "677736",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        serviceability: "SERVICEABLE",
        slaString: "31 MINS",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "702130",
      name: "Bombay Burgers",
      city: "1",
      slugs: {
        restaurant: "bombay-burger's-indiranagar-indiranagar",
      },
      cloudinaryImageId: "e230317f0b669033935ee35ceb4592ef",
      locality: "Shanthinagara",
      areaName: "Indiranagar",
      costForTwo: "₹800 for two",
      cuisines: ["Burgers", "Snacks", "Chinese", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "702130",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        serviceability: "SERVICEABLE",
        slaString: "31 MINS",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "653780",
      name: "Baba Ka Khana",
      city: "1",
      slugs: {
        restaurant: "baba-ka-khana-btm-btm",
      },
      cloudinaryImageId: "ad9889526b806a5405e81b7cb0a943ab",
      locality: "Opp to Alliance university BTM 2nd stage ",
      areaName: "17TH C CROSS",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Snacks"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "653780",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 08:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "734177",
      name: "ANIKA TIFFIN",
      city: "1",
      slugs: {
        restaurant: "anika-tiffin-btm-btm",
      },
      cloudinaryImageId: "39e0ac9e01e139dd8c50aa35fddead14",
      locality: "Outer Ring Rd",
      areaName: "BTM",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Thalis", "Chaat"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "734177",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "5",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "34 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-31 05:01:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "758588",
      name: "Patliputra Rasoi",
      city: "1",
      slugs: {
        restaurant: "patliputra-rasoi-btm-btm",
      },
      cloudinaryImageId: "aba45375462798eb6c7727b639f893db",
      locality: "Keb Colony",
      areaName: "BTM",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Thalis", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "758588",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        serviceability: "SERVICEABLE",
        slaString: "39 MINS",
        lastMileTravelString: "8.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "690967",
      name: "Sassy Grub Box",
      city: "1",
      slugs: {
        restaurant: "sassy-grub-box-btm-btm",
      },
      cloudinaryImageId: "fe7534f0c12d29ccda1ef6cab63d2cc4",
      locality: "1st Stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Fast Food", "Beverages", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "690967",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "9",
      sla: {
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 MINS",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "376169",
      name: "Shri Nellore Mess",
      city: "1",
      slugs: {
        restaurant: "nawabis-biryani-hub-ramamurthy-nagar-ramamurthy-nagar",
      },
      cloudinaryImageId: "ykl4mebbivljv5zdfliu",
      locality: "3rd Block HRBR Layout",
      areaName: "Kalyan Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Biryani"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "376169",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        serviceability: "SERVICEABLE",
        slaString: "24 MINS",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:30:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "232301",
      name: "Mamata Biryani House",
      city: "1",
      slugs: {
        restaurant: "mamata-biryani-house-btm-btm",
      },
      cloudinaryImageId: "rgluoqssugmn8mxmwspt",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Beverages", "Chinese", "Pan-Asian", "Indian", "Mughlai"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "232301",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        serviceability: "SERVICEABLE",
        slaString: "37 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "353607",
      name: "Delhi Dinner Darbar",
      city: "1",
      slugs: {
        restaurant:
          "delhi-dinner-darbar-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road",
      },
      cloudinaryImageId: "srqgbpximovai2z18sv9",
      locality: "M S R Nagar",
      areaName: "Mathikere",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "353607",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "34 MINS",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 07:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "298791",
      name: "Kabab Biryani Corner",
      city: "1",
      slugs: {
        restaurant: "kabab-biryani-corner-central-bangalore-central-bangalore",
      },
      cloudinaryImageId: "hkf5yjlbrwsyk6fafo4g",
      locality: "Vivek Nagar",
      areaName: "Richmond Road",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Tandoor", "Chinese"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "298791",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        serviceability: "SERVICEABLE",
        slaString: "26 MINS",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "337989",
      name: "Alba Cafe",
      city: "1",
      slugs: {
        restaurant:
          "alba-cafe-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
      },
      cloudinaryImageId: "svnpd8ubijyh3nwllsa2",
      locality: "HRBR Layout",
      areaName: "Kalyan Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "337989",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        serviceability: "SERVICEABLE",
        slaString: "29 MINS",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:30:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "763271",
      name: "Indian Spice",
      city: "1",
      slugs: {
        restaurant: "indian-spice-hsr-hsr",
      },
      cloudinaryImageId: "e565c4ad2e3450129c54c8d333557bdc",
      locality: "HSR Layout",
      areaName: "HSR",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "763271",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "8",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 06:30:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "381540",
      name: "Gulshan Ka Dhaba",
      city: "1",
      slugs: {
        restaurant: "gulshan-ka-dhaba-btm-btm",
      },
      cloudinaryImageId: "y00mrt0o2s7av8kedenc",
      locality: "1st  Stage",
      areaName: "Btm Layout",
      costForTwo: "₹150 for two",
      cuisines: ["Indian"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "381540",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        serviceability: "SERVICEABLE",
        slaString: "31 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "752587",
      name: "ATM Amritsari Tadke Mein",
      city: "1",
      slugs: {
        restaurant: "atm-amritsaritadkemein-btm-btm",
      },
      cloudinaryImageId: "30eca6a87bea337b472635d97482cca8",
      locality: "Near Chai Sutta Bar",
      areaName: "BTM 2nd Stage",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Thalis"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "752587",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "35 MINS",
        lastMileTravelString: "8.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "₹250 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "336404",
      name: "BIRYANI FLAVOUR HOUSE",
      city: "1",
      slugs: {
        restaurant: "biryani-flavour-house-koramangala-koramangala",
      },
      cloudinaryImageId: "lgmgvwb4ym0n20im3cpg",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "336404",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 63,
        minDeliveryTime: 63,
        maxDeliveryTime: 63,
        serviceability: "SERVICEABLE",
        slaString: "63 MINS",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "358179",
      name: "Foodeez zone",
      city: "1",
      slugs: {
        restaurant: "foodeez-zone-r.t.-nagar-r.t.-nagar",
      },
      cloudinaryImageId: "l3ryt8ecje8gwsrbaokh",
      locality: "M S R Nagar",
      areaName: "New BEL Road",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "358179",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        serviceability: "SERVICEABLE",
        slaString: "37 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 07:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "343489",
      name: "Red Hot Chilly Pepper",
      city: "1",
      slugs: {
        restaurant: "red-hot-chilly-pepper-koramangala-koramangala",
      },
      cloudinaryImageId: "kbxolufx7q9vucpdsw6w",
      locality: "4th Block",
      areaName: "Bommanahalli",
      costForTwo: "₹280 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 2.4,
      feeDetails: {
        restaurantId: "343489",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "34 MINS",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "515983",
      name: "Punjab Kitchen",
      city: "1",
      slugs: {
        restaurant: "punjab-kitchen-btm-btm",
      },
      cloudinaryImageId: "siqdm0h2orkg6jcgmqdc",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "515983",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        serviceability: "SERVICEABLE",
        slaString: "37 MINS",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 09:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "789317",
      name: "Southern Bhavan",
      city: "1",
      slugs: {
        restaurant: "southern-bhavan-jp-nagar-jp-nagar",
      },
      cloudinaryImageId: "bfcea2108aea7a98f2b370b78b2fdac0",
      locality: "Bangalore City",
      areaName: "JP Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "789317",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "3",
      sla: {
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        serviceability: "SERVICEABLE",
        slaString: "29 MINS",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "650683",
      name: "Paratha Of Punjab",
      city: "1",
      slugs: {
        restaurant: "paratha-of-punjab-btm-btm",
      },
      cloudinaryImageId: "352244c7e4ff40b6586851a0d1d6534a",
      locality: "Manjunath HP Gas Agency",
      areaName: "BTM 2 Stage",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages", "Snacks"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "650683",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        serviceability: "SERVICEABLE",
        slaString: "36 MINS",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 09:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "40100",
      name: "Ghar Ki Rasoi",
      city: "1",
      slugs: {
        restaurant: "ghar-ki-rasoi-indiranagar-indiranagar",
      },
      cloudinaryImageId: "rkfuvccoxys5wtjjmqb9",
      locality: "1st Stage",
      areaName: "Indiranagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Italian", "North Indian"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "40100",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        serviceability: "SERVICEABLE",
        slaString: "31 MINS",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹900",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "476175",
      name: "Heritage Burger",
      city: "1",
      slugs: {
        restaurant: "heritage-burger-btm-btm",
      },
      cloudinaryImageId: "pdccrtgldvuxmbtqkkne",
      locality: "N.S. Palya",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: [
        "American",
        "Fast Food",
        "Italian",
        "Street Food",
        "Beverages",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "476175",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        serviceability: "SERVICEABLE",
        slaString: "48 MINS",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "110588",
      name: "Rana vada pav",
      city: "1",
      slugs: {
        restaurant: "rana-vada-pav-btm",
      },
      cloudinaryImageId: "ksqsbdkfclevkxhhrftr",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹100 for two",
      cuisines: ["Juices"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "110588",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        serviceability: "SERVICEABLE",
        slaString: "37 MINS",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 00:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "224634",
      name: "Udta Punjab Kitchen",
      city: "1",
      slugs: {
        restaurant: "udta-punjab-kitchen-btm-btm",
      },
      cloudinaryImageId: "tfzrwj4twwsdz4zmhmr7",
      locality: "1st Stage",
      areaName: "Btm Layout",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 3.4,
      feeDetails: {
        restaurantId: "224634",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        serviceability: "SERVICEABLE",
        slaString: "33 MINS",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-31 05:01:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
    },
    analytics: {},
    cta: {},
  },
];
// const resObj = [];

const RestaurantCard = (props) => {
  //Destructing of Object
  // console.log(props);
  const { resData } = props;
  // console.log(resData.info);
  // console.log(resData);
  const { cloudinaryImageId, cuisines, name, costForTwo, sla } = resData?.info;
  const { deliveryTime } = sla;
  // console.log(resData.info);
  // console.log(resData.info.cloudinaryImageId);
  // const { cuisine } = resData;

  // console.log(cuisine);
  // console.log(resData[0]);
  // console.log(resData.menu[0].name);
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
        alt="megna-food"
        className="res-logo"
      />
      <h3>{cuisines.join(", ")}</h3>
      <h4>{name}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((resObjData) => {
          // console.log(e.info);
          // console.log(resObjData.info.id);

          return (
            <RestaurantCard resData={resObjData} key={resObjData.info.id} />
          );
        })}
        {/* <RestaurantCard resData={resObj[0]} /> */}
        {/* <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
