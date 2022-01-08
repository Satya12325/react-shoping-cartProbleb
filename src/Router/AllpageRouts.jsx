import {Route,Switch} from 'react-router-dom';
import CartDetails from '../Components/CratDetails';
import Home from '../Pages/Home';
import ItemDetails from '../Pages/ItemDetails';

export default function AllpageRouts(){
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/items/:id">
                <ItemDetails/>
            </Route>
            <Route exact path="/cart">
                <CartDetails/>
            </Route>
        </Switch>
        </>
    )
}