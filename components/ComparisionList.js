import React from "react";

import { 
    FlatList,
    View,
    Text,
    StyleSheet
} from "react-native";

import ComparisonCard from "./ComparisonCard";

class ComparisonList extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.setState({
            data:[
                {
                    title:'Total prize won',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalCashWon
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalCashWon
                    }
                },
                {
                    title:'Total contest won',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalContestWon
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalContestWon
                    }
                },
                {
                    title:'Total Contest Participated',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalContestParticipated
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalContestParticipated
                    }
                },
                {
                    title:'Total pool won',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalPoolWon
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalPoolWon
                    }
                },
                {
                    title:'Total Pool Participated',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalPoolParticipated
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalPoolParticipated
                    }
                },
                {
                    title:'TotalChallenge Won',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalChallengeWon
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalChallengeWon
                    }
                },
                {
                    title:'Total Challenge Participated',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalChallengeParticipated
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalChallengeParticipated
                    }
                },
                {
                    title:'Total Challenge Created',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalChallengeCreated
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalChallengeCreated
                    }
                },
                {
                    title:'Total total xp',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.totalXP
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.totalXP
                    }
                },
                {
                    title:'highest Streak',
                    details:'"let see who earned more"',
                    user1:{
                      name:this.props.user1.name,
                      value:this.props.user1.highestStreak
                    },
                    user2:{
                      name:this.props.user2.name,
                      value:this.props.user2.highestStreak
                    }
                }

            ]
        });
    }

    render(){
        return(
            <View style={styles.comparisonListContainer}>
            <FlatList data={this.state.data}
            renderItem={({item})=>{
                return(
                    <ComparisonCard comparisonInfo={{
                        title:item.title,
                        details:item.details,
                        user1:{
                          name:item.user1.name,
                          value:item.user1.value
                        },
                        user2:{
                          name:item.user2.name,
                          value:item.user2.value
                        }
                      }}/>
                );
            }}/>
        </View>
        );

    }
}

const styles=StyleSheet.create({
    comparisonListContainer:{
        flex:1
    }
});

export default ComparisonList;