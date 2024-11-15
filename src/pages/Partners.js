// Import bootstrap react components
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Framer-motion
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../components/functions/Theme";

function Partners() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {

  }, [theme])
  return (
    // Start partners
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="partners">
      <Container className="d-flex align-items-center flex-nowrap overflow-hidden">
        <Swiper
          className="mySwiper"
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1198: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img src={require("../images/partners/stellar.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/partners/blockport.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/partners/fantom.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/partners/onfido.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/partners/tr.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/partners/qa.png")} alt="img" className={theme === "light-theme" ? "img-contrast" : ""} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
    // End partners
  );
}

export default Partners;
