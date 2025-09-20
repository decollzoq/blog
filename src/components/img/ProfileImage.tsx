import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE = 'https://i.ifh.cc/mpapcv.jpg'

const ProfileImageWrapper = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE} alt='Profile Image' />
}

export default ProfileImage
