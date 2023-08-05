const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbUtgMZeuWSzcAagt52KXe5o2DGaUba-24dvKp6BDdkUnm860eAZnBmL3_mH_m2Hyjng&usqp=CAU";

export const CART_LOGO_URL =
  "data:image/png;base64,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";

export const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1429916&lng=79.0871102&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1429916&lng=79.0871102&restaurantId=";

export default CDN_URL;
