import React from 'react';
import { withAuthorization } from '../Session';
import axios from 'axios'
import styles from '../Home/index.css'
import Chart from '../Chart';



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
        }

    }
    componentDidMount() {

        let crimes = {
            data: ''
        }
        axios({
            method: 'get',
            url: `https://cors-anywhere.herokuapp.com/https://brottsplatskartan.se/api/events/?limit=500`
        })
            .then(result => {
                console.log(result)
                this.setState({ result: result.data.data })
                //console.log(this.state.result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>{this.state.result ? <Chart result={this.state.result} /> : <p className='laddar'>laddar...</p>}
                {/* <TestChart />*/}
            </div>
        )
    }
}

console.log('hej');
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
