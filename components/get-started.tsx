import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

export const GetStarted: FunctionComponent = () => (
  <>
    <a
      className="bg-white flex items-center py-4 px-6 rounded-full shadow-sm"
      href="/api/auth/sign-in">
      <span className="text-black font-medium text-xl">Get started with</span>
      <Icon className="ml-4" icon="logoGithub" size={32} />
    </a>
    <div className="text-gray-600 mt-4">No credit card required</div>
  </>
)