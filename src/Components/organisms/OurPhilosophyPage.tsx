import InfoPageTemplate from "../molecules/InfoPageTemplate"

const OurPhilosophyPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-full h-full">
        <InfoPageTemplate title="Our Philosophy" subtitle="">
          <section className="pt-6 pb-1 mx-6 ">
            <div className="container mx-auto px-4">
              <p className="text-grey-700">At Your Retail Company, we are committed to providing the best products and services to our valued customers. Our philosophy revolves around three core principles:</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Quality Products</h2>
              <p className="text-grey-700">We believe in offering only the highest quality products to our customers. Each item in our collection is carefully curated and sourced from trusted suppliers. Our commitment to quality ensures that our customers receive durable and reliable products that exceed their expectations.</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Innovation and Trends</h2>
              <p className="text-grey-700">As a retail company, we stay up-to-date with the latest trends and innovations in the industry. We constantly refresh our product offerings to provide our customers with the most cutting-edge and stylish options. Our commitment to innovation ensures that our customers have access to the latest and trendiest products in the market.</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Customer Satisfaction</h2>
              <p className="text-grey-700">Our customers are at the heart of everything we do. We prioritize their satisfaction and strive to create a delightful shopping experience for each and every customer. Our dedicated customer support team is always ready to assist with any inquiries or concerns, ensuring that our customers feel valued and cared for.</p>
            </div>
          </section>
        </InfoPageTemplate>
    </div>
  )
}

export default OurPhilosophyPage