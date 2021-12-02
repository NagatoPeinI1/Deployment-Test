const { ApiPromise, WsProvider }= require("@polkadot/api")

// ApiPromise.create({ provider: new WsProvider('wss://kusama-rpc.polkadot.io/') })
async function m(){
 const api = await ApiPromise.create({ provider: new WsProvider('wss://kusama-rpc.polkadot.io/') })
 await api.isReady
//  let res = await api.at("0x5dabc4070ad76ed7fecf05269c0f787c8a9d4a8adccad8443a73ab697c29b861").query.crowdloan.funds(2007);
//  let res = await api.at("0xa036539205445ef1c469ed51e8bfc03fbf3e1624f2b2c0296089f56288bf852d").query.staking;
const currentEra = (await api.query.staking);
// const data = await api.query.assets
// let resData = await api.consts.system.version;
// console.log(" currentEra :: ",currentEra)
//  let res = await api.query.crowdloan.funds.at("0x5dabc4070ad76ed7fecf05269c0f787c8a9d4a8adccad8443a73ab697c29b861",2007);
//  let res = await api.query.crowdloan.funds(2007);
 console.log(currentEra)
//  console.log(res.toJSON())
}
m()


// const axios = require("axios")
// const {AxiosRequestConfig} = require("axios")
// const axiosRetry = require('axios-retry');
// const { ApiPromise, WsProvider } = require("@polkadot/api")
// let api

// axiosRetry(axios, { retries: 5, retryDelay: axiosRetry.exponentialDelay});

// const PROVIDER = new WsProvider('wss://kusama-rpc.polkadot.io/');

// const apiService =  async () => {
//     if (api) return api;
//     api = await ApiPromise.create({ provider: PROVIDER })
//     return api
// }


// apiService()