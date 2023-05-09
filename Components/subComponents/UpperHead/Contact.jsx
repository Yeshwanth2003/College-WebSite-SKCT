import { useEffect } from "react";
import "./Style/contact.css";
import clgEmblem from './asserts/clgEmblem.png'

export default function Contact() {
  //  Setting Focus Event for input

  useEffect(() => {
    document
      .querySelector("#contactSubmitButton")
      .addEventListener("click", () => {
        mailSubmitor();
      });
      
    // MailHandling Function

    function mailSubmitor() {
      let nameVal = document.querySelector("#nameInput").value;
      let emailVal = document.querySelector("#emailInput").value;
      let messageVal = document.querySelector("#messageInput").value;

      let mailDataObj = { name:nameVal, to:emailVal, message:messageVal };
      fetch("https://data.skct.edu.in/feedback/",{
        method:'POST',
        body:JSON.stringify(mailDataObj),
        headers:{
          'content-type':'application/x-www-form-urlencoded'
        }
      })
      .then((res)=>{
        if(res.status===200){
          document.querySelector("#contactReel").classList.add("contact-getter-bodyDivsHolderMove");
          document.querySelector("#contactRoundOne").classList.add("contact-round-one");
          document.querySelector("#contactRoundTwo").classList.remove("contact-roundNotIN")
        }
        else{
          alert("Message failed")
        }
      })
    }

    let inputtags = document.querySelectorAll(".contact-Input");
    let buttonDisplayCount = 0;
    inputtags.forEach((elem) => {
      elem.addEventListener("focusout", (event) => {
        let inputValue = event.target.value;
        let elementId = event.target.getAttribute("id");
        // name validator
        if (elementId.toLowerCase() === "nameinput") {
          if (inputValue.length === 0) {
            buttonDisplayCount > 0
              ? buttonDisplayCount--
              : (buttonDisplayCount -= 0);
            document
              .querySelector("#nameInputFlawLable")
              .classList.add("contact-flawmessageDisplay");
            // addtional ui oprn
            document
              .querySelector("#nameIcon")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#nameActLabel")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#nameIcon")
              .classList.add("contact-invalidContent-Responder");
            document
              .querySelector("#nameActLabel")
              .classList.add("contact-invalidContent-Responder");
          } else {
            buttonDisplayCount < 3
              ? buttonDisplayCount++
              : (buttonDisplayCount += 0);
            document
              .querySelector("#nameInputFlawLable")
              .classList.remove("contact-flawmessageDisplay");
            // additional  ui oprn
            document
              .querySelector("#nameIcon")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#nameActLabel")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#nameIcon")
              .classList.remove("contact-invalidContent-Responder");
            document
              .querySelector("#nameActLabel")
              .classList.remove("contact-invalidContent-Responder");
          }
        }
        // mailValidation
        else if (elementId.toLowerCase() === "emailinput") {
          if (!/^(.+)@(.+)$/gi.test(inputValue)) {
            buttonDisplayCount > 0
              ? buttonDisplayCount--
              : (buttonDisplayCount -= 0);
            document
              .querySelector("#emailInputFlawLable")
              .classList.add("contact-flawmessageDisplay");
            // additional ui oprn
            document
              .querySelector("#emailIcon")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#emailActLabel")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#emailIcon")
              .classList.add("contact-invalidContent-Responder");
            document
              .querySelector("#emailActLabel")
              .classList.add("contact-invalidContent-Responder");
          } else {
            buttonDisplayCount < 3
              ? buttonDisplayCount++
              : (buttonDisplayCount += 0);
            document
              .querySelector("#emailInputFlawLable")
              .classList.remove("contact-flawmessageDisplay");
            // additional ui oprn
            document
              .querySelector("#emailIcon")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#emailActLabel")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#emailIcon")
              .classList.remove("contact-invalidContent-Responder");
            document
              .querySelector("#emailActLabel")
              .classList.remove("contact-invalidContent-Responder");
          }
        }
        // MessageValidation
        else if (elementId.toLowerCase() === "messageinput") {
          if (inputValue.length === 0) {
            buttonDisplayCount > 0
              ? buttonDisplayCount--
              : (buttonDisplayCount -= 0);
            document
              .querySelector("#messageInputFlawLable")
              .classList.add("contact-flawmessageDisplay");
            // additional ui oprn
            document
              .querySelector("#messageIcon")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#messageActLabel")
              .classList.remove("contact-validContent-Responder");
            document
              .querySelector("#messageIcon")
              .classList.add("contact-invalidContent-Responder");
            document
              .querySelector("#messageActLabel")
              .classList.add("contact-invalidContent-Responder");
          } else {
            buttonDisplayCount < 3
              ? buttonDisplayCount++
              : (buttonDisplayCount += 0);
            document
              .querySelector("#messageInputFlawLable")
              .classList.remove("contact-flawmessageDisplay");
            // additional us oprn
            document
              .querySelector("#messageIcon")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#messageActLabel")
              .classList.add("contact-validContent-Responder");
            document
              .querySelector("#messageIcon")
              .classList.remove("contact-invalidContent-Responder");
            document
              .querySelector("#messageActLabel")
              .classList.remove("contact-invalidContent-Responder");
          }
        }
        console.log(buttonDisplayCount);
        // Button display decision
        if (buttonDisplayCount === 3) {
          document.querySelector("#contactSubmitButton").disabled = false;
        } else {
          document.querySelector("#contactSubmitButton").disabled = true;
        }
      });
    });
  });

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-contant">
          <div className="contact-header-div">
            <h2 className="contact-heading-h2">CONTACT US</h2>
          </div>
          <div className="contact-body">
            <div className="contact-getterBox">
              <div className="contact-getter-heading">
                <div className="contact-getter-heading-inner">
                  <div id="contactRoundOne" className="contact-round">
                    <span>1</span>
                  </div>
                  <div className="contact-getter-heading-text">
                    <span>Personal Details & Feedback</span>
                  </div>
                  <div className="contact-getter-liner"></div>
                  <div id="contactRoundTwo" className="contact-round contact-roundNotIN">
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div className="contact-getter-body">
                <div id="contactReel" className="contact-getter-bodyDivsHolder">
                  <div className="contact-getter-bodyDiv1">
                    <div className="contact-getter-whole-inputholder">
                      <div className="contact-input-wrapper">
                        <div className="contact-input-holder">
                          <div className="contact-input-iconDiv">
                            <svg
                              id="nameIcon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                            >
                              <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
                            </svg>
                          </div>
                          <div className="contact-inputDiv contact-inputDiv-name">
                            <label
                              id="nameActLabel"
                              htmlFor="nameInput"
                              className="contact-input-lable namelabel"
                            >
                              NAME
                            </label>
                            <div className="contact-input-div contact-input-div-name">
                              <input
                                id="nameInput"
                                className="contact-actInput-tag contact-Input"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact-flaw-div">
                        <label
                          id="nameInputFlawLable"
                          htmlFor="nameInput"
                          className="Contact-flawmessage"
                        >
                          Invalid Name
                        </label>
                      </div>
                      <div className="contact-input-wrapper">
                        <div className="contact-input-holder">
                          <div className="contact-input-iconDiv">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="25"
                              height="25"
                              viewBox="0 0 256 256"
                              id="emailIcon"
                            >
                              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path
                                  d="M 45 42.768 l 45 -20.785 v -3.587 c 0 -3.186 -2.582 -5.768 -5.768 -5.768 H 5.768 C 2.582 12.627 0 15.209 0 18.395 v 3.587 L 45 42.768 z"
                                  transform=" matrix(1 0 0 1 0 0) "
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M 45 52.626 L 0 31.84 v 39.765 c 0 3.186 2.582 5.768 5.768 5.768 h 78.464 c 3.186 0 5.768 -2.582 5.768 -5.768 V 31.84 L 45 52.626 z"
                                  transform=" matrix(1 0 0 1 0 0) "
                                  strokeLinecap="round"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="contact-inputDiv contact-inputDiv-email">
                            <label
                              id="emailActLabel"
                              htmlFor="emailInput"
                              className="contact-input-lable emaillabel"
                            >
                              EMAIL
                            </label>
                            <div className="contact-input-div contact-input-div-email">
                              <input
                                id="emailInput"
                                className="contact-actInput-tag contact-Input"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact-flaw-div">
                        <label
                          id="emailInputFlawLable"
                          htmlFor="emailInput"
                          className="Contact-flawmessage"
                        >
                          Invalid Email
                        </label>
                      </div>
                      <div className="contact-input-wrapper contact-input-wrapper-textArea">
                        <div className="contact-input-holder">
                          <div className="contact-input-iconDiv">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                              width="25px"
                              height="25px"
                              viewBox="0 0 24 24"
                              id="messageIcon"
                            >
                              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                            </svg>
                          </div>
                          <div className="contact-inputDiv contact-inputDiv-message">
                            <label
                              id="messageActLabel"
                              htmlFor="messageInput"
                              className="contact-input-lable messagelabel"
                            >
                              MESSAGE
                            </label>
                            <div className="contact-input-div contact-input-div-message">
                              <textarea
                                id="messageInput"
                                className="contact-actInput-tag contact-Input"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact-flaw-div">
                        <label
                          id="messageInputFlawLable"
                          htmlFor="messageInput"
                          className="Contact-flawmessage"
                        >
                          Invalid Message
                        </label>
                      </div>
                    </div>
                    <div className="contact-submitDiv">
                      <div className="contact-buttonDiv">
                        <button
                          id="contactSubmitButton"
                          className="contact-button"
                          disabled
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="contact-getter-bodyDiv2">
                    <div className="contact-getter-bodyDiv2-contents">
                      <div className="contact-bD2-textDiv">
                        <h3 className="contact-bd2-heading">
                        Thanks For Your Feedback !!
                        </h3>
                        <p className="contact-bd2-p">
                        *please check your mail for confirmation*
                        </p>
                      </div>
                      <div className="contact-bd2-imgDiv">
                          <img src={clgEmblem} alt="" className="contact-bd2-img" />
                        </div>
                      </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
