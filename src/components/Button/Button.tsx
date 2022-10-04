import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { Loading } from '../Loading'
import styles from './Button.module.scss'

interface Props {
  children?: ReactNode
  style?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

const Button: FC<Props> = ({ children, style, onClick, disabled = false, loading = false }) => {
  return (
    <button
      onClick={!loading ? onClick : () => null}
      className={clsx(
        style,
        styles.container,
        !loading && disabled && styles.disabled,
        !loading && !disabled && styles.passive,
      )}
    >
      {loading && <Loading />}
      {!loading && children}
    </button>
  )
}
export default Button
