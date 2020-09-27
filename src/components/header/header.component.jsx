import moment from 'moment'
import React from 'react'

import { Navbar, Button } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker'
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

import { TOKEN } from '../../utils/globals/globals'

import { connect } from 'react-redux'

import { setDateRange } from '../../redux/communication/communication.action'

import Loader from 'react-loader-spinner'

class Header extends React.Component {
    constructor(props) {
        super();

        this.state = {
            pickerRange: {
                startDate: "0",
                endDate: "0"
            }
            
        };

        
    }

    componentDidMount = () => {
        console.log('componentDidMount is called');

        fetch(`https://sigviewauth.sigmoid.io/api/v1/getDateRange`, {
            method: "POST",

            body: JSON.stringify({
                "organization": "DemoTest",
                "view": "Auction"
            }),

            headers: {
                "x-auth-token": TOKEN,
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            console.log("response is ", response.result, moment)
            this.setState({
                pickerRange: {
                    endDate: response.result.endDate,
                    startDate: response.result.startDate
                }
            })

            this.props.dateRange(response.result.startDate, response.result.endDate)
            
        })

    }

    /**
     * @function formatDate - convert (string| number) into MM/DD/YYYY 
     * @param {number} timestamp 
     */

    formatDate(timestamp) {
        if (typeof(timestamp) == "string") 
            timestamp = parseInt(timestamp);

        let date = new Date(timestamp);
        
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    /**
     * @function handlerForApply - act as a Hanlder, where we can capture current selected Date Range
     * @param {Object} event 
     * @param {Object} picker 
     */
    handlerForApply (event, picker) {
        this.setState({
            pickerRange: {
                startDate: picker.startDate.format('MM/DD/YYYY'),
                endDate: picker.endDate.format('MM/DD/YYYY')
            }
        })

        this.props.dateRange(picker.startDate.valueOf(), picker.endDate.valueOf())
    }

    refresh() {
        window.location.reload();
    }
    

    render() {
        debugger;
        let minDate = this.formatDate(this.state.pickerRange.startDate);
        let maxDate = this.formatDate(this.state.pickerRange.endDate);
        
        return (
            <Navbar bg="light" expand="lg" className="justify-content-between">
                <Navbar.Brand>
                    <b>SIGMOID ANALYTICS</b>
                </Navbar.Brand>

                {
                    this.state.pickerRange.endDate !== "0"?
                    <DateRangePicker initialSettings={{
                        minDate: minDate,
                        maxDate: maxDate
                    }} 
                    className="justify-content-end"
                    onApply={this.handlerForApply.bind(this)}
                    >
                        <input type="text" className="form-control" style={{"width": "250px"}}/>
                    </DateRangePicker> :
                    null
                }

                {
                    this.props.loader.loader ?
                    <Loader type="Puff" color="#00BFFF" height={30} width={30} />:
                    null
                }

                <Button variant="primary" onClick={ this.refresh }>Refresh</Button>
            </Navbar>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dateRange: (startDate, endDate) => dispatch(setDateRange(startDate, endDate))
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);