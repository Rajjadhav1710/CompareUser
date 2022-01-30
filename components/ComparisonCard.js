import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import ProgressBar from 'react-native-progress/Bar';

class ComparisonCard extends React.Component{
    constructor(){
        super();
        this.state={
            user1Progress:0,
            user2Progress:0
        };
    }

    componentDidMount(){
        let user1Value=this.props.comparisonInfo.user1.value;
        let user2Value=this.props.comparisonInfo.user2.value;
        let totalValue=Math.max(user1Value,user2Value);
        // console.log(totalValue);
        totalValue=totalValue+0.1*totalValue;//added 10% of max
        // console.log(totalValue);
        let user1Progress=user1Value/totalValue;
        let user2Progress=user2Value/totalValue;
        if(!isNaN(user1Progress)&&!isNaN(user2Progress)){
            this.setState({
                user1Progress:user1Progress,
                user2Progress:user2Progress
            });
        }
        
    }

    render(){
        return(
            <View style={styles.comparisonCardContainer}>

                <View style={{marginVertical:15,marginHorizontal:10}}>
                    <Text style={{fontWeight:'bold',fontSize:25,fontFamily:'Roboto',color:'black'}}>{this.props.comparisonInfo.title}</Text>
                    <Text style={{fontSize:20,fontFamily:'Roboto'}}>{this.props.comparisonInfo.details}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    
                    <View style={{flex:1,marginHorizontal:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:"#AAAAAA",fontFamily:'Roboto'}}>{this.props.comparisonInfo.user1.name}</Text>
                            <Text style={{fontWeight:'bold',fontSize:20,color:'#4fbeff',fontFamily:'Roboto'}}>{this.props.comparisonInfo.user1.value}</Text>
                        </View>
                        
                        <View style={{marginVertical:15}}>
                            <ProgressBar progress={this.state.user1Progress} color="#4fbeff" unfilledColor="#DDDDDD" borderWidth={0} width={null} height={15} borderRadius={10}/>
                        </View>
                    </View>

                    
                    <View style={{flex:1,marginHorizontal:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:"#AAAAAA",fontFamily:'Roboto'}}>{this.props.comparisonInfo.user2.name}</Text>
                            <Text style={{fontWeight:'bold',fontSize:20,color:'#db0293',fontFamily:'Roboto'}}>{this.props.comparisonInfo.user2.value}</Text>
                        </View>
                        
                        <View style={{marginVertical:15}}>
                            <ProgressBar progress={this.state.user2Progress} color="#db0293" unfilledColor="#DDDDDD" borderWidth={0} width={null} height={15} borderRadius={10}/>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    comparisonCardContainer:{
        // borderWidth:1,
        backgroundColor:'#EEEEEE',
        borderRadius:8,
        marginHorizontal:10,
        marginVertical:20,
        elevation:20
    }
});

export default ComparisonCard;