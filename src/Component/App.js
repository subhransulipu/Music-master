import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';


const url="https://spotify-api-wrapper.appspot.com";

export default class App extends Component{

  state={artistQuery:'',artist:null,tracks:null }

  updateartistQuery= event=>{
   console.log("event",event.target.value);
   this.setState({artistQuery:event.target.value})
  }

  handelSearch =event=>{
   this.setState({artistQuery:event.target.value})
   console.log("event",event.target.value);

  }

//   searchArtist=()=>{
//     fetch(`${url}/artist/${this.state.artistQuery}`)
//     .then(response=>response.json())
//     .then(json=>{
//       this.setState({artistQuery:json.tracks})
//   })
// }



  searchArtist = ()=>{
    fetch(`${url}/artist/${this.state.artistQuery}`)
    .then(response=>response.json())
    .then(json=>{
      console.log('json',json.artists.items[0].id);

      if(json.artists.total>0){
        const artist=json.artists.items[0];
        // console.log("artist",artist);
        this.setState({artist});

        fetch(`${url}/artist/${artist.id}/top-tracks`)
        .then(response=>response.json())
        .then(json=>this.setState({tracks:json.tracks}))
        .catch(error=>alert(error.message));

      }
    }).catch(error=>alert(error.message));
  }


  render(){
    console.log("state",this.state)
    return(
      <div>
        <h2>Music Master</h2>
        <input 
        onChange={this.updateartistQuery}
        onKeyPress={this.handelSearch}
        placeholder='Search for an artist'></input>
        <button
        onClick={this.searchArtist}
        >Search</button>
         
        <Artist artist={this.state.artist}/>
        <Tracks tracks={this.state.tracks}/>
      </div>
    )
  }
}
