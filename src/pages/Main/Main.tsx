import { useEffect, useState } from 'react'

import { Button, Input } from '../../components'
import formatNumberSpace from '../../helpers/formatNumberSpace'
import requestToBackend from '../../helpers/requestToBackend'
import styles from './Main.module.scss'

const Main = () => {
  const [loading, setLoading] = useState(false)

  const [creditAmount, setCreditAmount] = useState<number>(3300000)
  const [anInitialFee, setAnInitialFee] = useState<number>(420000)
  const [lisingTerm, setLisingTerm] = useState<number>(60)
  const [montPay, setMontPay] = useState<number>(
    ((creditAmount - anInitialFee) * (0.035 * Math.pow(1 + 0.035, lisingTerm))) /
      (Math.pow(1 + 0.035, lisingTerm) - 1),
  )
  const [amount, setAmount] = useState<number>(anInitialFee / creditAmount + lisingTerm * montPay)

  const handleChangeCreditAmount = (value: number) => {
    if (!anInitialFee) {
      return
    }
    const oldValueProcent = anInitialFee / creditAmount
    setAnInitialFee(value * oldValueProcent)
    setCreditAmount(value)
    return
  }

  const handleRequestToBackend = async () => {
    setLoading(true)
    await requestToBackend({ lisingTerm, creditAmount, anInitialFee, amount, montPay })
    setLoading(false)
    return
  }

  useEffect(() => {
    console.log(creditAmount, anInitialFee, lisingTerm)
    setMontPay(
      ((creditAmount - anInitialFee) * (0.035 * Math.pow(1 + 0.035, lisingTerm))) /
        (Math.pow(1 + 0.035, lisingTerm) - 1),
    )
    setAmount(anInitialFee / creditAmount + lisingTerm * montPay)
  }, [creditAmount, anInitialFee, lisingTerm])

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Рассчитайте стоимость автомобиля в лизинг</h1>
      <ul className={styles.input__list}>
        <Input
          onChange={(e) => handleChangeCreditAmount(e)}
          title='Стоимость автомобиля'
          stepVal={10000}
          minVal={999999}
          maxVal={6000001}
          value={creditAmount}
          tagVal='₽'
          disabled={loading}
        />
        <Input
          onChange={(e) => setAnInitialFee(e)}
          title='Первонапчальный взнос'
          minVal={(creditAmount * 10) / 100}
          maxVal={(creditAmount * 60) / 100}
          value={Math.ceil(anInitialFee)}
          tagVal={Math.ceil((anInitialFee / creditAmount) * 100)}
          stepVal={creditAmount / 100}
          procent
          borderTag
          disabled={loading}
        />
        <Input
          onChange={(e) => setLisingTerm(e)}
          title='Срок лизинга'
          minVal={1}
          maxVal={60}
          value={lisingTerm}
          tagVal='мес.'
          disabled={loading}
        />
      </ul>
      <div className={styles.result__container}>
        <ul className={styles.result__list}>
          <div>
            <p className={styles.result__title}>Сумма договора лизинга</p>
            <h2 className={styles.result__text}>
              {formatNumberSpace(Math.ceil(amount))} <span>₽</span>
            </h2>
          </div>
          <div>
            <p className={styles.result__title}>Ежемесячный платеж от</p>
            <h2 className={styles.result__text}>
              {formatNumberSpace(Math.ceil(montPay))} <span>₽</span>
            </h2>
          </div>
        </ul>
        <Button loading={loading} onClick={() => handleRequestToBackend()}>
          Оставить заявку
        </Button>
      </div>
    </main>
  )
}

export default Main
