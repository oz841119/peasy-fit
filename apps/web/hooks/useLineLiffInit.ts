import { useEffect, useState } from "react";
import liff from '@line/liff';

export default function useLineLiffInit() {
  const [ accessToken, setAccessToken ] = useState<null | string>(null)
  useEffect(() => {
    liff.init({
      liffId: process.env.NEXT_PUBLIC_LINE_LIFF_ID!,
      // withLoginOnExternalBrowser: true
    })
    .then(() => {
      const accessToken = liff.getAccessToken()
      console.log(accessToken);
      // https://peasy-fit-web.vercel.app/line/create-exercise
      // if(!accessToken) {
      //   liff.login({redirectUri: location.href})
      //   return
      // }
      setAccessToken(accessToken)
    })
  }, [])
  return {
    liff,
    accessToken,

  }
}