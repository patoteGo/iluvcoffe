import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateFlavorDto } from './create-flavor.dto';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsArray()
  @IsOptional()
  readonly flavors: CreateFlavorDto[];
}
