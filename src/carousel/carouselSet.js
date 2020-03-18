import React from "react";
import CarouselSingle from "./carouselSingle";
import styles from "./carouselSet.module.css";

// const CarouselSet = ({ viewSet }) => {
//   return (
//     <div className="showSet">
//       <ul>
//         <li>
//           <CarouselSingle restaurant={viewSet[0]} />
//         </li>
//         <li>
//           <CarouselSingle restaurant={viewSet[1]} />
//         </li>
//         <li>
//           <CarouselSingle restaurant={viewSet[2]} />
//         </li>
//       </ul>
//     </div>
//   );
// };

const CarouselSet = ({ viewSet }) => {
  return (
    <div className={styles.showSet}>
      <ul>
        {viewSet.map((restaurant, i) => (
          <li key={i}>
            <CarouselSingle restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselSet;
