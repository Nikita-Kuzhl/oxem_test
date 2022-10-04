import clsx from 'clsx'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import formatNumberSpace from '../../helpers/formatNumberSpace'

import styles from './Input.module.scss'

interface Props {
  minVal: number
  maxVal: number
  value: number
  style?: string
  title: string
  disabled?: boolean
  stepVal?: number
  tagVal: number | string
  borderTag?: boolean
  procent?: boolean
  onChange: (value: number) => void
}

const Input: FC<Props> = ({
  minVal,
  maxVal,
  style,
  title,
  value,
  disabled,
  onChange,
  tagVal,
  borderTag,
  procent = false,
  stepVal = 1,
}) => {
  const [fakeValue, setFakeValue] = useState<number>(value)
  const handleChangeVal = (event: ChangeEvent<HTMLInputElement>) => {
    const changeFakeValue = Number(
      event.target.value
        .split('')
        .filter((item) => item !== ' ' && item !== '₽')
        .join(''),
    )
    if (isNaN(changeFakeValue)) {
      return
    }
    setFakeValue(changeFakeValue)
    if (changeFakeValue < maxVal && changeFakeValue > minVal) {
      return onChange(changeFakeValue)
    }
  }

  useEffect(() => {
    setFakeValue(value)
  }, [value])

  return (
    <div className={clsx(styles.container, disabled && styles.disabled)}>
      <h6 className={styles.title}>{title}</h6>
      <input
        className={clsx(style, styles.field)}
        type='text'
        value={formatNumberSpace(fakeValue)}
        disabled={disabled}
        min={minVal}
        max={maxVal}
        // eslint-disable-next-line no-useless-escape
        onChange={(e) => handleChangeVal(e)}
      />
      {!isNaN(fakeValue) &&
        procent &&
        fakeValue.toString().length < 8 &&
        fakeValue.toString().length > 5 && (
          <span
            style={{ marginLeft: fakeValue.toString().length * 5.5 }}
            className={styles.tag__in_value}
          >
            ₽
          </span>
        )}
      <p className={clsx(!borderTag && styles.tag, borderTag && styles.tag__border)}>
        {tagVal}
        {procent && '%'}
      </p>
      <ReactSlider
        className={styles.slider}
        trackClassName='slider__track'
        thumbClassName={styles.slider__thumb}
        min={minVal}
        max={maxVal}
        value={value}
        step={stepVal}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
export default Input
