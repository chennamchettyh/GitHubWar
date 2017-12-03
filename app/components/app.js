var React = require('react');
var Feature = require('./features');



class App extends React.Component{
    render(){
        return(
            <div className='container'>
                <Feature />
            </div>
        );
    }
}


module.exports = App;