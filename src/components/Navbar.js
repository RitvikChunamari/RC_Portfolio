import React from 'react'
import { Link } from 'react-scroll'
import '../styles/navbar.css'
function Navbar() {
    return (
        <div >
            <nav>
                <input type="checkbox" id="sidebar-active" />

                {/* <div className='sidebar-btn'> */}
                <label htmlFor="sidebar-active" className='open-sidebar-button'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </div>
                </label>
                <label htmlFor="sidebar-active" className='close-sidebar-button'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </div>
                </label>
                {/* </div> */}
                <a className='logo'>RC</a>

                <div className="links-container">
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        delay={0}
                        offset={-100}
                        duration={50}
                        className='fancy'>
                        Home
                    </Link>
                    <Link to="hover"
                        spy={true}
                        smooth={true}
                        offset={-130}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        Resume
                    </Link>
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={15}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        About
                    </Link>
                    <Link to="work"
                        spy={true}
                        smooth={true}
                        offset={30}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        Work
                    </Link>
                    <Link to="contact"
                        spy={true}
                        smooth={true}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        Contact
                    </Link>
                    <section className="socials">
                        <svg width="24" height="24" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_16_84)">
                                <path d="M24.5 4.32187C30.9125 4.32187 31.6719 4.35 34.1938 4.4625C36.5375 4.56562 37.8031 4.95938 38.6469 5.2875C39.7625 5.71875 40.5688 6.24375 41.4031 7.07812C42.2469 7.92188 42.7625 8.71875 43.1938 9.83438C43.5219 10.6781 43.9156 11.9531 44.0188 14.2875C44.1313 16.8187 44.1594 17.5781 44.1594 23.9813C44.1594 30.3938 44.1313 31.1531 44.0188 33.675C43.9156 36.0188 43.5219 37.2844 43.1938 38.1281C42.7625 39.2438 42.2375 40.05 41.4031 40.8844C40.5594 41.7281 39.7625 42.2438 38.6469 42.675C37.8031 43.0031 36.5281 43.3969 34.1938 43.5C31.6625 43.6125 30.9031 43.6406 24.5 43.6406C18.0875 43.6406 17.3281 43.6125 14.8063 43.5C12.4625 43.3969 11.1969 43.0031 10.3531 42.675C9.2375 42.2438 8.43125 41.7188 7.59688 40.8844C6.75313 40.0406 6.2375 39.2438 5.80625 38.1281C5.47813 37.2844 5.08438 36.0094 4.98125 33.675C4.86875 31.1438 4.84063 30.3844 4.84063 23.9813C4.84063 17.5688 4.86875 16.8094 4.98125 14.2875C5.08438 11.9437 5.47813 10.6781 5.80625 9.83438C6.2375 8.71875 6.7625 7.9125 7.59688 7.07812C8.44063 6.23438 9.2375 5.71875 10.3531 5.2875C11.1969 4.95938 12.4719 4.56562 14.8063 4.4625C17.3281 4.35 18.0875 4.32187 24.5 4.32187ZM24.5 0C17.9844 0 17.1688 0.028125 14.6094 0.140625C12.0594 0.253125 10.3063 0.665625 8.7875 1.25625C7.20312 1.875 5.8625 2.69062 4.53125 4.03125C3.19063 5.3625 2.375 6.70313 1.75625 8.27813C1.16562 9.80625 0.753125 11.55 0.640625 14.1C0.528125 16.6687 0.5 17.4844 0.5 24C0.5 30.5156 0.528125 31.3312 0.640625 33.8906C0.753125 36.4406 1.16562 38.1938 1.75625 39.7125C2.375 41.2969 3.19063 42.6375 4.53125 43.9688C5.8625 45.3 7.20313 46.125 8.77813 46.7344C10.3063 47.325 12.05 47.7375 14.6 47.85C17.1594 47.9625 17.975 47.9906 24.4906 47.9906C31.0063 47.9906 31.8219 47.9625 34.3813 47.85C36.9313 47.7375 38.6844 47.325 40.2031 46.7344C41.7781 46.125 43.1188 45.3 44.45 43.9688C45.7812 42.6375 46.6063 41.2969 47.2156 39.7219C47.8063 38.1938 48.2188 36.45 48.3313 33.9C48.4438 31.3406 48.4719 30.525 48.4719 24.0094C48.4719 17.4938 48.4438 16.6781 48.3313 14.1188C48.2188 11.5688 47.8063 9.81563 47.2156 8.29688C46.625 6.70312 45.8094 5.3625 44.4688 4.03125C43.1375 2.7 41.7969 1.875 40.2219 1.26562C38.6938 0.675 36.95 0.2625 34.4 0.15C31.8313 0.028125 31.0156 0 24.5 0Z" fill="white" />
                                <path d="M24.5 11.6719C17.6938 11.6719 12.1719 17.1938 12.1719 24C12.1719 30.8062 17.6938 36.3281 24.5 36.3281C31.3062 36.3281 36.8281 30.8062 36.8281 24C36.8281 17.1938 31.3062 11.6719 24.5 11.6719ZM24.5 31.9969C20.0844 31.9969 16.5031 28.4156 16.5031 24C16.5031 19.5844 20.0844 16.0031 24.5 16.0031C28.9156 16.0031 32.4969 19.5844 32.4969 24C32.4969 28.4156 28.9156 31.9969 24.5 31.9969Z" fill="white" />
                                <path d="M40.1937 11.1843C40.1937 12.778 38.9 14.0624 37.3156 14.0624C35.7219 14.0624 34.4375 12.7687 34.4375 11.1843C34.4375 9.59054 35.7313 8.30616 37.3156 8.30616C38.9 8.30616 40.1937 9.59991 40.1937 11.1843Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_16_84">
                                    <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_16_82)">
                                <path d="M48.1508 0H3.83906C1.71641 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.71641 48 3.83906 48H48.1508C50.2734 48 52 46.4438 52 44.5406V3.45938C52 1.54688 50.2734 0 48.1508 0ZM15.4273 40.9031H7.70859V17.9906H15.4273V40.9031ZM11.568 14.8688C9.08984 14.8688 7.08906 13.0219 7.08906 10.7437C7.08906 8.46562 9.08984 6.61875 11.568 6.61875C14.0359 6.61875 16.0367 8.46562 16.0367 10.7437C16.0367 13.0125 14.0359 14.8688 11.568 14.8688ZM44.3117 40.9031H36.6031V29.7656C36.6031 27.1125 36.5523 23.6906 32.5914 23.6906C28.5797 23.6906 27.9703 26.5875 27.9703 29.5781V40.9031H20.2719V17.9906H27.6656V21.1219H27.7672C28.793 19.3219 31.3117 17.4188 35.0594 17.4188C42.8695 17.4188 44.3117 22.1625 44.3117 28.3313V40.9031Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_16_82">
                                    <rect width="52" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.1526 3.80782H43.8995L29.1594 20.6548L46.5 43.5798H32.9225L22.2881 29.6759L10.1199 43.5798H3.36886L19.1349 25.56L2.5 3.80782H16.4222L26.0348 16.5165L37.1526 3.80782ZM34.7846 39.5414H38.5232L14.3908 7.63408H10.3789L34.7846 39.5414Z" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                    </section>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
