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
    }


}