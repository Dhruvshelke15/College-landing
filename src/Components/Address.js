import React from "react";
import "./Address.css"; // Import your CSS file for Address styles
import map from "../Components/Resources/map.jpeg";
import Button from "../Components/Button";

const Address = () => {
  return (
    <div className="address-container">
      <div className="content">
        <div className="content2">
          <h6>DAHISAR</h6>
          <h1>UNIVERSAL HIGH SCHOOL</h1>
          <div className="content3">
            <div
              style={{ position: "relative", width: "35px", height: "36px" }}
            >
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.8525" r="17.5" fill="#FDDF49" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div>
              <p>&nbsp;&nbsp;ADDRESS</p>
              <p>
              &nbsp;&nbsp;Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
              </p>
            </div>
          </div>

          <div className="content4">
            <div
              style={{ position: "relative", width: "35px", height: "36px" }}
            >
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.8525" r="17.5" fill="#FDDF49" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                height="25px"
                width="25px"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </div>

            <div>
              <p> &nbsp;&nbsp;ADMISSIONS ENQUIREY</p>
              <p> &nbsp;&nbsp;+91 224 194 7733 | admissions.dahisar@universal.edu.in</p>
            </div>
          </div>
          <div className="button1">
            <Button
              backgroundColor="yellow"
              color="border: 2px solid #FDDF49"
            />
          </div>
        </div>

        <div className="image-container">
          <img src={map} alt="Address Map" />
        </div>
      </div>
    </div>
  );
};

export default Address;
