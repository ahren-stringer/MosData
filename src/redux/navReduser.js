const SET_NAV_DATA='navReuser/SET-NAV-DATA';

let init={
    navData:null,
};

const navReduser=(state=init,action)=>{
    switch(action.type){
        case SET_NAV_DATA:
            return {...state, navData:action.navData}
        default:
            return state
    }
}

export const setNavData=(navData)=>({type:SET_NAV_DATA, navData});

export default navReduser