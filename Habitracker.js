import React from 'react';
import styled from 'styled-components';

const HabitContainer=styled.div`
   width: 80%;
   margin:20px 0;
`;

const ProgressBar=styled.div`
   background-color:#ddd;
   border-radius:20px;
   overflow:hidden;
   margin-bottom:10px;
`;

const Progress=styled.div`
   height: 30px;
   background-color:${props=>props.color};
   width:${props => props.progress}%;
   transition:width 0.3s ease-in-out;
   `;