import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import 'swiper/css';              // Import Swiper styles

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "green" }}>
       Nature
      </h1>
      <h1 style={{ textAlign: "center", color: "black" }}>
        Parallax Page with Slider Effect
      </h1>

      <div className="container">
        {/* Swiper with Parallax Effect */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="fade" 
        >
          {/* First Slide */}
          <SwiperSlide>
            <Parallax
              bgImage="https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0"
              strength={200}
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
             
            </Parallax>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <Parallax
              bgImage="https://eskipaper.com/images/nature-27.jpg"
              strength={200}
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
             
            </Parallax>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <Parallax
              bgImage="https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain"
              strength={200}
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "2rem",
              }}
            >
             
            </Parallax>
          </SwiperSlide>

          {/* Fourth Slide */}
          <SwiperSlide>
            <Parallax
              bgImage="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"
              strength={200}
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "2rem",
              }}
            >
             
            </Parallax>
          </SwiperSlide>
        </Swiper>
      </div>

      
    </div>
  );
};

export default Home;
