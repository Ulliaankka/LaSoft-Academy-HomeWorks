import React from "react";
import "./modal-subscribe.css";
import Close_button from "../../Assets/Images/close_button.png";
import modalImage from "../../Assets/Images/modal-img.png";
import Button from "../Button/button";
import postRequest from "../../Request/subscribe-request";

const ModalSubscribe = ({ visible, setVisible }) => {
  if (visible) {
    return (
      <div>
        <div className="modal-background"></div>
        <div className="modal-window">
          <div className="modal-window-text">
            <div className="modal-close-window">
              <img
                src={Close_button}
                onClick={() => setVisible(false)}
                alt="Close the modal window"
              />
            </div>

            <div className="modal-input-field">
              <div className="modal-main-text">
                <h2 className="modal-text-center">
                  Give us your email to stay tuned!
                </h2>
                <div className="modal-form">
                  <input
                    type="email"
                    className="modal-input general-text"
                    placeholder="E-mail"
                    defaultValue=""
                    id="subscribe-value"
                  />
                  <Button
                    castomClassName="btn-subscribe-size"
                    color="green"
                    onClick={function () {
                      setVisible(false);
                      postRequest({
                        email: `${
                          document.getElementById("subscribe-value").value
                        }`,
                      });
                    }}
                    text="Subscribe"
                    type="submit"
                  ></Button>
                </div>
              </div>

              <div className="modal-bottom-text">
                <p className="bottom-text-center">
                  You always can undo that in any of your received emails
                </p>
              </div>
            </div>
          </div>
          <div className="modal-right-img">
            <img src={modalImage} alt="Image of arts" />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ModalSubscribe;
