import React from "react";
import "./Portfolio.css";
import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import Net from "../../Assets/Netflix.png";
import Wea from "../../Assets/weather.png";
import Le from "../../Assets/LiveEditor.png";
import Li from "../../Assets/linkora.png";



const boxstyle = {
  height: "100%",
  color: "white",
  backgroundColor: "#2c2c6c",
};

function Portfolio() {
  return (
    <section id="portfolio" data-aos="fade-up" data-aos-duration="3000">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_cards">
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Net} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Netflix Clone
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/JoyKumarSarkar/Netflix"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://netflcks.vercel.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Wea} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Weather App
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/JoyKumarSarkar/WeatherApp"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://my-react-weatherapp-project.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>      

        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Le} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Live Editor
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/JoyKumarSarkar/Live-Editor"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://modern-live-editor.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Li} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                linkora
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/JoyKumarSarkar/linkora"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://linkora-application.vercel.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        
      </div>
    </section>
  );
}

export default Portfolio;
