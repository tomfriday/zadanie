class Global {
  testID() {
    const time = Date.now().toString()
    const id = time.substring(8)
    return '_' + id
  }
}
export const global = new Global()
