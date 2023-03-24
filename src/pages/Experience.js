import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2014-2015'
        iconStyle={{background:'#3e497a',color:'#fff'}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>R.C.Fathima Boys High School</h3>
          <p>High School /SSLC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2015-2017'
        iconStyle={{background:'#3e497a',color:'#fff'}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Don Bosco Matric Higher Secondary School</h3>
          <p>Higher Secondary/SSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2017-2020'
        iconStyle={{background:'#3e497a',color:'#fff'}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Sacred Heart College</h3>
          <p>B.Sc.Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2020-2022'
        iconStyle={{background:'#3e497a',color:'#fff'}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Sacred Heart College</h3>
          <p>MCA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2022-2023'
        iconStyle={{background:'#e9d35b',color:'#fff'}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Relevel By Unacademy</h3>
          <p>Training</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience