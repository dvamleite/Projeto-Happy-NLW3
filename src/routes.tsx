import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanegensMap from './pages/OrphanegesMap';
import CreateOphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanegensMap} />
            
            <Route path="/orphanages/create" component={CreateOphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
            
        </Switch>
        
        </BrowserRouter>  
    );
}

export default Routes;