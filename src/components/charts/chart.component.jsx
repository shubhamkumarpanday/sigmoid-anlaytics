import React, { Component } from 'react';

import BarChart from './chart/bar-chart.component'
import ColumnChart from './chart/column-chart.component'

import { chartOne, chartTwo, chartThree } from '../../utils/ajax-calls/fetch-chart-utils'

import { TOKEN } from '../../utils/globals/globals'

import { setLoader } from '../../redux/loader/loader.action'

import { connect } from 'react-redux'

class ChartSection extends Component {
    constructor(props) {
        super();

        this.state = {
            chartOne: {
                original_data: {},
                chart_array: []
            },
            chartTwo: {
                original_data: {},
                chart_array: []
            },
            chartThree: {
                original_data: {},
                chart_array: []
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.communcation.startDate !== this.props.communcation.startDate || prevProps.communcation.endDate !== this.props.communcation.endDate) {
            let first_chart = chartOne(this.props.communcation.startDate, this.props.communcation.endDate, TOKEN)
            let second_chart = chartTwo(this.props.communcation.startDate, this.props.communcation.endDate, TOKEN)
            let third_chart = chartThree(this.props.communcation.startDate, this.props.communcation.endDate, TOKEN)

            this.props.setLoader(true);

            Promise
                .allSettled([first_chart, second_chart, third_chart])
                .then( (response) => {
                    debugger;
                    let response_one = response[0].value;
                    let response_two = response[1].value;
                    let response_three = response[2].value;
                    this.setState({
                        chartOne: {
                            original_data: response_one.result.data,
                            chart_array: response_one.result.data.map((value) => ({
                                label: value.publisherId,
                                y: parseInt(value["impressions_offered"])
                            }))
                        },
                        chartTwo: {
                            original_data: response_two.result.data,
                            chart_array: response_two.result.data.map((value) => ({
                                label: value.appSiteId,
                                y: parseInt(value["impressions_offered"])
                            }))
                        },
                        chartThree: {
                            original_data: response_three.result.data,
                            chart_array: response_three.result.data
                        }
                    })

                    this.props.setLoader(false)
                }).catch(rejection => {
                    console.log('request is aborted');
                })
        }
    }

    render() {

        return (
            <div className="container">
                <BarChart
                    chart_array={this.state.chartOne.chart_array}
                    title="Publisher Analytics"
                    x_title="Publisher"
                    y_title="Impressions Offered"
                    caption="Publisher Analysis"
                ></BarChart>

                <BarChart
                    chart_array={this.state.chartTwo.chart_array}
                    title="AppSite Analytics"
                    x_title="AppSite ID"
                    y_title="Impressions_Offered"
                    caption="AppSite Analytics"
                ></BarChart>

                <ColumnChart
                    chart_array={this.state.chartTwo.chart_array}
                    caption="App Site Id Analytics"
                ></ColumnChart>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        setLoader: (loader) => dispatch(setLoader(loader))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChartSection);
