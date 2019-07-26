import React from 'react';
import kick_api from '../apiService';

export class Detail extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true,
      kickstarter: null
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    
    kick_api.get(id).then((res) => {
      this.setState({kickstarter: res.data, loading: false})
    })
  }

    render() {
      if(this.state.loading){
        return (
          <div>Loading</div>
        );
      }else{
        return(
          <div>
            {this.state.kickstarter.blurb}
          </div>
          );
      }

    }
  }

export default Detail;
