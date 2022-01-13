import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchUsersList, fetchPostList, fetchAlbumsList} from "./store/api-actions";


const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchUsersList());
store.dispatch(fetchPostList());
store.dispatch(fetchAlbumsList());

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.querySelector(`#root`)
);
