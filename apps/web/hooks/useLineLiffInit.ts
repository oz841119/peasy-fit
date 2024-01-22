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
      if(!accessToken) return liff.login()
      setAccessToken(accessToken)
    })
  }, [])
  return {
    liff,
    accessToken,
  }
}