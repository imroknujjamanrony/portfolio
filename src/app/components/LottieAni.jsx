// import { useLottie } from "lottie-react";
// import LottieAnimation from "../../../public/LottieAnimation.json";
// const LottieAni = () => {
//   const options = {
//     animationData: LottieAnimation,
//     loop: true,
//     autoplay: true,
//   };

//   // Apply styles to the container
//   const style = {
//     width: "500px",
//     height: "300px",
//   };

//   const { View } = useLottie(options);

//   return <div style={style}>{View}</div>;
// };

// export default LottieAni;

import { useLottie } from "lottie-react";
import LottieAnimation from "../../../public/LottieAnimation.json";

const LottieAni = () => {
  const options = {
    animationData: LottieAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-full h-full max-w-[500px] max-h-[300px]">{View}</div>
  );
};

export default LottieAni;
