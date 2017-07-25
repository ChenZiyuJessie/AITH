/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';

var Rabbit = React.createClass({
  render(){
    return(
      <TouchableHighlight onPress={alert('woops')}>
      <Text style={styles.rabbit}>{this.props.show ?'🐰':''</Text>
      </TouchableHighlight>
      )
    
  }
})

export default class Game extends Component {
  constructor() {
    super();
  
    this.state = {
      highscore:0,
      timeCount:0,
      score:0,
      playing:false,
      holes:[false,false,false,false,false,false,false,false,false],
    };
  }
  _startGame(){
    this.setState({
      timeCount:timeLimit,
      playing:true,
      score:0,
      holes:[false,true,false,false,false,false,false,true,false],
    });
    
    rabbits=setInterval(()=>{

    var currentHoles= this.state.holes;
    currentHoles[Math.floor(Math.ramdom()*9)]=true;
    this.setState({
      if(Math.floor(Math.random()*3)){
        currentHoles=[false,true,false,false,false,false,false,true,false]
      }
      this.setState({
        holes:currentHoles,
      })
    }if(!this.state.playing){
      clearInterval(rabbits);
      title.setState({
      holes:[false,false,false,false,false,false,false,false,false],
      })
    }
  },500);
    }


    timer=setInterval( ()=>{
      this.setState({
        timeCount:this.state.timeCount-1,
      });
      if (this.state.timeCount==0) {
        this._startGame();

      }
    },1000);
  }

  _startGame(){
    clearInterval(timer);
    this.setState({
      playing:false,
      highScore:(this.state.score)>this.state.
       highScore)?this.state.score:this.state.
       highScore,
    })
  }
  _handleTouch(holeNumber){
    if(this.state.holes[holeNumber]) {
      this.setState({
        score:this.state.score+1,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.scoreRow}>
        <View style={styles.highscore}>
       <Text style={styles.label}>{this.state.Highscore}</Text>
       <Text style={styles.text}>{this.state.highScore}</Text>
       </View>
       <View style={styles.timeCount}></View>
       <Text style={styles.label}>Time</Text>
       <Text style={styles.text>{this.state.timeCount}</Text>
       <View>
       <View style={styles.currentScore}>
       <Text style={styles.label}>Score</Text>
       <Text style={styles.text}>{this.state.score}</Text>
       </View>
       </View>


    <View style={styles.holesRow}>
    <View style={styles.hole}>
    <Rabbit show={this.state.holes[0]}
    onPress={()=>this._handleTouch(0)}/>
    </View>
    

    <View style={styles.hole}>
    <Rabbit show={this.state.holes[1]}
    onPress={()=>this._handleTouch(1)}/>
    </View>
    

     <View style={styles.hole}>
    <Rabbit show={this.state.holes[2]}
    onPress={()=>this._handleTouch(2)}/>
    </View>

     <View style={styles.hole}>
    <Rabbit show={this.state.holes[3]}
    onPress={()=>this._handleTouch(3)}/>
    </View>


 <View style={styles.hole}>
    <Rabbit show={this.state.holes[4]}
    onPress={()=>this._handleTouch(4)}/>
    </View>


 <View style={styles.hole}>
    <Rabbit show={this.state.holes[5]}
    onPress={()=>this._handleTouch(5)}/>
    </View>


 <View style={styles.hole}>
    <Rabbit show={this.state.holes[6]}
    onPress={()=>this._handleTouch(6)}/>
    </View>

 <View style={styles.hole}>
    <Rabbit show={this.state.holes[7]}
    onPress={()=>this._handleTouch(7)}/>
    </View>

     <View style={styles.hole}>
    <Rabbit show={this.state.holes[8]}
    onPress={()=>this._handleTouch(8)}/>
    </View>

 <View style={styles.hole}>
    <Rabbit show={this.state.holes[9]}
    onPress={()=>this._handleTouch(9)}/>
    </View>

    <View style={styles.buttonRow}>
    <Button
     title:"Start Game"
     color:"white"
     onPress
     />

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scoreRow: {
     flex:1,
     backgroundColor:'black',
     flexDirection:'row',
  },
  label:{
    fontweight:'bold',
    fontSize:'15',
    alignSelf:'center',
  },

  highscore: {
     flex:1,
     backgroundColor:'green',
  },
  timeCount:{
    flex:1,
    backgroundColor:'yellow',
  },
  scoreRow:{
    flex:1,
    backgroundColor:'pink',

  },
  hole:{
    flex:6
    backgroundColor:'grey',
    flexDirection'column',
  },
  holesRow:{
    backgroundColor:'black',
    margin:5,
    flex:2,
    flexDirection:'row'

  },
  rabbit:{

  fontSize:30,
 },
 buttonRow:{
  backgroundColor:'darkgray',
},
touch:{
  backgroundColor:'white',
  alignItems:'center',
  flex:1,
  justifyContent:'white',
  borderRadius:'  1212'

}


  }

});

modules.exports=Game;