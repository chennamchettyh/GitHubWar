var React = require('react');
var PropTypes = require('prop-types');


class Selectlanguage extends React.Component {
    render()
    {
        var languages = ['All', 'Java', 'Ruby', 'Python', 'Html'];

        return (
            <ul className='languages'>{languages.map(function(lang)
                {
                    return (
                            <li 
                            style ={lang === this.props.selectedLanguage? {color: '#d0021b'}: null}
                            onClick={this.props.onSelect.bind(null, lang)} 
                            key={lang}>{lang}
                            </li> 
                           );           
                    
                }, this)}
            </ul>
        )
    }
}

Selectlanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Feature extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    
    updateLanguage(lang)
    {
        this.setState(function(){
            return {
                selectedLanguage: lang
            }
        });
                    
    }  

    render(){       

        return (
                <Selectlanguage 
                selectedLanguage = { this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
               );
    }

}

module.exports = Feature;