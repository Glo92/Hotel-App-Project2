import "../about.css"

function Aboutdetails() {
    return (
    <div>
  <div className='about'>
      <div>
      <h1 className='head'>About Us:</h1>
          <p>
             
               At our coffee hotel, we're more than just a hotel - 
               we're a community hub where locals and travelers alike can come together to replenish interact  and connect.
                Our story began with a passion for great coffee and a desire to create a welcoming space that feels like home.
                From humble beginnings to a thriving coffee hotel, our story is one of passion, hard work, and dedication. 
                Learn more about our journey and how we're shaping the future of coffee and hospitality.

          </p>

         
          <div className='mission'>
          <img 
          className='image'
          src="src/images/milan, italy.jpeg" 
          alt="" />
          <h1 className='head'>Our Mission:</h1>
              <p className='p'>
                  We're dedicated to serving the best coffee in town, 
                  sourced from local roasters and brewed with love. But it's not just about the coffee -
                   it's about the experience. We strive to create a warm and inviting atmosphere where our guests can relax, work, or socialize.
              </p>
              <img 
              className='logo'
              src="src/images/Download premium vector of Coffee day logo design vector about coffee beans, art, celebration, logo, and illustration 1203104.jpeg" 
              alt="" />
          </div>

          <div className='mission'>
          <h1 className='head'>Our Team:</h1>
              <p>
                  Meet our team of coffee enthusiasts, 
                  hospitality experts, and tech-savvy innovators who are dedicated to bringing you the best coffee hotel experience. From our expert baristas to our friendly hotel staff, 
                  we're all about providing exceptional service and making you feel at home.
              </p>
              <img
              className='image'
              src="src/images/Uniform Gallery - Cafes (1).jpeg" 
              alt="" />
          </div>
          <div className='mission '>
              <h1 className='head'>Our Values:</h1>
              <ul className='div'>
                  <li>Quality: We're committed to serving the best coffee and food in town.</li>
                  <li>Community: We believe in building strong relationships with our guests and partners.</li>
                  <li>Innovation: We're always looking for ways to improve and innovate our services.</li>
                  <li>Sustainability: We're dedicated to reducing our environmental footprint and promoting eco-friendly practices.</li>
              </ul>
          </div>
      </div>
  
  </div>
  </div>
    )
}

export default Aboutdetails;