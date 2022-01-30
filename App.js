import React from "react";

import { 
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";

import ComparisonCard from "./components/ComparisonCard";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      user1:{
        uid:"61e049f8dc6894582a696866",
        name:'',
        profilePic:'https://cdn-icons.flaticon.com/png/128/4529/premium/4529766.png?token=exp=1643475612~hmac=294dcd63c9c25e0773a1c0c9deb18fbe',
        totalCashWon:0,
        totalContestWon:0,
        totalContestParticipated:0,
        totalPoolWon:0,
        totalPoolParticipated:0,
        totalChallengeWon:0,
        totalChallengeParticipated:0,
        totalChallengeCreated:0,
        totalXP:0,
        highestStreak:0
      },
      user2:{
        uid:"61e04d3adc6894582a6968d9",
        name:'',
        profilePic:'https://cdn-icons.flaticon.com/png/128/4529/premium/4529766.png?token=exp=1643475612~hmac=294dcd63c9c25e0773a1c0c9deb18fbe',
        totalCashWon:0,
        totalContestWon:0,
        totalContestParticipated:0,
        totalPoolWon:0,
        totalPoolParticipated:0,
        totalChallengeWon:0,
        totalChallengeParticipated:0,
        totalChallengeCreated:0,
        totalXP:0,
        highestStreak:0
      },
      isLoading1:true,
      isLoading2:true,
      isLoading3:true,
      isLoading4:true
    }
  }

  getUsers() {

    //user1
    fetch('https://comparisonfeaturebackendacadio.herokuapp.com/loginedUserDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid: this.state.user1.uid }),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          user1: {
            ...this.state.user1,
            name: data.name,
            profilePic: data.profile_pic,
            totalCashWon: data.total_cash_won
          },
          isLoading1:false
        });
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch('https://comparisonfeaturebackendacadio.herokuapp.com/comparisonData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid: this.state.user1.uid }),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          user1: {
            ...this.state.user1,
            totalContestWon: data.contest_winners,
            totalContestParticipated: data.contest_participants,
            totalPoolWon: data.pool_winners,
            totalPoolParticipated: data.pool_participants,
            totalChallengeWon: data.challenge_winners,
            totalChallengeParticipated: data.challenge_participants,
            totalChallengeCreated: data.challenge_created,
            totalXP: data.totalXP,
            highestStreak: data.highestStreak
          },
          isLoading2:false
        });
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      //user2
      fetch('https://comparisonfeaturebackendacadio.herokuapp.com/loginedUserDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: this.state.user2.uid }),
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            user2: {
              ...this.state.user2,
              name: data.name,
              profilePic: data.profile_pic,
              totalCashWon: data.total_cash_won
            },
            isLoading3:false
          });
          // console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
      fetch('https://comparisonfeaturebackendacadio.herokuapp.com/comparisonData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: this.state.user2.uid }),
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            user2: {
              ...this.state.user2,
              totalContestWon: data.contest_winners,
              totalContestParticipated: data.contest_participants,
              totalPoolWon: data.pool_winners,
              totalPoolParticipated: data.pool_participants,
              totalChallengeWon: data.challenge_winners,
              totalChallengeParticipated: data.challenge_participants,
              totalChallengeCreated: data.challenge_created,
              totalXP: data.totalXP,
              highestStreak: data.highestStreak
            },
            isLoading4:false
          });
          // console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

  }

  isDataLoading(){
    if(this.state.isLoading1||this.state.isLoading2||this.state.isLoading3||this.state.isLoading4)
      return true;
    else
      return false;
  }     


  componentDidMount(){
    this.getUsers();
  }
  
  render(){
    // console.log("user1");
    // console.log(this.state.user1);
    // console.log("user2");
    // console.log(this.state.user2);
    return(
      <ScrollView style={styles.topContainer}>

        <View style={styles.userComparisonDetailsContainer}>

          <View style={styles.userContainer}>
            <View style={styles.userImageContainer}>
              <Image source={{uri: this.state.user1.profilePic}} 
              style={{width: 130, height: 130,borderRadius:100}} />
            </View>
            <View style={styles.userDetailsContainer}>
              <Text style={[styles.userDetails,{color:'#4fbeff'}]}>User1</Text>
            </View>
          </View>

          <View style={styles.vsImageContainer}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/4144/4144585.png'}} 
              style={{width: 60, height: 60}} />
          </View>
          
          <View style={styles.userContainer}>
            <View style={styles.userImageContainer}>
              <Image source={{ uri: this.state.user2.profilePic }}
                style={{ width: 130, height: 130,borderRadius:100 }} />
            </View>
            <View style={styles.userDetailsContainer}>
              <Text style={[styles.userDetails,{color:'#db0293'}]}>User2</Text>
            </View>
          </View>

        </View>
        {this.isDataLoading()?null:<ComparisonCard comparisonInfo={{
          title:'Total prize won',
          details:'let see who earned more',
          user1:{
            name:this.state.user1.name,
            value:this.state.user1.totalCashWon
          },
          user2:{
            name:this.state.user2.name,
            value:this.state.user2.totalCashWon
          }
        }}/>}


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  userComparisonDetailsContainer: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginVertical:30,
    // borderWidth:1
  },
  userDetails:{
    textAlign:'center',
    fontSize:25,
    fontFamily:'Roboto',
    fontWeight:'bold'
  },
  userDetailsContainer:{
    marginVertical:10
  }
});

export default App;
