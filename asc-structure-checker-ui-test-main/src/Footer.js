import React from "react";


function Footer() {
    return (<div className={'footer'}>
        <div style={{width:'68%'}}>
    {<h5 style={{textAlign:'left'}}>(C) 2021 AeroSpace Consultants, Inc. All rights reserved</h5>}
    </div>
    <div style={{width:'10%'}}>
    {<h5 style={{textAlign:'right'}}><a>Terms of Use</a></h5>}
    </div>
    <div style={{width:'12%'}}>
    {<h5 style={{textAlign:'right'}}><a>Privacy Policy</a></h5>}
    </div>
    <div style={{width:'10%'}}>
    {<h5 style={{textAlign:'right'}}><a href='mailto:it@aerospace-consultants.com'>Contact Us</a></h5>}
    </div>
</div>);
};

export default Footer