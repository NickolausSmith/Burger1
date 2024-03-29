import React, {Component} from 'react';
import axios from '../../axios-orders';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Order from '../../Components/Order/Order';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
class Orders extends Component {

    state={
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/Orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            console.log(res.data)
            this.setState({loading: false, orders: fetchedOrders})

        })
        .catch(err => {
            this.setState({loading: false})
        })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}/>
        ))}
            </div>
        );
    }

}

export default withErrorHandler(Orders, axios);