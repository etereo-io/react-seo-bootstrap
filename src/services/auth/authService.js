let user = {}

export const logIn = () => {
  return Promise.resolve(user)
}

export const logOut = () => {
  return Promise.resolve()
}

export const register = (data) => {
  user = data
  return Promise.resolve(user)
}

export const sendResetPasswordToken = data => {
  return Promise.resolve()
}

export const resetPassword = data => {
  return Promise.resolve()
}