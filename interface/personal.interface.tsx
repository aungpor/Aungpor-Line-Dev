export interface IFavoriteFood {
  favorite_food_id: string;
  favorite_food_name: string;
  favorite_food_image: string;
  favorite_food_order: string;
  active: string;
}

export interface IAllergyFood {
  allergy_food_id: string;
  allergy_food_name: string;
  allergy_food_image: string;
  allergy_food_order: string;
  active: string;
}

export interface IFavoriteTravel {
  travel_category_id: string;
  travel_category_name: string;
  img_fav_category: string;
  show_main_page_order_no: number;
  active: string;
}

export interface ICompanionTravel {
  traveling_companion_id: string;
  traveling_companion_name: string;
  img_fav_companion: string;
  order_no: number;
  active: string;
}
