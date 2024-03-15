import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('calculate')
  async calculate(
    @Body() data: { operator: string; num1: number; num2: number },
  ): Promise<number> {
    const { operator, num1, num2 } = data;
    return await this.calculatorService.calculate(operator, num1, num2);
  }
}
