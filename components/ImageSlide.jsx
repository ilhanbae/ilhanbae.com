"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageSlide = (props) => {
  return (
    <div>
      <ImageGallery
        items={props.items}
        // showPlayButton={false}
        showFullscreenButton={true}
        showIndex={true}
        disableKeyDown={true}
        showThumbnails={false}
        // thumbnailPosition={"left"}
      />
    </div>
  );
};

export default ImageSlide;

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const ImageSlide = (props) => {
//   const imageSlideRef = useRef(null);

//   const handleFullscreen = () => {
//     const elem = imageSlideRef.current;
//     if (document.fullscreenElement) {
//       // Exit full screen
//       document.exitFullscreen();
//     } else if (elem) {
//       // Request full-screen
//       elem.requestFullscreen();
//     }
//   };

//   return (
//     <div ref={imageSlideRef}>
//       <button className="bg-green-300" onClick={handleFullscreen}>
//         Full Screen
//       </button>
//       <Swiper
//         modules={[Pagination, Navigation]}
//         spaceBetween={50}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation={true}
//         loop={true}
//       >
//         {props.items.map((item, index) => {
//           return (
//             <SwiperSlide key={index}>
//               <div className="swiper-zoom-container">
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   fill
//                   className="!relative"
//                 />
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlide;
