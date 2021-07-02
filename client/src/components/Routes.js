import React from 'react';
import Genre from './sidebar-components/Genre';
import { Route} from 'react-router-dom';
import Home from './Home';


const Routes=()=>{
    return(
        <React.Fragment>
            <Route path={"/home"} component={Home}/>
            <Route path={"/political"}><Genre genre='political'/></Route>
            <Route path={"/business"}><Genre genre='business'/></Route>
            <Route path={"/automobiles"}><Genre genre='automobiles'/></Route>
            <Route path={"/science"}><Genre genre='science'/></Route>
            <Route path={"/startup"}><Genre genre='startup'/></Route>
            <Route path={"/technology"}><Genre genre='technology'/></Route>
            <Route path={"/sports"}><Genre genre='sports'/></Route>
            <Route path={"/entertainment"}><Genre genre='entertainment'/></Route>
            <Route path={"/innovations"}><Genre genre='innovations'/></Route>
            
        </React.Fragment>
    );
}


export default Routes