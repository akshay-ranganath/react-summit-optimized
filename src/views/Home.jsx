import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from 'cloudinary-react'
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
const Banner = lazy(() => import("../components/carousel/Banner"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));


class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />


        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <Image cloudName="dbmataac4" publicId="workshop/pexels-the-lazy-artist-gallery-1300550" width="350" height="250" className="img-fluid rounded-circle">
                  <Transformation widht="350" height="250" crop="fill" quality="auto" format="auto"></Transformation>
                </Image>
                <div className="text-center h6 whitelink">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <Image cloudName="dbmataac4" publicId="workshop/people-3142549_1280" width="350" height="250" className="img-fluid rounded-circle">
                  <Transformation widht="350" height="250" crop="fill" quality="auto" format="auto"></Transformation>
                </Image>
                <div className="text-center h6">Women's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <Image cloudName="dbmataac4" publicId="workshop/pexels-lumn-322207" width="350" height="250" className="img-fluid rounded-circle">
                  <Transformation widht="350" height="250" crop="fill" quality="auto" format="auto"></Transformation>
                </Image>

                <div className="text-center h6">Accessories</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <Image cloudName="dbmataac4" publicId="workshop/pexels-jordan-hyde-1032110" width="350" height="250" className="img-fluid rounded-circle">
                  <Transformation widht="350" height="250" crop="fill" quality="auto" format="auto"></Transformation>
                </Image>
                <div className="text-center h6">Footwear</div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div style={{ float: 'right', lineHeight: '1.2em', fontSize: '28px', margin: 0, padding: 0, display: 'block', marginBlockStart: '0.83em', marginBlockEnd: '0.83em', marginInlineStart: '0em', marginInlineEnd: '0em', textAlign: 'left', letterSpacing: 0, background: 'hsla(0,0%,100%,.75)' }}>

                <h3>Slow fashion is the new Fast Fashion</h3>
                <p>Sustainable. Practical. Perfect for working from home.</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
