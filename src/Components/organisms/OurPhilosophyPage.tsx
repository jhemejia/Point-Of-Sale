import InfoPageTemplate from "../molecules/InfoPageTemplate"

const OurPhilosophyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full h-full">
        <InfoPageTemplate title="Our Philosophy" subtitle="">
          <section className="p-6 m-6">
            <p className="text-lg mb-3 p-6">At Your Retail Company, we are committed to providing the best products and services to our valued customers. Our philosophy revolves around three core principles:</p>

            {/*  <!-- Principle 1 --> */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-2">Quality Products</h2>
                <p className="text-grey-600">We believe in offering only the highest quality products to our customers. Each item in our collection is carefully curated and sourced from trusted suppliers. Our commitment to quality ensures that our customers receive durable and reliable products that exceed their expectations.</p>
              </div>

            {/*   <!-- Principle 2 --> */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-2">Customer Satisfaction</h2>
                <p className="text-grey-600">Our customers are at the heart of everything we do. We prioritize their satisfaction and strive to create a delightful shopping experience for each and every customer. Our dedicated customer support team is always ready to assist with any inquiries or concerns, ensuring that our customers feel valued and cared for.</p>
              </div>

              {/* <!-- Principle 3 --> */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-2">Innovation and Trends</h2>
                <p className="text-grey-600">As a retail company, we stay up-to-date with the latest trends and innovations in the industry. We constantly refresh our product offerings to provide our customers with the most cutting-edge and stylish options. Our commitment to innovation ensures that our customers have access to the latest and trendiest products in the market.</p>
          </div>
          </section>
        </InfoPageTemplate>
    </div>
  )
}

export default OurPhilosophyPage