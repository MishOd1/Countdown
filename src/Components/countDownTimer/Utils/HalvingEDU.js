import React from 'react';
import './HalvingEDU.css';
import App from './Router.js'
import "@fontsource/playfair-display";


function EDU(){

return(
  <div>

    <p className="para">
    <br></br><br></br>
      from a more techinical point of view, After every 210,000 blocks mined, or roughly every four years, the block reward given to Bitcoin miners<br></br>
       for processing transactions is cut in half. This event is referred to as halving because it cuts in half the rate at which new bitcoins are released <br></br>
       into circulation. This is Bitcoin's way of enforcing synthetic price inflation until all bitcoins are released.<br></br><br></br>

      This rewards system will continue until around the year 2140, when the proposed limit of 21 million coins is reached. At that point, miners <br></br>will be rewarded with fees, which network users will pay, for processing transactions. These fees ensure that miners still have the incentive<br></br> to mine and keep the network going.<br></br><br></br>
     

      The halving event is significant because it marks another drop in the rate of new Bitcoins being produced as it approaches its finite supply: the <br></br>maximum total supply of bitcoins is 21 million. As of late August 2022, there are about 19.1 million bitcoins already<br></br> in circulation, leaving just around 1.9 million left to be released via mining rewards.<br></br><br></br>


      In 2009, the reward for each block in the chain mined was 50 bitcoins. After the first halving, it was 25, and then 12.5, and then it became<br></br> 6.25 bitcoins per block as of May 11, 2020. To put this in another context, imagine if the amount of gold mined out of the Earth was cut<br></br> in half every four years. If gold's value is based on its scarcity, then a "halving" of gold output every four <br></br>years would theoretically drive its price higher.<br></br><br></br>
      <br></br>
      <App />
    </p>
    
  </div>


)


}


export default EDU