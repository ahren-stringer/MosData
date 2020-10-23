const SET_INFO_DATA='infoReuser/SET-INFO-DATA';

let init={
    infoData:null,
};

const infoReduser=(state=init,action)=>{

    switch(action.type){
        case SET_INFO_DATA:
            return {...state, infoData:action.infoData}
        default:
            return state
    }
}

export const setInfoData=(infoData)=>({type:SET_INFO_DATA, infoData});

export default infoReduser