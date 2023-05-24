class Form extends React.Component {
    state = {
        city: "",
        aboutCity: "",
        isLoved: "",
        visitCounter: ""
    }

   handleChange = e => {
        if(e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
   }

    render() {
        return (
            <div className="form">
                <label className="form-elem">Miasto
                <input className="input" name="city" type="text" value={this.state.city} onChange={this.handleChange}/>
                </label>
                <br/>
                <label className="form-elem"> Napisz coś o mieście
                    <textarea className="input" name="aboutCity" type="text" value={this.state.aboutCity} onChange={this.handleChange}></textarea>
                </label>
                <br/>
                <label className="form-elem">Czy kochasz to Miasto? 
                    <input className="input" name="isLoved"type="checkbox" checked={this.state.isLoved} onChange={this.handleChange}></input>
                </label>

                <br/>

                <label className="form-elem" >Ile razy odwiedziłeś to miasto?
                    <select className="input" name="visitCounter" value={this.state.visitCounter} onChange={this.handleChange.bind(this)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
            </div>
        )
    }
}


ReactDOM.render(<Form/>, document.getElementById('root'))