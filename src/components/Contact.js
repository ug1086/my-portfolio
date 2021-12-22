import React from "react";
// import LazyShow from "./LazyShow";

export default function Contact({parallax}) {

    return (
        <React.Fragment>
            {/* <LazyShow>
                  <div className="content-box" style={{textAlign: "center"}}>
                    <h1>I AM THE GOAT</h1>
                </div>
              </LazyShow>    */}

            {/* <lottie-player
                hover
                loop
                mode="normal"
                id="Anim"
                src="https://assets6.lottiefiles.com/packages/lf20_fJsyzc.json"
                // src="https://assets3.lottiefiles.com/private_files/lf30_zxrt6xaq.json"
                style={{
                    height: 200
                }}
                ></lottie-player> */}

            <button onClick={() => parallax.current.scrollTo(0)} className="contact-btn py-2 px-4">
                <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        id="scrollButton1"
                        src="https://assets9.lottiefiles.com/packages/lf20_tlje6641.json"
                        style={{
                            height: 100
                        }}
                ></lottie-player>
            </button>
    </React.Fragment>
  );
}