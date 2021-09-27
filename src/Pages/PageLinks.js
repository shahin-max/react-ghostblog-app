import Navbar from '../components/Navbar'
import TotalLinks from '../components/TotalLinks'
import BrokenInternalLinks from '../components/BrokenInternalLinks'
import BrokenExternalLinks from '../components/BrokenExternalLinks'

function Pages()
{
    return (
    <div>
        <div><Navbar page='pages'/></div>
        <div className='pages-container'>
            <TotalLinks />
            <BrokenInternalLinks />
            <BrokenExternalLinks />
        </div>
    </div>);
}

export default Pages;