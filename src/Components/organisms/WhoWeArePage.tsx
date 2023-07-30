import InfoPageTemplate from "../molecules/InfoPageTemplate"

const WhoWeArePage = () => {
  return (
    <div className="flex flex-col justify-center max-w-full h-full">
        <InfoPageTemplate title="Who We Are" subtitle="Welcome to Our Company! We are a leading retailer of various products, offering high-quality items to our valued customers.">
      
          <section className="py-6 mx-6 ">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-grey-700">Our Retail Company was founded with a passion for providing exceptional products and excellent customer service. We believe in delivering value to our customers and strive to offer a wide range of products to cater to their diverse needs.</p>
              <p className="text-grey-700 mt-4">At Our Retail Company, we take pride in curating our product selection to ensure the highest quality. Our team works closely with trusted suppliers and manufacturers to bring you the latest and most sought-after items in the market.</p>
              <p className="text-grey-700 mt-4">Customer satisfaction is our top priority, and we go above and beyond to make your shopping experience enjoyable. Our dedicated support team is here to assist you with any inquiries or concerns you may have.</p>
            </div>
          </section>
          
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-grey-700">At Our Retail Company, our mission is to provide customers with a seamless shopping experience by offering a wide selection of high-quality products at competitive prices. We aim to become your go-to destination for all your shopping needs.</p>
              <p className="text-grey-700 mt-4">We strive to foster long-lasting relationships with our customers by delivering exceptional value and outstanding service. Our team is committed to continuously improving and expanding our product offerings to meet your evolving preferences.</p>
            </div>
          </section>
        </InfoPageTemplate>
    </div>
  )
}

export default WhoWeArePage