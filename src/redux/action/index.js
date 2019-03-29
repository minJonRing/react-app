const REFRESH = "refresh";
const EDITUSER = "edituser";
const SHOP = "shop";
const init = {
    isRe:false,
    user:{},
    shop:[],
}

const refresh = {
    type: 'refresh',
}
const edituser = {
    type: 'edituser'
}

const shop = {
    type: 'shop'
}

const data = {
    init:init,
    refresh:refresh,
    edituser:edituser,
    shop:shop,
    typeRe:REFRESH,
    typeUser:EDITUSER,
    typeShop:SHOP
}
export default data;