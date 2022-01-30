import React from 'react';
import { View,Text } from 'react-native';

import ProgressBar from 'react-native-progress/Bar';

class ComparisonCard extends React.Component{
    constructor(){
        super();
        this.state={
            user1Progress:0,
            user2Progress:0,
            user1:{
                name:this.props?.comparisonInfo.user1.name,
                value:this.props?.comparisonInfo.user1.value
              },
              user2:{
                name:this.props?.comparisonInfo.user2.name,
                value:this.props?.comparisonInfo.user2.value
              }
        };
    }

    componentDidUpdate(prevProps){
        console.log("componentDidUpdate");
        console.log(this.state);
        if (prevProps.comparisonInfo.user1.name !== this.props.comparisonInfo.user1.name||prevProps.comparisonInfo.user1.value !== this.props.comparisonInfo.user1.value||prevProps.comparisonInfo.user2.name !== this.props.comparisonInfo.user2.name||prevProps.comparisonInfo.user2.value !== this.props.comparisonInfo.user2.value) {

            this.setState({
                user1:{
                    name:this.props.comparisonInfo.user1.name,
                    value:this.props.comparisonInfo.user1.value
                  },
                  user2:{
                    name:this.props.comparisonInfo.user2.name,
                    value:this.props.comparisonInfo.user2.value
                  }
            },()=>{
                let user1Value=this.state.user1.value;
                let user2Value=this.state.user2.value;
                console.log("user1value:"+user1Value+" type"+typeof user1Value);
                // console.log(this.props.comparisonInfo.user1.);
                let totalValue=Math.max(user1Value,user2Value);
                // console.log(totalValue);
                totalValue=totalValue+0.1*totalValue;//added 10% of max
                console.log("total "+totalValue);
                let user1Progress=user1Value/totalValue;
                let user2Progress=user2Value/totalValue;
                console.log("user1:"+user1Progress+" user2:"+user2Progress);
                if(!isNaN(user1Progress)&&!isNaN(user2Progress)){
                    this.setState({
                        user1Progress:user1Progress,
                        user2Progress:user2Progress
                    });
                }
            });

           

          }
        
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <View>

                <View>
                    <Text key={this.props.comparisonInfo.title}>{this.props.comparisonInfo.title}</Text>
                    <Text key={this.props.comparisonInfo.details}>{this.props.comparisonInfo.details}</Text>
                </View>

                <View>
                    
                    <View>
                        <Text key={this.state.user1.name}>{this.state.user1.name}</Text>
                        <View>
                            <ProgressBar progress={this.state.user1Progress}/>
                            <Text key={this.state.user1.value}>{this.state.user1.value}</Text>
                        </View>
                    </View>

                    
                    <View>
                        <Text key={this.state.user2.name}>{this.state.user2.name}</Text>
                        <View>
                            <ProgressBar progress={this.state.user2Progress}/>
                            <Text key={this.state.user2.value}>{this.state.user2.value}</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default ComparisonCard;