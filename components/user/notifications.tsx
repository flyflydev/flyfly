import { Spinner } from 'components/spinner'
import { upperFirst } from 'lodash'
import React, { FunctionComponent } from 'react'

import { useUpdateNotifications } from '@flyfly/hooks'
import { User } from '@flyfly/types'

type Props = {
  className?: string
  profile: User
}

export const NotificationsCard: FunctionComponent<Props> = ({
  className,
  profile
}) => {
  const { loading, updateNotifications } = useUpdateNotifications()

  return (
    <div
      className={`bg-white shadow-sm rounded-xl p-8 lg:p-4 flex flex-col lg:flex-row items-center ${className}`}>
      {['immediately', 'daily', 'weekly', 'disabled'].map((interval) => (
        <button
          className={`p-3 first:mt-0 first:ml-0 mt-4 lg:mt-0 lg:ml-4 leading-none rounded-lg text-black bg-gradient-to-br ${
            profile.emailNotifications === interval
              ? 'from-emerald-100 to-emerald-200'
              : 'from-gray-50 to-gray-100'
          }`}
          disabled={loading}
          key={interval}
          onClick={() =>
            updateNotifications({
              emailNotifications: interval
            } as User)
          }>
          {upperFirst(interval)}
        </button>
      ))}
      {loading && <Spinner className="mt-4 lg:mt-0 lg:ml-8" />}
    </div>
  )
}
