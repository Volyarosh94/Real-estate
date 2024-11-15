import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "../../images/logo/logo.png";
import { formatEther } from "ethers";
import { ThemeContext } from "../functions/Theme";

function NavBar() {
  const [data, setData] = useState({ address: "", balance: null });
  const { theme, toggleTheme} = useContext(ThemeContext)

  const isDarkTheme = theme === "dark-theme";

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        const balanceInEther = formatEther(balance);
        setData({
          address: address,
          balance: balanceInEther,
        });
      })
      .catch((error) => {
        console.error("Error fetching balance", error);
      });
  };

  const accountChangeHandler = (account) => {
    setData({
      address: account,
    });

    getBalance(account);
  };

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangeHandler(accounts[0]);

        alert(`Connected Wallet Address: ${accounts[0]}\nBalance: ${data.balance} ETH`);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        alert("Error connecting to MetaMask. Please try again.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{
              filter: theme === "light-theme" ? "invert(1)" : "none",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>

          <Button
            variant="primary"
            onClick={connectWalletHandler}
            className="btn-primary d-none d-lg-inline-block"
          >
            {data.address ? `Connected: ${data.address.slice(0, 6)}...` : "Connect Wallet"}
          </Button>

          {data.address && data.balance !== null && (
            <div className="ms-3 text-theme">
              <strong>Balance: </strong>
              {data.balance} ETH
            </div>
          )}

          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
            onClick={toggleTheme}
          >
            <i className={isDarkTheme ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
