import './style.css';
import React from 'react';
import { Divider, Image, Segment } from 'semantic-ui-react'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'

const Home = () => {
  return (
    <div className="container">
      <Segment>
        <div className='imgCont'>
          <Image src={img1} size='small' verticalAlign='bottom' /> <span id='imgCont'>Are your tires worn and too soon? Instead of digging through all of your paperwork (if you even kept it), you could be checking your vehicle portal for that information. If you'd like to keep a paper trail of your service record, take a photo of your receipt and upload it to your profile.</span>
          <Divider />
          <Image src={img2} size='small' verticalAlign='bottom' />{' '}
          <span id='imgCont'>Track your repairs, upgrades and when they were installed. Input milage, length of time or miles you should go until you need to have things services. How many miles are on your current shocks and how close are you until they should be inspected? Sign up and get started!</span>
          <Divider />
          <Image src={img3} size='small' verticalAlign='bottom' />{' '}
          <span id='imgCont'>Keep a list of your time sensitive maintenance of all of your vehicles, wether it's for one vehicle, or an entire fleet!</span>
        </div>
      </Segment>
    </div>
  )
}
export default Home;