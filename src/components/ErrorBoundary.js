import React, { Component}  from 'react'; 

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {  
        <div> 
            There is an Error. Maybe misspelled the city. 
        </div>  // Display fallback UI    this.setState({ hasError: true });    // You can also log the error to an error reporting service    logErrorToMyService(error, info);  }
    
    render() {
      if (this.state.hasError) {      // You can render any custom fallback UI      return <h1>Something went wrong.</h1>;    }    return this.props.children;
    }

  }