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
        {name:'Drink Water',progress:0},
        {name:'Excercise',progress:0},
        {name:'Read',progress:0},
        {name: 'Eat Healthy',progress:0},
    ]);

    const [endOfDay, setEndOfDay]=useState(null);
    const [showModal,setShowModal]=useState(true);

    const incrementHabit=(index)=>{
        const newHabits=[...habits];
        newHabits[index].progress+=1;
        setHabits(newHabits);
    };
