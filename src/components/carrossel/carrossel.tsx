// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import {Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="../../../src/assets/images/1228014.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../src/assets/images/Toronto-skyline-at-night-1.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../src/assets/images/beira.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../src/assets/images/SJoséCampos.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel