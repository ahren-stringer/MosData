const SET_INFO_DATA = 'infoReuser/SET-INFO-DATA';
const SET_FEATURES = 'infoReuser/SET-FEATURES';

let init = {
    infoData: null,
    features: null,
};

const infoReduser = (state = init, action) => {

    switch (action.type) {
        case SET_INFO_DATA:
            return { ...state, infoData: action.infoData }
        case SET_FEATURES:
            return { ...state, features: action.features }
        default:
            return state
    }
}

export const setInfoData = (infoData) => ({ type: SET_INFO_DATA, infoData });
export const setFeatures = (features) => ({ type: SET_FEATURES, features });

export default infoReduser