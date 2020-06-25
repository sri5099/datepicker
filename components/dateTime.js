import React, { Component } from "react";

import { View, Button,Platform, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
export  default class DateTime extends Component{
    
    state={
        date:new Date('2020-06-25T15:00:00'),
        mode:'date',
        show:false
    }
    setDate=(event,date)=>{
        date=date||this.state.state
        this.setState({
            show: Platform.OS==='ios'?true:false,
            date,
        });
    }

    show=mode=>{
        this.setState({
            show:true,
            mode,
        });
    }
    datepicker=()=>{
        this.show('date');
    }
    timepicker=()=>{
        this.show('time')
    }


  checkAndroidIos(show,date,mode){
      if(Platform.OS==='ios'){
          return(
              <View></View>
          )
      }
        else{
          return(
            <View>
               
            <View>
              <Button onPress={this.datepicker} title="From date" />
            </View>
            <View>
              <Button onPress={this.timepicker} title="From time" />
            </View>
            <View>
              <Button onPress={this.datepicker} title="To date" />
            </View>
            <View>
              <Button onPress={this.timepicker} title="To time" />
            </View>
            <View style={{height:300}}>

      { show && <DateTimePicker
               
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={this.setDate}>
              </DateTimePicker>}
              <Button title="Hide " onPress={this.showDatePicker}></Button>
       </View>
   


</View>
         
          )
      }
  }

    render(){
        const {show,date,mode}=this.state;
        return(
           
            <SafeAreaView>
                {this.checkAndroidIos(show,date,mode)}
            </SafeAreaView>
        )
        
    }
}
