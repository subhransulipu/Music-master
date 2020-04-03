/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import "./App.css"



class Tracks extends Component{
  state={playing:false, audio:null, playingPreviewurl:false}

 

playAudio=previewUrl=>()=>{
    const audio =new Audio(previewUrl);

    if(!this.state.playing){
        audio.play();
        this.setState({playing:true,audio})
    }
    else{
        this.state.audio.pause();
        this.setState({playing:false})
    }
}

trackIcon=track=>{
    if(this.state.playing && this.state.playingPreviewurl === track.preview_Url){
        return <span>||</span>
    }
          return<span>&#9654;</span>
      }

render(){
    const {tracks}=this.props;
    if (!tracks) return null;
    const style={ display: 'inline-block',height:250, width: 300, margin: 20 }
return(
    <div>
        {
            tracks.map(item=>{
                return(
                    <div style={style} onClick={this.playAudio(item.preview_url)}>
                        <img src={item.album.images[0].url}
                        style={{
                            height:200,
                            width:200,
                        }}/>
                        <p className="track-text">{item.name}</p>
                    <p className="track-icon">{this.trackIcon(item)}</p>

                    </div>
                )
            })
        }
    </div>
)
}
}
export default Tracks;