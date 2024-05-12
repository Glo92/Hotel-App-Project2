import React from 'react'

function Servicedetails() {
  return (
    <div className='service'>
        <div>
            <h1 className='our'>Our Services</h1>
     <p className='paragraph'>Welcome to our Coffee Hotel App, 
        where you can enjoy a variety of services to make your stay more enjoyable and convenient. 
        Here are some of the features we offer:</p>
        </div>
        <div>
            <h2 className='h2'>1. Mobile Ordering and Payment:</h2>
            <p className='paragraph'>Order your favorite coffee drinks and pastries right from your phone, and pay with mpesa paybill,Apple pay,Google pay and gift cards.
            </p>
            <img
            className='tel' 
            src="src/images/Glyphs Silhouette PNG Images, Calling Telephone Glyph Icon Vector, Telephone Icons, Calling, Call PNG Image For Free Download.jpeg" 
            alt="telephone" />
        </div>
        <div>
            <h2 className='h2'>2. Loyalty and Rewards: </h2>
            <p className='paragraph'>Earn points for every purchase and redeem them for free drinks, food, and other perks.
                 Our app keeps track of your rewards and notifies you when you're eligible for a reward.
                 </p>
                 <img 
                 className='star'
                 src="src/images/288 Star Smiles 20mm Shaped Children's Reward Stickers for School Teachers or Nurses.jpeg" 
                 alt="" />
        </div>
        <div>
            <h2 className='h2'>3. Delivery and Pickup:</h2>
            <p className='paragraph'>Get your coffee and pastries delivered right to your room,your doorstep or pick them up at our coffee shop. 
                You can track your order in real-time and receive notifications when it's ready.
            </p>
        </div>
        <div>
            <h2 className='h2'>4. Find the Nearest Location:</h2>
            <p className='paragraph'> Use our map feature to find the nearest coffee shop location and get directions.</p>
            <img 
            className='star'
            src="src/images/Locations Silhouette PNG Images, Vector Location Icon, Location Icons, Location Clipart, Location Icon PNG Image For Free Download.jpeg"
             alt="" />
        </div>
        <div >
            <h3 className='h3'>
            We hope you enjoy using our Coffee Hotel App services. 
            If you have any questions or feedback, please don't hesitate to contact us.
            </h3>
            <img 
            className='cafe'
            src="src/images/_ (3).jpeg"
            alt="" />
        </div>
    </div>
  )
}

export default Servicedetails