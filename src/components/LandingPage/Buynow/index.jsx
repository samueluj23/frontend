import React, { useState, useEffect } from "react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import Swal from "sweetalert2";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { saveWalletTransaction, toFixedd, getStage, getWalletHistory, getAdmin } from "../../Helper";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import createTransferTransaction from "./createTransferTransaction";

const Buynow = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [loaderAct, setloaderAct] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [solAmount, setSolAmount] = useState("");
  const [totalBuyTokenByUser, setTotalBuyTokenByUser] = useState(0.0);
  const [solToken, setSolToken] = useState("");
  const [userBalance, setUserBalance] = useState("0:00");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const intialData = {
    tokenPrice: 0,
    launchPrice: 0,
    raisedSol: 0,
    totalSol: 0,
    progressPercentage: 0,
    endDate: 0,
    adminPubKey: "",
  };
  const [stageStatus, setStageStatus] = useState(intialData);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60;

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance < 0) {
        setPresaleEnded(true);
        clearInterval(countdownInterval);
      } else {
        // Calculate total hours and remaining minutes and seconds
        const totalHours = Math.floor(distance / hour);
        const remainingMinutes = Math.floor((distance % hour) / minute);
        const remainingSeconds = Math.floor((distance % minute) / second);
        setHours(totalHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    };

    // Set the countdown to 24 hours from now
    const countDownDate = Number(stageStatus.endDate);

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [stageStatus.endDate]);

  useEffect(() => {
    if (publicKey) {
      // Function to get the wallet balance
      const getWalletBalance = async (walletAddress) => {
        try {
          if (!walletAddress) {
            setUserBalance(0);
            return false;
          }

          // Convert the wallet address to a PublicKey
          const publicKey = new PublicKey(walletAddress);

          // Get the balance
          const balance = await connection.getBalance(publicKey);

          setUserBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error("Error in getWalletBalance:", error.message);
        }
      };
      getWalletBalance(walletAddress);
    }
  }, [publicKey, walletAddress]);

  useEffect(() => {
    let isAPISubscribed = true;
    const getStageDetails = async () => {
      try {
        let stageData = await getStage();
        if (stageData?.data?.success) {
          const timestamp = new Date(stageData?.data?.data?.endDate);
          const percentage = (stageData?.data?.data?.raisedSol / stageData?.data?.data?.totalSol) * 100;
          setStageStatus({
            tokenPrice: stageData?.data?.data?.tokenPrice,
            launchPrice: stageData?.data?.data?.launchPrice,
            raisedSol: stageData?.data?.data?.raisedSol,
            totalSol: stageData?.data?.data?.totalSol,
            progressPercentage: percentage,
            adminPubKey: stageData?.data?.data?.adminPubKey,
            endDate: timestamp.getTime(),
          });
        } else {
        }
      } catch (error) {
        console.error("Error in getWalletBalance:", error.message);
      }
    };
    if (isAPISubscribed) {
      getStageDetails();
    }
    return () => {
      isAPISubscribed = false;
    };
  }, []);

  // Sign a transaction
  const send = async () => {
    try {
      if (!solAmount || solAmount <= 0) {
        return Swal.fire({
          showConfirmButton: false,
          button: false,
          text: "Please enter valid sol amount",
          icon: "error",
          confirmButtonText: "Close",
          timer: 4000,
        });
      }

      // if (userBalance < solAmount) {
      //   return Swal.fire({
      //     showConfirmButton: false,
      //     button: false,
      //     text: "You don't have enough SOL balance",
      //     icon: "error",
      //     confirmButtonText: "Close",
      //     timer: 4000,
      //   });
      // }

      if (stageStatus.adminPubKey === "" || !stageStatus.adminPubKey) {
        return Swal.fire({
          showConfirmButton: false,
          button: false,
          text: "Try again",
          icon: "error",
          confirmButtonText: "Close",
          timer: 4000,
        });
      }

      setloaderAct(true);

      const getAdminAddress = await getAdmin(solAmount);

      if (!getAdminAddress?.status) {
        setloaderAct(false);
        return Swal.fire({
          showConfirmButton: false,
          button: false,
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Close",
          timer: 4000,
        });
      }
      console.log("solAmount, publicKey, connection, stageStatus.adminPubKey", solAmount, publicKey, stageStatus.adminPubKey)
      const transaction = await createTransferTransaction(solAmount, publicKey, connection, stageStatus.adminPubKey);

      // Sign the transaction with the user's wallet
      const signedTransaction = await signTransaction(transaction);

      // Send the signed transaction
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());

      // Wait for confirmation
      await connection.confirmTransaction(signature, "processed");
      if (signature) {
        let isSaved = await saveWalletTransaction(walletAddress, solToken, signature, solAmount);
        if (isSaved.data.success) {
          checkIfWalletIsConnected();
          setSolAmount("");
          setSolToken("");
          Swal.fire({
            showConfirmButton: false,
            button: false,
            text: "Congratulations! Your transaction is confirmed on the blockchain. Once the presale concludes, you’ll be able to claim your tokens.",
            icon: "success",
            confirmButtonText: "Close",
            timer: 4000,
          });
        } else {
          Swal.fire({
            showConfirmButton: false,
            button: false,
            text: "Transaction confirmed, getting error while saving transaction",
            icon: "warning",
            confirmButtonText: "Close",
            timer: 4000,
          });
        }
      } else {
        Swal.fire({
          showConfirmButton: false,
          button: false,
          text: "Transaction failed",
          icon: "error",
          confirmButtonText: "Close",
          timer: 4000,
        });
      }
      setloaderAct(false);
    } catch (error) {
      Swal.fire({
        showConfirmButton: false,
        button: false,
        text: error.message,
        icon: "error",
        confirmButtonText: "Close",
        timer: 4000,
      });
      setloaderAct(false);
      console.error("Error signing and sending transaction:", error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (publicKey) {
        let response = publicKey.toString();
        setWalletAddress(response);
        let tokenBalance = await getWalletHistory(response);
        tokenBalance = tokenBalance?.data.success ? Number(tokenBalance.data.data.tokenBalance).toFixed(2) : "0.00";
        console.log("tokenBalance", tokenBalance);
        setTotalBuyTokenByUser(tokenBalance);
      } else {
        setTotalBuyTokenByUser("0.00");
        setWalletAddress("");
        return false;
      }
    } catch (error) {
      setTotalBuyTokenByUser("0.00");
      setWalletAddress("");
      console.error(error.message);
    }
  };
  // On load, check if Phantom Wallet is connected
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [publicKey]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (Number(inputValue) >= 0) {
      // let value = Number(inputValue) / Number(stageStatus.tokenPrice);
      let value = Number(inputValue) / 0.000001;
      setSolAmount(inputValue);
      value = toFixedd(value);
      value = value ? value.toFixed(2) : value;
      setSolToken(value);
    } else {
      setSolAmount("");
      setSolToken("");
    }
  };

  return (
    <section className="hero-section" id="home-sec">
      <div className="banner-images">
        <img src="images/bg-1.jpg" data-scroll="" data-scroll-speed="0.3" alt="" />
        <img src="images/bg-2.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center" >
          <div className="col-md-5" style={{zIndex:10}}>
            <div className="text-main">
              <img className="hero-img" src="images/image-1.png" data-scroll="" alt="" />
              <h1 data-scroll="" data-scroll-speed="0.2">
                MEOW{" "}
              </h1>
              <h4 data-scroll="" data-scroll-speed="0.2">
                The Dog Meme Magic on Solana!
              </h4>
              <p data-scroll="" data-scroll-speed="0.2">
                Unleash the Charm of MEOW
              </p>
              <h4 data-scroll="" data-scroll-speed="0.2">
                $Meow Presale Coming soon!
              </h4>{" "}
            </div>
          </div>
          <div className="col-md-5 ms-auto banner-right">
            <div className="swap-box">
              <div className="timer-box">
                <h4 className="text-center">{presaleEnded ? "Presale End" : "Presale Ends In"}</h4>
                <ul className="row">
                  <li className="col-md-4">
                    <div className="timer-box-in">
                      <h4>{hours}</h4>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="timer-box-in">
                      <h4>{minutes}</h4>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="timer-box-in">
                      <h4>{seconds}</h4>
                      <span>Sec</span>
                    </div>
                  </li>
                </ul>
                <div className="swap-box-head">
                  <h4 className="text-center">Your Holdings: {totalBuyTokenByUser} $MEOW</h4>
                  <h4>Funds Raised: {stageStatus.raisedSol?.toFixed(2)} SOL</h4>
                </div>
              </div>

              <div className="swap-box-in">
                <div className="swap-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="d-flex">
                          <label>Amount in SOL You Pay:</label>
                          {publicKey ? (
                            <span className="ms-auto">
                              <i className="ri-wallet-line"></i> {userBalance} SOL
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="form-input">
                          <input type="number" placeholder="Min 0.5 SOL | Max 20 SOL" value={solAmount} onChange={handleInput} className="form-control" />
                          <div className="input-icon">
                            <span>
                              <img src="images/Solana_logo.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="d-flex">
                          <label>Amount in MEOW You Receive:</label>
                        </div>
                        <div className="form-input">
                          <input type="number" name="" value={solToken} disabled className="form-control" />
                          <div className="input-icon">
                            <span>
                              <img src="images/image4.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!publicKey ? (
                    <WalletMultiButton />
                  ) : loaderAct ? (
                    <>
                      <button className="w-100 btn-orange btn mt-2" disabled={true}>
                        Processing ...
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-100 btn-orange btn mt-2" onClick={send}>
                        Buy now
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buynow;
