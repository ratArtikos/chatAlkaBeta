import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
        <div class={s.head}>
            <div class={s.ava}>
                <img src="https://st3.depositphotos.com/1007566/12483/v/950/depositphotos_124834240-stock-illustration-person-avatar-user-icon.jpg" />
            </div>
            <div class={s.info}>
                <div> Ратников Артём</div>
                <div> Moscow</div>
            </div>
            <div class={s.friend}>
                <div> 259 friends </div>
                <div> 179 subscribes </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileInfo;