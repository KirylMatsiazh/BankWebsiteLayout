import './footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer_column">
                <h4 className="footer_column_header">About the company</h4>
                <p className='footer_column_content'>Learn To Love Growth<br/> And Change And You Will<br/> Be A Success. Microsoft<br/> Patch </p>
            </div>

            <div className="footer_column">
                <h4 className="footer_column_header">Products</h4>
                <a className='footer_column_link' href = '#'>CSR Activities</a>
                <a className='footer_column_link' href = '#'>Green banking</a>
                <a className='footer_column_link' href = '#'>News</a>
                <a className='footer_column_link' href = '#'>Ongoing campaign</a>
                <a className='footer_column_link' href = '#'>Updates</a>
            </div>

            <div className="footer_column">
                <h4 className="footer_column_header">Get started</h4>
                <a className='footer_column_link' href = '#'>Career</a>
                <a className='footer_column_link' href = '#'>Contact us</a>
                <a className='footer_column_link' href = '#'>Government securities</a>
                <a className='footer_column_link' href = '#'>Examples</a>
                <a className='footer_column_link' href = '#'>NIS</a>
            </div>

            <div className="footer_column">
                <h4 className="footer_column_header">About</h4>
                <a className='footer_column_link' href = '#'>IPDC at a Glance</a>
                <a className='footer_column_link' href = '#'>Mission, Vision & Values</a>
                <a className='footer_column_link' href = '#'>Corporate Governance</a>
                <a className='footer_column_link' href = '#'>Shareholders</a>
                <a className='footer_column_link' href = '#'>Investor Relations</a>
            </div>
            
        </div>
    )
}