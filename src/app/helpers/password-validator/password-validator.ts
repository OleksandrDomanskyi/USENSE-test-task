export class PasswordValidator {
  private static readonly MIN_LENGTH: number = 8;

  static validate(password: string): number {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (password.length === 0) {
      return 0;
    } else if (password.length < this.MIN_LENGTH) {
      return 4;
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 3;
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return 2;
    } else {
      return 1;
    }
  }
}