import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  async calculate(
    operator: string,
    num1: number,
    num2: number,
  ): Promise<number> {
    await this.delay(3000);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('Division by zero');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operator');
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
