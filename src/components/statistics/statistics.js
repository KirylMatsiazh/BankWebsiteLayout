import StatisticsCard from './statistics-card/statistics-card';
import './statistics.css';

export default function Statistics(){
    return(
        <div className='statistics'>
            <h1>Our best results of the year</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra ex at diam tristique, id suscipit magna facilisis.</p>
            <div className='statistics_card_container'>
                <StatisticsCard parameter={'LOAN PORTFOLIO'} value = {57.6} type = {'bn'}/>
                <StatisticsCard parameter={'CLASSIFIED LOAN PORTFOLIO'} value = {0.95} type = {'%'}/>
                <StatisticsCard parameter={'CLASSIFIED LOAN COVERAGE'} value = {388.5} type = {'%'}/>
                <StatisticsCard parameter={'DEPOSIT'} value = {50.4} type = {'bn'}/>
                <StatisticsCard parameter={'SHAREHOLDERS EQUITY'} value = {6.1} type = {'bn'}/>
                <StatisticsCard parameter={'CAPITAL ADEQUACY RATIO'} value = {18.51} type = {'%'}/>
                <StatisticsCard parameter={'MARKET CAPITALIZATION'} value = {8.5} type = {'bn'}/>
                <StatisticsCard parameter={'CREDIT RATING'} value = {'AAA'} type = {''}/>
            </div>
        </div>
    )
}