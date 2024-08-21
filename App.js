import React,{useState,useEffect} from 'react'; // usestate->add state func component, useffect->functional
import styled from 'styled-component'; // for css in the page.

import HabitTracker from './components/HabitTracker';
import PieChart from './components/PieChart';
import Notes from './components/Notes';
import EodM from './components/EodM';

const AppContainer = styled.div`
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items:clearInterval;
  min-height: 100vh;
`;


const App = () => {
    const [habits,setHabits]=useState([
        {name:'Drink Water',progress:0},      // initialzing every habit,
        {name:'Excercise',progress:0},        // to zeroo.
        {name:'Read',progress:0},
        {name: 'Eat Healthy',progress:0},
    ]);

    const [endOfDay, setEndOfDay]=useState(null);
    const [showModal,setShowModal]=useState(true);
    
    // Increments the progress of habits by clicking.
    const incrementHabit=(index)=>{
        const newHabits=[...habits];    // newhabits is a array which is copy of original array
        newHabits[index].progress+=1;   
        setHabits(newHabits);
    };
     
    // end of the day time setting
    const handleEndOfDaySet=(time)=>{
        setEndOfDay(time);
        setShowModal(fasle);
    };

    // reminding the user to update the progress only at the end of the day.
    useEffect(() => {                   // useEffect used for making functional calls
        const checkTime =()=>{
            const currentTime=new Date();   // get current date and time
            if(endOfDay && currentTime>=endOfDay){   // if the curr time & eod time is same, no dialog box will appear.
                setShowModal(false);   // the dialog box will be invisible
            } else{
                setShowModal(true);   // the dialog box will be visible.
            }
        };
        const interval=setInterval(checkTime,60000);  // 60000 millisecond timer(approx 1min)
        return()=>clearInterval(interval);
            //example of how this code might behave:
            /*
            0.Initially, endOfDay is set to 5:00 PM.
            1.The effect sets up an interval timer to call checkTime every 1 minute.
            2.At 5:00 PM, checkTime is called and the modal dialog is shown.
            3.Later, the user updates the endOfDay value to 6:00 PM.
            4.The effect is re-run because endOfDay has changed.
            5.A new interval timer is set up to call checkTime every 1 minute, using the new endOfDay value of 6:00 PM.
            6.At 6:00 PM, checkTime is called and the modal dialog is shown again.
            */
    },[endOfDay]);

    return (
        <AppContainer>

        </AppContainer>
    )