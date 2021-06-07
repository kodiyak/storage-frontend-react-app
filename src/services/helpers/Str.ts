class Str {
  public slug(value?: string) {
    if (!value) return value
    return value
      .toString() // Cast to string
      .toLowerCase() // Convert the string to lowercase letters
      .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
      .trim() // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-')
  }

  public truncate(str?: string, length: number = 10) {
    if (!str || str === '') return str
    if (str.length <= length) {
      return str
    }
    return str.slice(0, length) + '...'
  }
}

export default new Str()
