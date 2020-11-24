import React from 'react'
import SmallMediaMenu from './SmallMediaMenu'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Rooms from './rooms/Rooms'
import Home from './home/Home'
import Restaurant from './restaurant/Restaurant'
import Services from './services/Services'
import Events from './events/Events'
import Booking from './booking/Booking'
import ErrorPage from './ErrorPage'
import Profile from './profile/Profile'

function Content() {
    return (
        <div>
         <div>
                    <Switch>
                            <Route path='/' exact component={Home} /> 
                            <Route path='/home' exact component={Home} /> 
                            <Route path='/rooms'  component={Rooms} /> 
                            <Route path='/restaurant' exact component={Restaurant} /> 
                            <Route path='/services' exact component={Services} /> 
                            <Route path='/events' exact component={Events} /> 
                            <Route path='/booking' exact component={Booking} />
                            <Route path='/profile' exact component={Profile} />
                            <Route component={ErrorPage} />  
                    </Switch>
         </div>
         <div>
              <SmallMediaMenu />
         </div>
       
        </div>
    )
}

export default Content
