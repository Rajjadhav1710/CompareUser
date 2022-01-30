import React from 'react';
import { View,Text } from 'react-native';

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
            <View>

                <View>
                    <Text>{this.props.comparisonInfo.title}</Text>
                    <Text>{this.props.comparisonInfo.details}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    
                    <View style={{flex:1}}>
                        <Text>{this.props.comparisonInfo.user1.name}</Text>
                        <View>
                            <ProgressBar progress={this.state.user1Progress}/>
                            <Text>{this.props.comparisonInfo.user1.value}</Text>
                        </View>
                    </View>

                    
                    <View style={{flex:1}}>
                        <Text>{this.props.comparisonInfo.user2.name}</Text>
                        <View>
                            <ProgressBar progress={this.state.user2Progress}/>
                            <Text>{this.props.comparisonInfo.user2.value}</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default ComparisonCard;