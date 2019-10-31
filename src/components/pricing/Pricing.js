import React, { Fragment } from 'react';
import PriceCard from '../priceCard/PriceCard';
import NavbarLog from '../navbar/NavbarLog';
import Footer from '../footer/Footer';
import './Pricing.css';

function Pricing() {
  return (
    <Fragment>
      <NavbarLog />
      <div className="pricing">
        <div className="pricing-filter">
          <div className="form-container__outer">
            <div className="pricing-card__container">
              <h3 className="form-price__title">Escolha seu plano</h3>
              <div className="form__card-container">
                <PriceCard title="Básico" description="Feito para quem busca simplicidade no seu dia-a-dia." price="599" styleTitle={{color: "#FF8514"}} styleBg={{backgroundColor: "#FF8514"}}/>
                <PriceCard title="Nômade" description="O melhor plano para quem quer flexibilidade em suas estadias." price="799" styleTitle={{color: "#D65A36"}} styleBg={{backgroundColor: "#D65A36"}}/>
                <PriceCard title="Explorador" description="Para quem deseja explorar o mundo com muito conforto." price="999" styleTitle={{color: "#BB2A00"}} styleBg={{backgroundColor: "#BB2A00"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Pricing;