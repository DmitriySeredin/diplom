import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: {
    jackets: [
      {
        id: nanoid(),
        name: "Темно-синий узкий пиджак Jack & Jones",
        url:
          "https://images.asos-media.com/groups/temno-sinij-uzkij-kostyum-iz-pererabotannogo-poliestera-jack-jones-premium/28145-group-1?$n_480w$&wid=476&fit=constrain",
        price: 11180,
      },
      {
        id: nanoid(),
        name: "Бордовый приталенный пиджак",
        url:
          "https://images.asos-media.com/products/bordovyj-pritalennyj-pidzhak-asos-design-wedding/13375902-1-burgundy?$n_480w$&wid=476&fit=constrain",
        price: 3990,
      },
      {
        id: nanoid(),
        name: "Темно-синий костюм скинни",
        url:
          "https://images.asos-media.com/products/temno-sinij-zauzhennyj-pidzhak-asos-design/12959738-1-navy?$n_480w$&wid=476&fit=constrain",
        price: 6200,
      },
      {
        id: nanoid(),
        name: "Черный облегающий пиджак-смокинг",
        url:
          "https://images.asos-media.com/products/chernyj-oblegayuschij-pidzhak-smoking-asos-design/14146566-1-black?$n_480w$&wid=476&fit=constrain",
        price: 7200,
      },
    ],
    pants: [
      {
        id: nanoid(),
        name: "Черные классические брюки Pull&Bear",
        url:
          "https://images.asos-media.com/products/chernye-klassicheski-bryuki-pullbear/21840886-1-black?$n_480w$&wid=476&fit=constrain",
        price: 2599,
      },
      {
        id: nanoid(),
        name: "Зеленые брюки Selected Homme",
        url:
          "https://images.asos-media.com/products/zelenye-bryuki-selected-homme/21549085-1-riflegreen?$n_480w$&wid=476&fit=constrain",
        price: 4790,
      },
      {
        id: nanoid(),
        name: "Серые брюки Jack&Jones",
        url:
          "https://images.asos-media.com/products/serye-bryuki-iz-sherstyanoj-tkani-s-risunkom-v-elochku-jack-jones-premium/20892786-1-darkgrey?$n_480w$&wid=476&fit=constrain",
        price: 4190,
      },
      {
        id: nanoid(),
        name: "Облегающие классические брюки",
        url:
          "https://images.asos-media.com/products/superoblegayuschie-klassicheskie-bryuki-iz-smesovoj-shersti-sinego-tsveta-v-melkuyu-kletku-asos-design/21029687-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 2890,
      },
    ],
    shirts: [
      {
        id: nanoid(),
        name: "Белая обтягивающая рубашка",
        url:
          "https://images.asos-media.com/products/belaya-obtyagivayuschaya-rubashka-river-island/10412719-1-white?$n_480w$&wid=476&fit=constrain",
        price: 990,
      },
      {
        id: nanoid(),
        name: "Белая эластичная рубашка",
        url:
          "https://images.asos-media.com/products/belaya-elastichnaya-rubashka-sdlinnymi-rukavami-topman/24112421-1-white?$n_480w$&wid=476&fit=constrain",
        price: 1690,
      },
      {
        id: nanoid(),
        name: "Черная рубашка Pull&Bear",
        url:
          "https://images.asos-media.com/products/chernaya-rubashka-s-vorotnikom-na-pugovitse-pullbear/23427553-1-black?$n_480w$&wid=476&fit=constrain",
        price: 1990,
      },
      {
        id: nanoid(),
        name: "Черная рубашка HUGO",
        url:
          "https://images.asos-media.com/products/chernaya-rubashka-hugo-ero3-w/23031136-1-black?$n_480w$&wid=476&fit=constrain",
        price: 7890,
      },
    ],
    cardigans: [
      {
        id: nanoid(),
        name: "Джемпер в полоску COLLUSION",
        url:
          "https://images.asos-media.com/products/vyazanyj-dzhemper-v-rubchik-s-korotkoj-molniej-i-poloskami-asos-design/22762357-1-black?$n_480w$&wid=476&fit=constrain",
        price: 2190,
      },
      {
        id: nanoid(),
        name: "Черный вязаный джемпер Fred Perry",
        url:
          "https://images.asos-media.com/products/chernyj-vyazanyj-dzhemper-v-polosku-fred-perry/22392762-1-black?$n_480w$&wid=476&fit=constrain",
        price: 7890,
      },
      {
        id: nanoid(),
        name: "Коричневый кардиган Pull&Bear",
        url:
          "https://images.asos-media.com/products/svetlo-korichnevyj-trikotazhnyj-kardigan-s-shalevym-vorotnikom-i-uzorom-kosy-asos-design/21440887-1-tan?$n_480w$&wid=476&fit=constrain",
        price: 1590,
      },
      {
        id: nanoid(),
        name: "Кардиган кремового цвета",
        url:
          "https://images.asos-media.com/products/kardigan-kremovogo-tsveta-asos-design/23777147-1-beige?$n_480w$&wid=476&fit=constrain",
        price: 2690,
      },
    ],
    spirit: [
      {
        id: nanoid(),
        name: "Черная рубашка с принтом",
        url:
          "https://images.asos-media.com/products/chernaya-rubashka-s-otlozhnym-vorotnikom-i-printom-topman/24112849-1-black?$n_480w$&wid=476&fit=constrain",
        price: 2390,
      },
      {
        id: nanoid(),
        name: "Светло - голубой приталенный пиджак",
        url:
          "https://images.asos-media.com/products/svetlo-goluboj-pritalennyj-odnobortnyj-pidzhak-iz-trikotazha-s-latskanami-s-razrezami-topman/24178370-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 4790,
      },
      {
        id: nanoid(),
        name: "Розовый трикотажный блейзер",
        url:
          "https://images.asos-media.com/products/rozovyj-trikotazhnyj-blejzer-uzkogo-kroya-s-latskanami-s-razrezom-topman/24178173-1-pink?$n_480w$&wid=476&fit=constrain",
        price: 4790,
      },
      {
        id: nanoid(),
        name: "Серый однобортный пиджак",
        url:
          "https://images.asos-media.com/products/seryj-odnobortnyj-pidzhak-zauzhennogo-kroya-s-latskanami-srazrezom-topman/24177804-1-grey?$n_480w$&wid=476&fit=constrain",
        price: 6190,
      },
    ],
    brand: [
      {
        id: nanoid(),
        name: "Черная куртка авиатор BARKLAND",
        url:
          "https://images.asos-media.com/products/chernaya-kurtka-aviator-iziskusstvennoj-ovchiny-topman/24161147-1-black?$n_480w$&wid=476&fit=constrain",
        price: 3390,
      },
      {
        id: nanoid(),
        name: "Серые зауженные брюки BARKLAND",
        url:
          "https://images.asos-media.com/products/serye-zauzhennye-bryuki-topman/24114988-1-grey?$n_480w$&wid=476&fit=constrain",
        price: 3390,
      },
      {
        id: nanoid(),
        name: "Приталенный черный пиджак - смокинг BARKLAND",
        url:
          "https://images.asos-media.com/products/pritalennyj-odnobortnyj-pidzhak-smoking-chernogo-tsveta-s-latskanami-srazrezami-topman/24114611-1-black?$n_480w$&wid=476&fit=constrain",
        price: 6190,
      },
      {
        id: nanoid(),
        name: "Серый приталенный однобортный пиджак BARKLAND",
        url:
          "https://images.asos-media.com/products/seryj-pritalennyj-odnobortnyj-pidzhak-s-latskanami-srazrezami-topman/24114605-1-grey?$n_480w$&wid=476&fit=constrain",
        price: 6190,
      },
    ],
  },
  favorite: [],
  basket: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFavoriteJacket: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.jackets.filter(
            (jacket) => jacket.id === action.payload
          )[0]
        );
      }
    },
    addFavoritePants: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.pants.filter((pant) => pant.id === action.payload)[0]
        );
      }
    },
    addFavoriteShirt: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.shirts.filter(
            (shirt) => shirt.id === action.payload
          )[0]
        );
      }
    },
    addFavoriteCardigan: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.cardigans.filter(
            (cardigan) => cardigan.id === action.payload
          )[0]
        );
      }
    },
    addFavoriteSpirit: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.spirit.filter(
            (spirt) => spirt.id === action.payload
          )[0]
        );
      }
    },
    addFavoriteBrand: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.products.brand.filter((bran) => bran.id === action.payload)[0]
        );
      }
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
    buyJacket: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.jackets.filter(
            (jacket) => jacket.id === action.payload
          )[0]
        );
      }
    },
    buyPants: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.pants.filter((pant) => pant.id === action.payload)[0]
        );
      }
    },
    buyShirt: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.shirts.filter(
            (shirt) => shirt.id === action.payload
          )[0]
        );
      }
    },
    buyCardigan: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.cardigans.filter(
            (cardigan) => cardigan.id === action.payload
          )[0]
        );
      }
    },
    buySpirit: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.spirit.filter(
            (spirt) => spirt.id === action.payload
          )[0]
        );
      }
    },
    buyBrand: (state, action) => {
      if (
        state.basket.includes(
          state.basket.filter((item) => item.id === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.basket.push(
          state.products.brand.filter((bran) => bran.id === action.payload)[0]
        );
      }
    },
    removeBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  addFavoriteJacket,
  addFavoritePants,
  addFavoriteShirt,
  addFavoriteCardigan,
  addFavoriteSpirit,
  addFavoriteBrand,
  removeFavorite,
  buyJacket,
  buyPants,
  buyShirt,
  buyCardigan,
  buySpirit,
  buyBrand,
  removeBasket,
  clearBasket,
} = productsSlice.actions;

export const selectJacket = (state) => state.products.products.jackets;
export const selectPants = (state) => state.products.products.pants;
export const selectShirt = (state) => state.products.products.shirts;
export const selectCardigan = (state) => state.products.products.cardigans;
export const selectSpirit = (state) => state.products.products.spirit;
export const selectBrand = (state) => state.products.products.brand;
export const selectFavorite = (state) => state.products.favorite;
export const selectBasket = (state) => state.products.basket;

export default productsSlice.reducer;
