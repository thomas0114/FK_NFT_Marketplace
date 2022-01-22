import * as TYPES from "./types";
// import * as psychicAPI from 'services/api-psychic'
import { getHttpWeb3Provider } from "../utils/web3Provider";
import { makeBatchCall } from "../utils/transaction";
import { NFT_ABI, NFT_MARKETPLACE_ABI } from "../utils/abi";
import { CONTRACTS } from "../utils/constants";
import { requestAPICall } from "../utils/helpers/apiService";

const getProducts =
  (search = "", page = "", refresh = false) =>
  async (dispatch, getState) => {
    try {
      const {
        product: { results = [] },
      } = getState();
      if (!refresh && results.length !== 0) {
        return;
      }

      const web3 = getHttpWeb3Provider();
      const contractInstance = new web3.eth.Contract(
        NFT_MARKETPLACE_ABI,
        CONTRACTS.MARKETPLACE
      );
      const nftInstance = new web3.eth.Contract(NFT_ABI, CONTRACTS.NFT);

      const [ids] = await makeBatchCall(contractInstance, [
        { methodName: "getNFTList", args: [] },
      ]);
      if (ids.length < 1) {
        return;
      }

      console.log("ids: ", ids);
      const tokenProducts = [];
      for (let i = 0; i < ids.length; i++) {
        const [product] = await makeBatchCall(contractInstance, [
          { methodName: "getNFTProdByTokenID", args: [ids[i]] },
        ]);
        const [tokenURI] = await makeBatchCall(nftInstance, [
          { methodName: "tokenURI", args: [ids[i]] },
        ]);
        tokenProducts.push({
          ...product,
          uri: tokenURI,
        });
      }

      const products = [];

      tokenProducts.forEach(async (item, i) => {
        const genesisIPFSData = await requestAPICall(item.uri).then((res) => {
          return res.data;
        });
        products.push({
          img: genesisIPFSData.image,
          title: genesisIPFSData.name,
          description: genesisIPFSData.description,
          price: item.price,
          quantity: item.quantity,
          isAuction: false,
        });
        if (i === tokenProducts.length - 1) {
          await dispatch({
            type: TYPES.FETCH_PRODUCTS,
            payload: products,
          });
        }
      });
    } catch (error) {
      console.log("[getProducts] error => ", error);
    }
  };

export default getProducts;
