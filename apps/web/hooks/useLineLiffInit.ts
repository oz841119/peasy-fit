import { useEffect, useState } from "react";
import liff from '@line/liff';

export default function useLineLiffInit() {
  const [ accessToken, setAccessToken ] = useState<null | string>(null)
  useEffect(() => {
    console.log(546654);
    liff.init({
      liffId: process.env.NEXT_PUBLIC_LINE_LIFF_ID!,
      // withLoginOnExternalBrowser: true
    })
    .then(() => {
      setAccessToken(liff.getAccessToken())
    })
  }, [])
  return {
    liff,
    accessToken
  }
}