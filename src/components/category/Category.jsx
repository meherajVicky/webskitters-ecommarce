import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/category";
import { fetchProducts } from "../../redux/products";
import "./category.css";

export default function Category(props) {
  const [category, setCategory] = useState("men's clothing");
  const { category_data, category_status } = useSelector((s) => s.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category, dispatch]);
  const tem = [];
  const handleproducts = (x) => {
    setCategory(x);
  };
  const img = [
    {
      img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    },
    {
      img: "https://rukminim1.flixcart.com/image/580/696/k51cpe80/jewellery-set/f/v/r/n73542-sukkhi-original-imaf84xytt8swsbu.jpeg?q=50",
    },
    {
      img: "https://rukminim1.flixcart.com/image/150/150/k44hksw0/t-shirt/m/t/r/m-dv24solidmustard-diversify-original-imafkbzvhcn3vgs7.jpeg?q=70",
    },
    {
      img: "https://rukminim1.flixcart.com/image/150/150/k5r2mq80/kurta/g/c/d/l-g1939-red-gerua-original-imafgrxmmfqct9mp.jpeg?q=70",
    },
  ];
  for (let i = 0; i < category_data?.length; i++) {
    let obj = {
      title: category_data[i],
      img: img[i].img,
    };
    tem.push(obj);
  }
  console.log(tem);

  return (
    <>
      <br />
      <br />
      <div className="menu-items container-fluid mt-10 mb-0 pt-15">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {tem?.map((pro, i) => (
                <div
                  className={`item1 col-12 col-md-6 col-lg-6 col-xl-4 mb-2 `}
                  key={i}
                >
                  <div>
                    <img
                      className={`img1 card-img-top m-0 p-0 col-12 col-md-12`}
                      src={pro.img}
                      alt="hlo"
                      onClick={() => handleproducts(pro?.title)}
                    />
                    <h6 className="card-title mb-0 mt-2 ">{pro?.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
