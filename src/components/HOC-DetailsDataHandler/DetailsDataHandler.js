import React, {Component} from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const DetailsDataHandler = (View) => { 
    return class extends Component {
      state = {
        data: null,
        loading: false,
        error: false,
        img: null,
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
            this.setState({loading: true});
        };
    };

    updateItem() {
      const {itemId} = this.props;
      
      if (!itemId) {
          return;
      };
      
      this.props.getData(itemId)
          .then(data => {
              this.setState({data, loading: false, img: this.props.getImageUrl(data)});
          })
          .catch(() => this.setState({error: true}));
    };

    render() {
        const {data, loading, img, error} = this.state;

        if (!data && !loading) {
          return <span>Selected item from a list</span>
        } else if (loading) {
          return <Spinner/>
        } else if (error) {
          return <ErrorIndicator/>
        };

        return (
          <View {...this.props} data={data} img={img}/>
        );
    };
  };

};
 
export default DetailsDataHandler;