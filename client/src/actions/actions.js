import axios from 'axios';

export function getPokemones(){
    return function(dispatch){
        axios('http://localhost:3000/pokemons').then(res => {
            return dispatch({
            type: 'GET_POKEMONS',
            payload: res.data
        })})
        .catch(error => console.log(error))
    }
}
  
export function getNamePokemon(payload){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3000/pokemons?name=${payload}`);
            console.log(json.data)
            return dispatch({
                type: 'GET_NAME_POKEMON',
                payload: json.data
            })
        } catch(error){
            console.log('error en GET_NAME_POKEMON',error);
        }
    }
}
export function getTypes(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3000/types');
        return dispatch({
            type: 'GET_TYPES',
            payload:json.data
        })
    }
}

export function filterByType(payload){
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export function filterCreatedDB(payload){
    return {
        type:'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return {
        type:'ORDER_BY_NAME',
        payload
    }
}

export function postPokemon(payload){
    return async function (dispatch){
        let json = await axios.post('http://localhost:3000/pokemons', payload);
        return json;
    }
}

export function getDetail(id){
    return async function (dispatch){
        if(id === 'clear'){
            dispatch({type:'GET_DETAILS', payload:'clear'})
        }else{
            try{
                let json= await axios.get(`http://localhost:3000/pokemons/${id}`);
                return dispatch({
                    type:'GET_DETAILS',
                    payload : json.data
                })
            }catch(err){
                console.log(err)
            }
        }
        
    }
}



export function deletePokemon(id){
    return async function(dispatch){
        await axios.delete(`http://localhost:3000/pokemons/${id}`)
        return dispatch({
            type: 'DELETE_POKEMON',
            payload : id
        })
    }
}

//filtro desde el back
/* export function getPokemonesXAtack(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3000/pokemons/abc/order');
        return dispatch({
            type: 'GET_ATACK',
            payload: json.data
        })
    }
}
 */

