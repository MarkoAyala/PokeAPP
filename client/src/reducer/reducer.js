const initialState = {
  pokemones: [],
  allPokemones: [], 
  estado: {
    type: "all",
    baseDeDatos: "all",
  },
  types: [],
  detail:[],
 
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemones: action.payload,
        allPokemones: action.payload,
      };
    case 'GET_NAME_POKEMON':
      return{
          ...state,
        pokemones: action.payload
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_DETAILS":
      if(action.payload === 'clear'){
        return {...state,detail:[]}
      } else {
        return{ ...state,
          detail: action.payload
        }
      }
    case "ORDER_BY_NAME":
      let arr;
      if (action.payload === "asc") {
        arr = state.pokemones.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (b.nombre > a.nombre) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "des") {
        arr = state.pokemones.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return -1;
          }
          if (b.nombre > a.nombre) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "attack") {
        arr = state.pokemones.sort(function (a, b) {
          if (a.ataque > b.ataque) {
            return -1;
          }
          if (b.ataque > a.ataque) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        pokemones: arr,
      };
    case "FILTER_BY_TYPE":
      const allPokemones1 = state.allPokemones;
      state.estado.type = action.payload;
      const filterType = allPokemones1.filter((e) => {
        if (state.estado.baseDeDatos === "all") {
          if (action.payload === "all") {
            return e;
          }
          if (e.tipes) {
            return e.tipes[0].tipo.includes(action.payload);
          }
          if (e.tipo) {
            return e.tipo.includes(action.payload);
          }
          return null;
        } else if (state.estado.baseDeDatos === "creado") {
          if (action.payload === "all") {
            if (e.creado) {
              return e;
            }
          }
          if (e.tipes) {
            return e.tipes[0].tipo.includes(action.payload);
          }
          return null;
        } else if (state.estado.baseDeDatos === "api") {
          if (action.payload === "all") {
            if (!e.creado) {
              return e;
            }
          }
          if (e.tipo) {
            return e.tipo.includes(action.payload);
          }
          return null;
        }
        return null;
      });
      return {
        ...state,
        pokemones: filterType, 
      };
    case "FILTER_CREATED":
      const allPokemones2 = state.allPokemones;
      state.estado.baseDeDatos = action.payload;
      const filter = allPokemones2.filter((e) => {
        if (state.estado.baseDeDatos === "all") {
          if (state.estado.type === "all") {
            return e;
          }
          if (e.tipes) {
            return e.tipes[0].tipo.includes(state.estado.type);
          }
          if (e.tipo) {
            return e.tipo.includes(state.estado.type);
          }
          return null;
        } else if (state.estado.baseDeDatos === "creado") {
          if (state.estado.type === "all") {
            if (e.tipes) {
              return e;
            }
          }
          if (e.tipes) {
            return e.tipes[0].tipo.includes(state.estado.type);
          }
        } else if (state.estado.baseDeDatos === "api") {
          if (state.estado.type === "all") {
            if (e.tipo) {
              return e;
            }
          }
          if (e.tipo) {
            return e.tipo.includes(state.estado.type);
          }
        }
        return null;
      });
      return {
        ...state,
        pokemones: filter,
      };
      case 'POST_POKEMON':
        return{
          ...state,
        }
      case 'DELETE_POKEMON':
        return{
          ...state
        }
    /*   case 'GET_ATACK':
        return{
          ...state,
          pokemones: action.payload
        } */
    default:
      return { ...state };
  }
}

export default rootReducer;
