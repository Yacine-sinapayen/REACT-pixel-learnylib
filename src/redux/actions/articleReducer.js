const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "LOADARTICLES": {
            return {
                ...state,
                article: action.payload
            }
        }
    }
    return state;
}
export default articleReducer;

export const getArticles = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
    .then(data => {
        dispatch({
            type: "LOADARTICLES",
            payload: data
        })
    })
}