import React from 'react'
import './SideBar.css'
function SideBar() {
  return (
    <>
     <div className="sideBarContainer">
        <div className="profileSection">
            <div className="profilePic">
                N
            </div>
            <p className='profileName'>Name</p>
            <i className="fa-solid fa-arrow-left backIcon"></i>
        </div>

        <div className="navigators">
            <div className="navigator">
                <i className="fa-solid fa-house"></i>
                <p className="navigator-name">Home</p>
            </div>
            <div className="navigator">
                <i className="fa-solid fa-square-poll-vertical"></i>
                <p className="navigator-name">Section 1</p>
            </div>
            <div className="navigator">
                <i className="fa-solid fa-chart-line"></i>
                <p className="navigator-name">Section 2</p>
            </div>
            <div className="navigator">
                <i className="fa-solid fa-share-nodes"></i>
                <p className="navigator-name">Section 8</p>
            </div>
            <div className="navigator">
                <i className="fa-solid fa-share-nodes"></i>
                <p className="navigator-name">Section 9</p>
            </div>
        </div>

        <div className="sideBarBottom">
            <div className='sbbTop' >
                <div className="sbbAmount">
                    <div className="sbbProfilePic">
                        N
                    </div>
                    $0.90
                </div>
                <div className="sbbBuy">
                    Buy $XYZ
                </div>
            </div>

            <div className="sbbBottom">
                <i className="fa-solid fa-globe"></i>
                <div className="sbbToggler">
                 <i className="fa-solid fa-moon"></i>
                 <div className="toggle"></div>
                </div>
            </div>
            
        </div>
     </div>
      
    </>
  )
}

export default SideBar
