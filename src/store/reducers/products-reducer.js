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
  },
  favorite: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(
        state.products.jackets.filter(
          (jacket) => jacket.id === action.payload
        )[0]
      );
    },
  },
});

export const { addFavorite } = productsSlice.actions;

export const selectProduct = (state) => state.products.products.jackets;

export default productsSlice.reducer;
