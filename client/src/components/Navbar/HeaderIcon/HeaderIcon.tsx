import React from 'react'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

interface Props {
  Icon: any;
  active: boolean;
}

const HeaderIcon: React.FC<Props> = ({ Icon, active }) => {
  return (
    <div className='icon__container'>
      <Icon className={`icon__item mx:auto ${active && 'text-blue-500'}`} />
    </div>
  )
}

export default HeaderIcon