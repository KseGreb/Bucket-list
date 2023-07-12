import { Component } from "react";
import Swal from 'sweetalert2'


export class BucketList extends Component{
    constructor(){
        super()

        this.state = {
            text: "",
            myBacketList: []
        }
    }

    onChangeInput = (e) => {
        this.setState({text: e}) 
    }

    addItem (item) {
        if (item === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your dream here!',
              })
        }
        else{
            let newList = this.state.myBacketList;
            newList.push(item);
            this.setState({myBacketList : newList, text: ""})
        }
        
    }

    deleteItem () {
        let newList = this.state.myBacketList;
        newList.length = 0;
        this.setState({myBacketList : newList})
    }

    onFormSubmit(e){
        e.preventDefault()
    }

    crossedWord(event){
        const ourItem = event.target;
        ourItem.classList.toggle("crossed");
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="main"> 
            
                <div className="bucketList">
                    <div className="container">
                        <h2>Bucket List</h2>
                    </div>
                    <div className="container">
                        <input
                            type="text"
                            placeholder="Things you want to do to make you life exiting:"
                            onChange={ (e) => {this.onChangeInput (e.target.value)}}
                            value = {this.state.text}
                        />
                    </div>
                    <div className="container">
                        <ol>
                            {this.state.myBacketList.map((item, index) => (
                                <li onClick={this.crossedWord}
                                    key={index}
                                >{item}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="container">
                        <button className="button one" onClick={() => this.addItem (this.state.text)}>Add new dream</button>
                    </div>
                    <div className="container">
                        <button className="button two" onClick={() => this.deleteItem ()}>All completed, delete and create new ones!</button>                    
                    </div>

                </div>
                
                  
            </div>
            </form> 
        )
    }
}