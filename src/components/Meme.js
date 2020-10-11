import React, {Component} from 'react'

class MemeGenerator extends Component {

    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            imageList: [],
            randomImg: "https://i.imgflip.com/4acd7j.png",
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=> response.json())
            .then(data=> {
                this.setState({
                    imageList: data.data.memes
            })
        })
    } 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onButtonSubmit = (event) => {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * this.state.imageList.length)
        this.setState({
            randomImg: this.state.imageList[randomIndex].url
        })
    }

    render(){
        return (
            <div>
                <form className="meme-form">
                    <input 
                        name= "topText"
                        value= {this.state.topText}
                        placeholder= "Enter Top Text"
                        onChange = {this.handleChange}
                    />
                    <input 
                        name= "bottomText"
                        value= {this.state.bottomText}
                        placeholder= "Enter Bottom Text"
                        onChange = {this.handleChange}
                    />
                    <button onClick = {this.onButtonSubmit} > Flip Img </button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
            )
    }
}
export default MemeGenerator;