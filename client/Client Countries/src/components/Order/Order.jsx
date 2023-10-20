import { useState } from "react"
import { orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux";




const Order = () => {

    const [aux, setAux]= useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        return dispatch(orderCards(event.target.value))
        setAux(true)
    }
    return (
        <div>
            <select onChange={handleOrder} >
<option value="A">Ascendent</option>
<option value="B">Descendent</option>
<option value="population">Population</option>
</select>
        </div>
    )
}
export default Order;