
// // import fotoMobil from './assets/img/car01.min.jpg'
import styles from "./assets/css/testimonial.module.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// import { useEffect, useState } from "react";
// import axios from "axios";

// const CARS_ENDPOINT_URL = "./json/testimonials.min.json";

const Testimonial = (testimonial) => {
//   const [cars, setCars] = useState([]);
//   const [filterCarParams, setFilterCar] = useState({});

//   useEffect(() => {
//     getAllCars();
//   }, []);

//   const getAllCars = async () => {
//     const cars = await axios.get(CARS_ENDPOINT_URL);
//     console.log(cars.data);
//     setCars(cars.data);
//   };


  return (
          <div className="card" style={{ background: "#F1F3FF", border: '0px' }} key={testimonial.id}>
            <div className="m-5">
              <div className="row">
                <div className="col-12 col-lg-3 col-md-12 my-3">
                  <img src={testimonial.image} alt=""
                    className="mx-auto d-block" />
                </div>
                <div className="col">
                  <div>
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />

                  </div>
                  <p className={styles.textSubtitle} style={{ margin: "8px 0px" }}>
                    {testimonial.comment}
                  </p>
                  <p className={styles.textSubtitle}><strong>{testimonial.name}, {testimonial.address}</strong> </p>
                </div>
              </div>
            </div>
          </div>
  )
}

      export default Testimonial;