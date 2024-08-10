import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'));

class Weather extends React.Component {
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

    render() {
        const {data, loading, error } = this.state

        if (loading) {
            return <h2>Loading ....</h2>
        }

        if (error) {
            return <h2>Error: {error.message}</h2>
        }

        return (
            <div>
                <h1>Informacje pogodowe</h1>
                <p>Temperatura: {data.temp}</p>
                <p>Temperatura odczuwalna: {data.app_temp}</p>                
                <p>Miasto: {data.city_name}</p>
                <p>Pogoda: {data.weather.description}</p>
            </div>
        )
    }
}

class App extends React.Component {
    render () {

        const apiKey = 'c9179e967f64414ab3799949f15269ff'

        return (
            <div>
                <Weather lat={52.232222} lon={21.008333} apiKey={apiKey} />
            </div>
        )
    }
}

root.render(<App />)