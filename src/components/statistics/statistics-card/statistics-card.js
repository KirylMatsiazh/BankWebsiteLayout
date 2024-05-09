import './statistics-card.css';

export default function StatisticsCard({parameter, value, type}){
    return(
        <div className='statistics_card'>
            <h1>{value}{type}</h1>
            <h5>{parameter}</h5>
        </div>
    )
}