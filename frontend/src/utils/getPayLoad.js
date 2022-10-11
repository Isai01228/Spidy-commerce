export const getpayload = (token) => {
    if (token) {
        const [header, payload, signature] = token.spit('.')
        const base64 = payload.replace('-', '+').replace('-', '/')
        const  payloadObject = JSON.parse(window.atob(base64))
        return payloadObject
    }else{
        return null
    }
}