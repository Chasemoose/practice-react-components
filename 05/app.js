import React from 'react'
import { CreateRoot} from 'react-dom/client'

class weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            error: null,
        }
    }   

    componentDidMount() {
        const {lat, lon, apiKey} = this.props

        fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data[0],
                loading: false,
            })
        })
        .catch(error => {
            this.setState({
                error,
                loading: false,
            })
        })



    }


}