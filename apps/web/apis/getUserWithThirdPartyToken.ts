type ThirdParty = 'line' | 'facebook' | 'google'
export default function getUserWithThirdPartyToken(thirdParty: ThirdParty, token: string) {
  const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL! + '/third_party/get_user'
  return (
    fetch(API_URL, {
      method: 'post',
      body: JSON.stringify({
        third_party: thirdParty,
        token: token,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
  )
}