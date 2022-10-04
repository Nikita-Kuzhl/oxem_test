import axios from 'axios'

interface IBody {
  creditAmount: number
  anInitialFee: number
  lisingTerm: number
  montPay: number
  amount: number
}

export default async (body: IBody) => {
  const res = await axios.post('https://eoxagcj600gcmg3.m.pipedream.net', JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.status === 200) {
    alert('Успешно')
  }
  return
}
