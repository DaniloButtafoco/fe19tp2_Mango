import React from 'react';
import { withAuthorization } from '../Session';
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2';
import Chart  from '../Chart'


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
            url: `https://cors-anywhere.herokuapp.com/https://brottsplatskartan.se/api/events/? limit=100`
        })
            .then(result => {
                console.log(result)
                this.setState({ result: result.data.data })
                console.log(this.state.result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                <Chart ></Chart>
            </div>

        )
    }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);