import React, { useEffect, useState, useMemo, useRef } from "react";
import { useHistory } from "react-router";
import { MdImage } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Box, TextField, Modal } from "@material-ui/core";
import styled from "styled-components";
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { create } from 'ipfs-http-client';

import small_duke from "../../images/small_duke1.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import Btn_Customize from "../../components/buttons/btn_container";
import { lightTheme, darkTheme } from "../../theme/theme";
import { NFT_ABI, NFT_MARKETPLACE_ABI, NFT_AUCTION_ABI } from '../../utils/abi';
import { CONTRACTS } from '../../utils/constants';

const Create_NFT = ({ ctheme }) => {
  const { account, library, chainId } = useWeb3React()
  const history = useHistory();
  const client = create('https://ipfs.infura.io:5001/api/v0')
  const [toggle1, set_toggle1] = useState(false);
  const [toggle2, set_toggle2] = useState(true);
  const [flag_down1, set_down1] = useState(false);
  const [flag_down2, set_down2] = useState(true);
  const [supply, set_supply] = useState(0);
  const [type_trans, set_trans] = useState(false);
  const [choose, set_choose] = useState("Choose Collection");
  const [image_file, set_image] = useState("");
  const [image_file1, set_image1] = useState("");
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");
  const [image_url, set_url] = useState("");
  const [hash, set_hash] = useState("");
  const [price_type, set_price_type] = useState({
    duke: true,
    fast: false,
    bnb: false,
  });
  const [process, set_process] = useState("Processing...");
  const [process1, set_process1] = useState("Processing...");

  const nftContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.NFT, NFT_ABI, library.getSigner()) : null, [library])
  const marketplaceContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.MARKETPLACE, NFT_MARKETPLACE_ABI, library.getSigner()) : null, [library])
  const auctionContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.AUCTION_HALL, NFT_AUCTION_ABI, library.getSigner()) : null, [library])

  const [price, set_price] = useState({
    duke: 0,
    fast: 0,
    bnb: 0
  })
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: 250,
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    backgroundColor: '#2BA55D',
    border: 'none',
    display: "flex",
    flexDirection: 'column',
  };
  // const Web3 = require("web3");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const upload_image = async () => {
    let file = image_file;
    try {
      // activate(walletConnectors['MetaMask']);
      let added = await client.add(file)
      let url = `https://ipfs.io/ipfs/${added.path}`
      set_url(url);
      set_hash(added.path);
      console.log(added.path)
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  const upload_ipfs = async () => {

    if (account === undefined) {
      alert("Please connect wallet");
      return;
    }
    else {
      setOpen(true);
      const dict = {
        "name": name,
        "description": description,
        "image": image_url,
      };
      console.log("123")  
      const hash = await client.add(JSON.stringify(dict))
      // let contract = new window.web3.eth.Contract(NFT_ABI, CONTRACTS.NFT)
      // let start_price = 0, end_price = 100000, duration = 10;

      console.log(hash, account)
      const createNFT = await marketplaceContract.createNewProduction(hash.path, 1)
      await createNFT.wait()
      const nftIDs = await marketplaceContract.getNFTIDsByHash(hash.path)
      // tokenid = await contract.methods.mint(accounts[0], added1.path).send({ from: accounts[0] })
      //   .then(async (res) => {
      //     console.log(res);
      //     //setOpen(false);
      //     set_process("Created!");
      //   });
      console.log("here", nftIDs)

      let price1;
      let pay_method;
      // if (toggle1 === true) {
      //   if (type_trans === false) {
      //     let contract_auction = new window.web3.eth.Contract(NFT_AUCTION_ABI, CONTRACTS.AUCTION_HALL)
      //     await contract_auction.methods.createAuction(tokenid, start_price, end_price, pay_method, duration, accounts[0]).send({ from: accounts[0] }).then(async (res) => {
      //       set_process1("Created successfully.");
      //       setTimeout(() => {
      //         handleClose();
      //       }, 2000);
      //       history.push({ pathname: "/" });
      //     }).catch((error) => {
      //       set_process1("Fault! Try again.");
      //       setTimeout(() => {
      //         handleClose();
      //       }, 2000);
      //     });
      //   }
      //   else {
      //     // let t = Math.floor(value_faith).toString(16);
      //     if (price_type.duke === true) {
      //       pay_method = "DUKE"
      //       price1 = (price.duke * Math.pow(10, 9)).toString(16);

      //     }
      //     if (price_type.fast === true) {
      //       pay_method = "FAST"
      //       price1 = (price.fast * Math.pow(10, 18)).toString(16);
      //     }
      //     if (price_type.bnb === true) {
      //       pay_method = "BNB"
      //       price1 = (price.bnb * Math.pow(10, 18)).toString(16);
      //     }
      //     let price_wei = "0x" + price1;
      //     let contract1 = new window.web3.eth.Contract(NFT_MARKETPLACE_ABI, CONTRACTS.MARKETPLACE)
      //     const [ids] = await makeBatchCall(contract1, [
      //       { methodName: "getNFTList", args: [] },
      //     ]);
      //     console.log(ids)
      //     await contract1.methods.registerForSale(ids[ids.length - 1], price_wei, hash, pay_method).send({ from: accounts[0] }).then(async (res) => {

      //       set_process1("Created successfully.");
      //       setTimeout(() => {
      //         handleClose();
      //       }, 2000);
      //       history.push({ pathname: "/" });


      //     }).catch((error) => {
      //       set_process1("Fault! Try again.");
      //       setTimeout(() => {
      //         handleClose();
      //       }, 2000);

      //     });
      //   }

      // }
    }

  };

  return (
    <StyledContainer
      ctheme={ctheme ? 1 : 0}
      ltheme={lightTheme}
      dtheme={darkTheme}
    >
      <Header1>
        <Header1_space
          display="flex"
          flex="1"
          justifyContent="space-between"
          marginLeft="20%"
          marginRight="20%"
        >
          <HLetter>Overview</HLetter>
          <HLetter>Explore</HLetter>
          <HLetter>Rankings</HLetter>
          <HLetter>Activities</HLetter>
          <HLetter>Manage</HLetter>
        </Header1_space>
      </Header1>
      <Box
        display="flex"
        marginTop="5%"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          width="60%"
          fontFamily="Poppins, sans-serif"
          fontWeight="bold"
          fontSize="34px"
          lineHeight="34px"
          letterSpacing="0.5"
          color="black"
        >
          Create NFT
        </Box>
        <Box display="flex" width="60%" flexDirection="column" marginTop="8%">
          <Box
            display="flex"
            width="100%"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="20px"
            lineHeight="20px"
            letterSpacing="0.5"
            color="black"
          >
            Image, Video, 3D model or Audio
          </Box>
          <Box
            display="flex"
            width="100%"
            fontFamily="Poppins, sans-serif"
            fontWeight="normal"
            fontSize="12px"
            lineHeight="12px"
            letterSpacing="0.5"
            color="#757B75"
            marginTop="2%"
          >
            JPEG, PNG, SVG, GIF, WEBP, MP4, GLB, GLFT, MP3, WAV, OGG. Max 100mb.{" "}
          </Box>
          <Loadimg
            display="flex"
            width="50%"
            height="365px"
            borderRadius="16px"
            border="4px dashed #757B75"
            marginTop="2%"
            justifyContent="center"
            alignItems="center"
            image_file={image_file1}
          >
            {/* <MdImage fontSize="140px" color="#CECECE"></MdImage> */}
            <input
              type="file"
              onChange={(e) => {
                set_image1(URL.createObjectURL(e.target.files[0]));
                set_image(e.target.files[0]);
                upload_image();
              }}
            />
            {/* <img src={image_file}></img> */}
          </Loadimg>
        </Box>

        <Box
          display="flex"
          width="60%"
          marginTop="5%"
          fontFamily="Poppins, sans-serif"
          fontSize="20px"
          lineHeight="20px"
          fontWeight="600"
          letterSpacing="0.5"
          color="black"
        >
          Name
        </Box>
        <Box display="flex" width="60%" marginTop="1%">
          <Box
            width="100%"
            component="input"
            placeholder="Item Name"
            borderRadius="8px"
            height="40px"
            paddingLeft="3%"
            style={{
              border: "1px solid #CECECE",
            }} onChange={(e) => {
              set_name(e.target.value);
            }}
            value={name}
          ></Box>
        </Box>
        <Box
          display="flex"
          width="60%"
          marginTop="5%"
          fontFamily="Poppins, sans-serif"
          fontSize="20px"
          lineHeight="20px"
          fontWeight="600"
          letterSpacing="0.5"
          color="black"
        >
          Description
        </Box>
        <Box
          display="flex"
          width="60%"
          marginTop="1%"
          fontFamily="Poppins, sans-serif"
          fontSize="12px"
          lineHeight="12px"
          fontWeight="normal"
          letterSpacing="0.5"
          color="#757B75"

        >
          Displayed on the item page
        </Box>
        <Box display="flex" width="60%" marginTop="1%">
          <TextField
            id="outlined-basic"
            label="Provide a detailed description of the item"
            variant="outlined"
            style={{
              width: "100%",
              //   border: "1px solid #CECECE",
              //   borderRadius: "8px",
              //   paddingLeft: "3%",
              //   paddingTop: "1%",
              //   paddingRight: "3%",
              //   paddingBottom: "1%",
            }}
            multiline
            rows={4}
            placeholder="Provide a detailed description of the item"
            onChange={(e) => {
              set_description(e.target.value);
            }}
            value={description}
          />
        </Box>
        <Box
          display="flex"
          width="60%"
          marginTop="1%"
          fontFamily="Poppins, sans-serif"
          fontSize="12px"
          lineHeight="12px"
          fontWeight="normal"
          letterSpacing="0.5"
          color="#757B75"
          justifyContent="flex-end"
        >
          0 Character of 1000 maximum
        </Box>
        <Box display="flex" width="60%" marginTop="5%">
          <Box display="flex" flex="1" flexDirection="column">
            <Box
              display="flex"
              width="60%"
              marginTop="5%"
              fontFamily="Poppins, sans-serif"
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5"
              color="black"
            >
              Put on marketplace?
            </Box>
            <Box
              display="flex"
              width="60%"
              marginTop="1%"
              fontFamily="Poppins, sans-serif"
              fontSize="12px"
              lineHeight="12px"
              fontWeight="normal"
              letterSpacing="0.5"
              color="#757B75"
            >
              Your item will be on Sale
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            justifyContent="flex-end"
            alignItems="flex-end"
            onClick={() => {
              set_toggle1(!toggle1);
            }}
          >
            <Box
              display="flex"
              width="40px"
              height="20px"
              borderRadius="50px"
              bgcolor={toggle1 ? "#2BA55D" : "#757B75"}
              alignItems="center"
            >
              {toggle1 ? (
                <Box display="flex" width="100%" justifyContent="flex-end">
                  <Box
                    display="flex"
                    width="17px"
                    height="17px"
                    bgcolor="white"
                    borderRadius="100%"
                    marginRight="3%"
                  ></Box>
                </Box>
              ) : (
                <Box display="flex" width="100%" justifyContent="flex-start">
                  <Box
                    width="17px"
                    height="17px"
                    bgcolor="white"
                    borderRadius="100%"
                    marginLeft="3%"
                  ></Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        {toggle1 ? (
          <>
            <Box
              display="flex"
              width="60%"
              marginTop="5%"
              fontFamily="Poppins, sans-serif"
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5"
              color="black"
            >
              Supply
            </Box>
            <Box
              display="flex"
              width="60%"
              marginTop="1%"
              fontFamily="Poppins, sans-serif"
              fontSize="12px"
              lineHeight="12px"
              fontWeight="normal"
              letterSpacing="0.5"
              color="#757B75"
            >
              The number of copies that can be minted
            </Box>
            <Box display="flex" width="60%" marginTop="1%">
              <Box
                display="flex"
                width="40%"
                border="1px solid #CECECE"
                borderRadius="8px"
                height="40px"
              >
                <PMbtn
                  display="flex"
                  flex="1"
                  borderRight="1px solid #CECECE"
                  onClick={() => {
                    var temp = supply;
                    temp -= 1;
                    set_supply(temp);
                  }}
                >
                  -
                </PMbtn>
                <Box
                  display="flex"
                  flex="2"
                  fontSize="16px"
                  fontWeight="600"
                  color="black"
                  alignItems="center"
                  justifyContent="center"
                >
                  {supply}
                </Box>
                <PMbtn
                  display="flex"
                  flex="1"
                  borderLeft="1px solid #CECECE"
                  onClick={() => {
                    var temp = supply;
                    temp += 1;
                    set_supply(temp);
                  }}
                >
                  +
                </PMbtn>
              </Box>
            </Box>
            <Letterdis1>Transaction</Letterdis1>
            <Letterdis2>Choose type</Letterdis2>
            <Box display="flex" width="60%" marginTop="1%">
              <Transbut1
                marginRight="1%"
                onClick={() => {
                  set_trans(false);
                }}
              >
                Auction
              </Transbut1>
              <Transbut1
                marginLeft="1%"
                onClick={() => {
                  set_trans(true);
                }}

              // border={!type_trans?"3px solid #237745 !important":''}
              >
                Fixed Price
              </Transbut1>
            </Box>
            <Box display="flex" width="60%" marginTop="1%">
              <Downletter1>Buyers make bids on your collectible</Downletter1>
              <Downletter1>Collectible can be instantly purchased </Downletter1>
            </Box>
            {type_trans === false ? (
              <>
                <Letterdis1>Reserve Price</Letterdis1>
                <Letterdis2>
                  Minimum Price per copies that must be met to conclude sale
                </Letterdis2>
              </>
            ) : (
              <>
                <Letterdis1>Price</Letterdis1>
                <Letterdis2>Price per item copies</Letterdis2>
              </>
            )}

            <Box display="flex" width="60%" marginTop="1%">
              <Box
                display="flex"
                flex="1"
                borderRadius="8px"
                height="40px"
                border="1px solid #CECECE"
              >
                <Box
                  display="flex"
                  flex="4"
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                >
                  {flag_down2 ? (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="80%"
                    >
                      <Box display="flex" bgcolor="#54DADE" borderRadius="100%" flex="1" justifyContent="center">
                        {price_type.duke ? <img src={small_duke} width="90%" height="90%" /> : price_type.fast ? <img src={icon_logo} width="90%" height="90%" /> : <img src={bnb1} width="90%" height="90%" />}
                      </Box>
                      <Box
                        color="black"
                        display="flex"
                        fontSize="18px"
                        fontFamily="Poppins, sans-serif"
                        fontWeight="500"
                        alignItems="center"
                        justifyContent="flex-start"
                        marginLeft="10px"
                        flex="2.5"
                      >
                        {price_type.duke ? 'DUKE' : price_type.fast ? 'FAST' : 'BNB'}
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      width="100%"
                      height="100px"
                      bgcolor="white"
                      position="absolute"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      boxShadow="1px 3px 3px #9E9E9E"
                      top="9%"
                      left="3%"
                    >
                      <Box display="flex" flex="1" marginTop="10px" width="80%">
                        <Box
                          display="flex"
                          bgcolor="#54DADE"
                          borderRadius="100%"
                          flex="1"
                          justifyContent="center"
                        >
                          <img src={small_duke} width="90%" height="90%"></img>
                        </Box>
                        <Box
                          color="black"
                          display="flex"
                          fontSize="18px"
                          fontFamily="Poppins, sans-serif"
                          fontWeight="500"
                          alignItems="center"
                          justifyContent="flex-start"
                          marginLeft="10px"
                          flex="2.5"
                          onClick={() => {
                            let temp = { ...price_type };
                            temp.duke = true;
                            temp.fast = false;
                            temp.bnb = false;
                            set_price_type(temp);
                            set_down2(true);
                          }}
                        >
                          DUKE
                        </Box>
                      </Box>
                      <Box display="flex" flex="1" marginTop="10px" width="80%">
                        <Box display="flex" flex="1" justifyContent="center">
                          <img src={icon_logo} width="90%" height="90%"></img>
                        </Box>
                        <Box
                          color="black"
                          flex="2.5"
                          display="flex"
                          fontSize="18px"
                          fontFamily="Poppins, sans-serif"
                          fontWeight="500"
                          alignItems="center"
                          justifyContent="flex-start"
                          marginLeft="10px"
                          onClick={() => {
                            let temp = { ...price_type };
                            temp.duke = false;
                            temp.fast = true;
                            temp.bnb = false;
                            set_price_type(temp);
                            set_down2(true);
                          }}
                        >
                          FAST
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flex="1"
                        marginTop="10px"
                        marginBottom="10px"
                        width="80%"
                      >
                        <Box display="flex" flex="1" justifyContent="center">
                          <img src={bnb1} width="90%" height="90%"></img>
                        </Box>
                        <Box
                          color="black"
                          display="flex"
                          fontSize="18px"
                          flex="2.5"
                          fontFamily="Poppins, sans-serif"
                          fontWeight="500"
                          alignItems="center" width="80%"
                          justifyContent="flex-start"
                          marginLeft="10px"
                          onClick={() => {
                            let temp = { ...price_type };
                            temp.duke = false;
                            temp.fast = false;
                            temp.bnb = true;
                            set_price_type(temp);
                            set_down2(true);
                          }}
                        >
                          BNB
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => {
                    set_down2(!flag_down2);
                  }}
                >
                  {flag_down2 ? (
                    <AiFillCaretDown
                      fontSize="16px"
                      color="#757B75"
                    ></AiFillCaretDown>
                  ) : (
                    <AiFillCaretUp
                      fontSize="16px"
                      color="#757B75"
                    ></AiFillCaretUp>
                  )}
                </Box>
              </Box>
              <Box display="flex" flex="4">
                <Box
                  width="100%"
                  component="input"
                  placeholder="price"
                  borderRadius="8px"
                  height="40px"
                  paddingLeft="3%"
                  style={{
                    border: "1px solid #CECECE",
                  }}
                  onChange={(e) => {
                    if (price_type.duke === true) {
                      let temp = { ...price };
                      temp.duke = e.target.value;
                      temp.fast = 0;
                      temp.bnb = 0;
                      set_price(temp);
                    }
                    else if (price_type.fast === true) {
                      let temp = { ...price };
                      temp.duke = 0;
                      temp.fast = e.target.value;
                      temp.bnb = 0;
                      set_price(temp);
                    }
                    else if (price_type.bnb === true) {
                      let temp = { ...price };
                      temp.duke = 0;
                      temp.fast = 0;
                      temp.bnb = e.target.value;
                      set_price(temp);
                    }
                  }}
                ></Box>
              </Box>
            </Box>
            <Rightletter1>
              Service fee 2.5% | You will receive 975 DUKE per copies
            </Rightletter1>
            <Box display="flex" width="60%" marginTop="5%">
              <Box display="flex" flex="1" flexDirection="column">
                <Box
                  display="flex"
                  fontFamily="Poppins, sans-serif"
                  fontSize="20px"
                  lineHeight="20px"
                  fontWeight="600"
                  letterSpacing="0.5"
                  color="black"
                >
                  Unlock Once Purchased
                </Box>
                <Box
                  display="flex"
                  marginTop="2%"
                  fontFamily="Poppins, sans-serif"
                  fontSize="12px"
                  lineHeight="12px"
                  fontWeight="normal"
                  letterSpacing="0.5"
                  color="#757B75"
                >
                  Content will be unlocked once purchased
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Box
                  display="flex"
                  flex="1"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  onClick={() => {
                    set_toggle2(!toggle2);
                  }}
                >
                  <Box
                    display="flex"
                    width="40px"
                    height="20px"
                    borderRadius="50px"
                    bgcolor={toggle2 ? "#2BA55D" : "#757B75"}
                    alignItems="center"
                  >
                    {toggle2 ? (
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="flex-end"
                      >
                        <Box
                          display="flex"
                          width="17px"
                          height="17px"
                          bgcolor="white"
                          borderRadius="100%"
                          marginRight="3%"
                        ></Box>
                      </Box>
                    ) : (
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="flex-start"
                      >
                        <Box
                          width="17px"
                          height="17px"
                          bgcolor="white"
                          borderRadius="100%"
                          marginLeft="3%"
                        ></Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" width="60%" marginTop="2%">
              <Box
                width="100%"
                component="input"
                placeholder="Enter Digital Key, Code, Link etc."
                borderRadius="8px"
                height="40px"
                paddingLeft="3%"
                style={{
                  border: "1px solid #CECECE",
                }}
              ></Box>
            </Box>
            <Letterdis1>Collection</Letterdis1>
            <Letterdis2>
              Select existing Collection or create new one
            </Letterdis2>

            <Box
              display="flex"
              marginTop="2%"
              width="60%"
              flexDirection="column"
              borderRadius="8px"
              border="1px solid #CECECE"
            >
              <Box
                display="flex"
                height="44px"
                alignItems="center"
                paddingLeft="3%"
                paddingRight="3%"
                borderBottom="1px solid #CECECE"
                fontSize="12px"
                color="#757B75"
                fontFamily="Poppins, sans-serif"
              >
                <Box display="flex" flex="1" justifySelf="flex-start">
                  {choose}
                </Box>
                <Box display="flex" flex="1" justifyContent="flex-end">
                  {flag_down1 ? (
                    <AiFillCaretDown
                      fontSize="20px"
                      onClick={() => {
                        set_down1(!flag_down1);
                      }}
                    ></AiFillCaretDown>
                  ) : (
                    <AiFillCaretUp
                      fontSize="20px"
                      onClick={() => {
                        set_down1(!flag_down1);
                      }}
                    ></AiFillCaretUp>
                  )}
                </Box>
              </Box>
              <Box
                display={!flag_down1 ? "flex" : "none"}
                height="124px"
                paddingLeft="5%"
                borderBottom="1px solid #CECECE"
                fontSize="12px"
                color="#757B75"
                fontFamily="Poppins, sans-serif"
                flexDirection="column"
              >
                <Dropletter1
                  onClick={(e) => {
                    console.log(e.target);
                    set_choose(e.target.value);
                  }}
                >
                  Great Apes Collection 1
                </Dropletter1>
                <Dropletter1
                  onClick={(e) => {
                    set_choose(e.target.value);
                  }}
                >
                  Great Apes Collection 2
                </Dropletter1>
                <Dropletter1
                  onClick={(e) => {
                    set_choose(e.target.value);
                  }}
                >
                  Great Apes Collection 3
                </Dropletter1>
                <Dropletter1
                  onClick={(e) => {
                    set_choose(e.target.value);
                  }}
                >
                  Great Apes Collection 4
                </Dropletter1>
                <Dropletter1
                  onClick={(e) => {
                    set_choose(e.target.value);
                  }}
                >
                  Great Apes Collection 5
                </Dropletter1>
              </Box>
              <Box
                display="flex"
                height="44px"
                alignItems="center"
                paddingLeft="3%"
                borderBottom="1px solid #CECECE"
                fontSize="12px"
                color="#757B75"
                fontFamily="Poppins, sans-serif"
              >
                FastSwap Collection
              </Box>
              <Box
                display="flex"
                height="44px"
                alignItems="center"
                paddingLeft="3%"
                fontSize="12px"
                color="#757B75"
                fontFamily="Poppins, sans-serif"
              >
                Create New Collection +
              </Box>
            </Box>
          </>
        ) : (
          ""
        )}
        <Box display="flex" width="60%" marginTop="10%" onClick={() => { upload_ipfs(); }}>
          <Btn_Customize
            color={"white"}
            back={"#2BA55D"}
            width={"100%"}
            height={"56px"}
            border={"1px solid #2BA55D"}
            str={"+ Create"}
            borderRadius={"8px"}

          />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style1}>
          <MHeader>Status</MHeader>
          <MContent alignItems="flex-end">NFT:{'\u00a0'}{process}</MContent>
          <MContent alignItems="flex-start" marginTop="3%">MARKETPLACE:{'\u00a0'}{process1}</MContent>

          {/* <MFooter></MFooter> */}
        </Box>
      </Modal>
    </StyledContainer>
  );
};

const MHeader = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  font-size: 38px;
  color: white;
  margin-top: 3%;
  align-items: center;

`

const MContent = styled(Box)`
    display: flex;
  flex: 2;
  width: 100%;
  justify-content: center;
  font-size: 25px;
  color: white;
`

const MFooter = styled(Box)`
    display: flex;
  flex: 1;
`

const Loadimg = styled(Box)`
  background-image: url(${({ image_file }) => image_file});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const PMbtn = styled(Box)`
  font-size: 16px;
  font-weight: 600;
  color: #757b75;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -1em 1em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.1em 0.1em 1em rgba(0, 0, 0, 0.3);
  }
`;

const Dropletter1 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: black !important;
  }
`;

const Downletter1 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #757b75;
`;

const Rightletter1 = styled(Box)`
  display: flex;
  width: 60%;
  margin-top: 1%;
  justify-content: flex-end;
  align-items: flex-end;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #757b75;
`;

const Transbut1 = styled(Box)`
  display: flex;
  flex: 1;
  height: 116px;
  border: 1px solid #cecece;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  border-radius: 16px;
  color: #757b75;
  &:hover {
    cursor: pointer;
    border: 3px solid #237745 !important;
    /* box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  } */
  }
`;

const Letterdis1 = styled(Box)`
  display: flex;
  width: 60%;
  margin-top: 5%;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.5;
  color: black;
`;

const Letterdis2 = styled(Box)`
  display: flex;
  width: 60%;
  margin-top: 1%;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  letter-spacing: 0.5;
  color: #757b75;
`;

const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  background: ${({ ctheme, ltheme, dtheme }) =>
    ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
`;

const Header1_space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;

const HLetter = styled(Box)`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2ba55d;
  border-top: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    border-top: 4px solid #2ba55d;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const Header1 = styled(Box)`
  display: flex;
  width: 100%;
`;
export default Create_NFT;
