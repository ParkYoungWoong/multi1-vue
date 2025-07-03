import router from '@/routes'

router.beforeEach(to => {
  // 인증이 필요한 페이지
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    // const res = await 토큰인증(token)
    if (token) {
      return true
    } else {
      return '/signin'
    }
  }

  // 인증이 필요치 않은 페이지
  if (to.meta.guestOnly) {
    const token = localStorage.getItem('token')
    if (token) {
      return '/'
    } else {
      return true
    }
  }

  return true
})
