import React from "react";
import wagh from "./images/vaibhav.jpeg";
import thorat from "./images/thorat.jpg";
import unde from "./images/unde.jpg";
import gohil from "./images/gohil.jpg";
function Services() {
  let message = `Our Team`;
  return (
    <>
      <section class="section-white">
        {/* <div class="container3">
          <div class="row" className="Teamhead">
            <div class="col-md-12 text-center">
              <h1 class="section-title">The Team Behind These Website</h1>
            </div>

            <div class="mid">
              <div class="main1">
                <div class="Main">
                  <div class="col-sm-6 col-md-4">
                    <div class="team-item">
                      <img
                        //    src="https://i.ibb.co/dkWC67b/Whats-App-Image-2023-08-09-at-11-02-35-PM.jpg"
                        src={wagh}
                        class="team-img"
                        alt="pic"
                      />
                      <h3>Vaibhav Wagh</h3>
                      <div class="team-info">
                        <p>Team Member</p>
                      </div>
                      <p className="waghinfo">
                        Vaibhav is a third-year student in the Computer
                        Engineering Department at Shah and Anchor Kutchhi
                        Engineering College, affiliated with Mumbai University..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main2">
                <div class="Main">
                  <div class="col-sm-6 col-md-4">
                    <div class="team-item">
                      <img src={thorat} class="team-img" alt="pic" />

                      <h3>Sahil Thorat</h3>

                      <div class="team-info">
                        <p>Team Member</p>
                      </div>

                      <p className="thoratinfo">
                        Sahil is a third-year student in the Computer
                        Engineering Department at Shah and Anchor Kutchhi
                        Engineering College, affiliated with Mumbai University..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main3">
                <div class="Main">
                  <div class="col-sm-6 col-md-4">
                    <div class="team-item">
                      <img src={gohil} class="team-img" alt="pic" />

                      <h3>Vaibhav Gohil</h3>

                      <div class="team-info">
                        <p>Team Member</p>
                      </div>

                      <p className="gohilinfo">
                        Vaibhav is a third-year student in the Computer
                        Engineering Department at Shah and Anchor Kutchhi
                        Engineering College, affiliated with Mumbai University..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main4">
                <div class="Main">
                  <div class="col-sm-6 col-md-4">
                    <div class="team-item">
                      <img src={unde} class="team-img" alt="pic" />

                      <h3>Shreyas Unde</h3>

                      <div class="team-info">
                        <p>Team Member</p>
                      </div>

                      <p className="undeinfo">
                        Shreyas is a third-year student in the Computer
                        Engineering Department at Shah and Anchor Kutchhi
                        Engineering College, affiliated with Mumbai University..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div class="cardi">
          <div>
            <img class="ourphotos vaipic" src={wagh} alt="Image 1" />
          </div>
          <h1>Vaibhav Wagh</h1>
          <h3>Team Member</h3>
          <p>
            {" "}
            Vaibhav Wagh is a third-year student in the Computer Engineering
            Department at Shah and Anchor Kutchhi Engineering College,
            affiliated with Mumbai University..
          </p>
        </div>
        <div class="cardi">
          <div>
            <img class="ourphotos" src={thorat} alt="Image 2" />
          </div>
          <h1>Sahil Thorat</h1>
          <h3>Team Member</h3>
          <p>
            {" "}
            Sahil Thorat is a third-year student in the Computer Engineering
            Department at Shah and Anchor Kutchhi Engineering College,
            affiliated with Mumbai University..
          </p>
        </div>

        <div class="cardi">
          <div>
            <img class="ourphotos undepic" src={unde} alt="Image 3" />
          </div>
          <h1>Shreyas Unde</h1>
          <h3>Team Member</h3>

          <p>
            {" "}
            Shreyas Unde is a third-year student in the Computer Engineering
            Department at Shah and Anchor Kutchhi Engineering College,
            affiliated with Mumbai University..
          </p>
        </div>

        <div class="cardi">
          <div>
            <img class="ourphotos undepic" src={gohil} alt="Image 4" />
          </div>
          <h1>Vaibhav Gohil</h1>
          <h3>Team Member</h3>

          <p>
            {" "}
            Vaibhav Gohil is a third-year student in the Computer Engineering
            Department at Shah and Anchor Kutchhi Engineering College,
            affiliated with Mumbai University..
          </p>
        </div>
      </section>
    </>
  );
}

export default Services;
