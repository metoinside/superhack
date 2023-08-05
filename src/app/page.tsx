import Card from "./components/card";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar title="CryptoRefund"/>
      <Hero/>
      <section id="card" className="text-4xl text-center p-10 font-extrabold">Crypto Refund in Three Easy Steps
      
      </section>
      
      
      
      <div className="flex justify-center justify-evenly">
      
      <Card title="Go Shopping" image="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=900&t=st=1689968298~exp=1689968898~hmac=2c5e496442940c140eddcd78ab10106dcafd2c67b6c0cefd406e282b67c5d3ef" description=" Track your tax free process by connecting your wallet." button="Learn More"/>
      <Card title="Customs Validation" image="https://img.freepik.com/free-vector/customs-clearance-abstract-concept-illustration_335657-3935.jpg?w=900&t=st=1689968363~exp=1689968963~hmac=1e7b4d19426e589147099569ef41021e0612818141ce8b6430b83298a21d24d9" description=" Get confirmation from customs officers." button="Learn More"/>
      <Card title="Get Refund Back" image="https://img.freepik.com/free-vector/e-shopping-cartoon-web-icon-online-store-cashback-service-money-returning-financial-refund-idea-return-investment-internet-income-vector-isolated-concept-metaphor-illustration_335657-2734.jpg?w=900&t=st=1689968387~exp=1689968987~hmac=51daaf3112ace361760a6674dcb9894a779c5252335a0cf0db5f5122a6b61f36" description=" Refunds will be back via your wallet." button="Learn More"/>
      </div>
      <h1 className="text-4xl text-center p-10 font-extrabold"></h1>
      
     </div>
  )
}